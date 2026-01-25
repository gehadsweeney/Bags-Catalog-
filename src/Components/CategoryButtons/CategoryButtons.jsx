import { useEffect, useState, useRef } from "react";
import { useProducts } from "../../hooks/useProducts.js";
import "./CategoryButtons.css";

function CategoryButtons({ categories: categoriesProp, activeCategory: activeProp, onCategoryChange }) {
  const products = useProducts();
  const categories = categoriesProp ?? [...new Set(products.map(p => p.category))];

  const [activeCategory, setActiveCategory] = useState(activeProp ?? categories[0] ?? null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (activeProp) {
      setActiveCategory(activeProp);
    }
  }, [activeProp]);

  // close when click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (category) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
    document.getElementById(category)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="category-select-container" ref={dropdownRef}>
      <div 
        className={`custom-select ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span>{activeCategory || "الأقسام"}</span>
        <span className="arrow" />
      </div>

      {open && (
        <ul className="custom-options">
          {categories.map((category) => (
            <li
              key={category}
              className={category === activeCategory ? "active" : ""}
              onClick={() => handleSelect(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryButtons;

