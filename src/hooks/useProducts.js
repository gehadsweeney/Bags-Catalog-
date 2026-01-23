import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://opensheet.elk.sh/1AZKO-A_wgu2-VuRZPFCXQMbzcAwl4i0aPgZR_7QBkGo/Sheet1")
      .then(res => res.json())   
      .then(data => {
        const formatted = data.map(item => ({
          category: item.category,
          description: item.description,
          code: item.code,
          material: item.material,
          color: item.color,
          dimensions: item.dimensions,
          capacity: item.capacity,
          price: item.price,
          images: [
            item.image1,  
            item.image2,
            item.image3,
            item.image4,
          ].filter(Boolean), 
        }));

        setProducts(formatted);
      });
  }, []);

  return products;
}
