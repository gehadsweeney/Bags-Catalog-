import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product, index, isFirst }) {
  const [mainImage, setMainImage] = useState(product.images[0] || "");
  const isReversed = index % 2 !== 0;

  const descriptionItems = (product.description || "")
    .split("|")
    .map(item => item.trim())
    .filter(Boolean);

  return (
    <div className={`product-card ${isReversed ? "reverse" : "normal"} ${isFirst ? "first-card" : ""}`}>
      
      <div className="card-divider" />
      <div className="product-content">
        <div className="product-gallery">
          <div className="thumbnails">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.category} thumbnail ${i + 1}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>

          <div className="main-image-wrapper">
            {mainImage ? (
              <img
                className="main-image"
                src={mainImage}
                alt={product.category}
              />
            ) : (
              <div className="no-image">لا توجد صورة</div>
            )}
          </div>
        </div>

        <div className="product-details">
          <h2 className="category-title">{product.category}</h2>

          <div className="product-description">
            <strong>وصف المنتج:</strong>
            <ul>
              {descriptionItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="details-divider" />

          <div className="info-list">
            <div className="info-row">
              <span className="label">رمز المنتج:</span>
              <span className="value">{product.code}</span>
            </div>
            <div className="info-row">
              <span className="label">المادة:</span>
              <span className="value">{product.material}</span>
            </div>
            <div className="info-row">
              <span className="label">اللون:</span>
              <span className="value">{product.color}</span>
            </div>
            <div className="info-row">
              <span className="label">الأبعاد:</span>
              <span className="value">{product.dimensions}</span>
            </div>
            {product.capacity && (
              <div className="info-row">
                <span className="label">السعة:</span>
                <span className="value">{product.capacity}</span>
              </div>
            )}
          </div>

          <button className="price-badge">
            <span className="price-label">السعر</span>
            <span className="price-value">{product.price}</span>
            <img className="price-icon" src="./Saudi.png" alt="" />
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;