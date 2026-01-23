import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts.js";
import ProductCard from "../ProductCard/ProductCard.jsx";
import CategoryButtons from "../CategoryButtons/CategoryButtons.jsx";

function ProductsSections() {
  const products = useProducts();
  const categories = [...new Set(products.map(p => p.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? null);

  useEffect(() => {
    if (categories.length && !categories.includes(activeCategory)) {
      setActiveCategory(categories[0]);
    }
  }, [categories, activeCategory]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
  };

  return (
    <>
      {categories.map(category => (
        <section id={category} key={category}>
          <CategoryButtons
            categories={category === "حقائب الأمومة" ? [...categories].reverse() : categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />


          {products
            .filter(p => p.category === category)
            .map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                index={index}
                isFirst={index === 0}
              />
            ))}
        </section>
      ))}
    </>
  );
}
export default ProductsSections;