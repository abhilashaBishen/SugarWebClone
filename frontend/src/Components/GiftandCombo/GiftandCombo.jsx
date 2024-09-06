import image1 from '../Assets/Gifts_Makeupkits/img1.jpg';
import image2 from '../Assets/Gifts_Makeupkits/img2.jpg';
import image3 from '../Assets/Gifts_Makeupkits/img3.jpg';
import image4 from '../Assets/Gifts_Makeupkits/img5.jpg';

import React from 'react';
import { Link } from 'react-router-dom';
import './GiftandCombo.css';


const GiftAndCombo = () => {

  const products = [
    { id: 1, name: "Product 1", image: image1},
    { id: 2, name: "Product 2", image: image2},
    { id: 3, name: "Product 3", image: image3 },
    { id: 4, name: "Product 4", image: image4 },
  ];

  return (
    <div className="gift-combo">
      <div className="section-title">
        <span className="line"></span>
        <span className="title">GIFT & COMBO</span>
        <span className="line"></span>
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftAndCombo;

