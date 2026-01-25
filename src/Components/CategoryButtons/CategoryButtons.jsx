// CategoryButtons.jsx
import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts.js";
import "./CategoryButtons.css";

// دالة لتحديد الألوان حسب الفئة
function getCategoryStyle(category, index) {
  const colorSchemes = [
    {
      background: "linear-gradient(135deg, #FEE7AA 0%, #FFDD80 100%)",
      color: "#3785D4"
    },
    {
      background: "linear-gradient(135deg, #6DA7E2 0%, #2C7ED1 100%)",
      color: "#FFFFFF"
    }
  ];
  
  // استخدام index للتناوب بين الألوان
  return colorSchemes[index % 2];
}

function CategoryButton({ label, targetId, active, onClick, index }) {
  const style = getCategoryStyle(label, index);
  
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
      {categories.map((category, index) => (
        <CategoryButton
          key={category}
          label={category}
          targetId={category}
          active={activeCategory === category}
          onClick={handleClick}
          index={index}
        />
      ))}
    </div>
  );
}

export default CategoryButtons;
