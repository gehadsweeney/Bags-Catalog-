// CategoryButtons.jsx
import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts.js";
import "./CategoryButtons.css";

// دالة لتحديد الألوان حسب الفئة
function getCategoryStyle(category) {
  const styles = {
    "حقائب الطعام ": {
      background: "linear-gradient(135deg, #FEE7AA 0%, #FFDD80 100%)",
      color: "#3785D4"
    },
    "حقائب الأمومة": {
      background: "linear-gradient(135deg, #6DA7E2 0%, #2C7ED1 100%)",
      color: "#FFFFFF"
    }
  };
  
  return styles[category] || {
    background: "linear-gradient(135deg, #333 0%, #666 100%)",
    color: "#fff"
  };
}

function CategoryButton({ label, targetId, active, onClick }) {
  const style = getCategoryStyle(label);
  
  return (
    <button
      className={`category-btn ${active ? "active" : ""}`}
      style={style}
      onClick={() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
        });
        onClick(targetId);
      }}
    >
      {label}
    </button>
  );
}

function CategoryButtons({ categories: categoriesProp, activeCategory: activeProp, onCategoryChange }) {
  const products = useProducts();

  // إذا تم تمرير الفئات من الأعلى نستخدمها، وإلا نبنيها من البيانات
  const categories = categoriesProp ?? [...new Set(products.map(p => p.category))];

  const [activeCategory, setActiveCategory] = useState(activeProp ?? categories[0] ?? null);

  useEffect(() => {
    if (activeProp) {
      setActiveCategory(activeProp);
    }
  }, [activeProp]);

  const handleClick = (targetId) => {
    setActiveCategory(targetId);
    onCategoryChange?.(targetId);
  };

  return (
    <div className="category-buttons-container">
      {categories.map(category => (
        <CategoryButton
          key={category}
          label={category}
          targetId={category}
          active={activeCategory === category}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default CategoryButtons;
