// import React from 'react'

// const BestSellers = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default BestSellers

import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../Assets/EyeProductsMedium/img1.jpg'; // Update with actual image paths
import img2 from '../Assets/EyeProductsMedium/img2.jfif';
import img3 from '../Assets/EyeProductsMedium/img3.jpg';
import './BestSeller.css';

const Bestseller = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to the product details page
  };

  return (
    <div className='bestseller'>
      <div className='text-container'>
        <span className='line'></span>
        <span className='bestseller-title'>BEST SELLER</span>
        <span className='line'></span>
      </div>
      <div className='products'>
        <div className='product-card' onClick={() => handleProductClick(1)}>
          <img src={img1} alt="Product 1" />
          <div className='product-info'>
            <h3>Product 1</h3>
            <p>$29.99</p>
          </div>
        </div>
        <div className='product-card' onClick={() => handleProductClick(2)}>
          <img src={img2} alt="Product 2" />
          <div className='product-info'>
            <h3>Product 2</h3>
            <p>$39.99</p>
          </div>
        </div>
        <div className='product-card' onClick={() => handleProductClick(3)}>
          <img src={img3} alt="Product 3" />
          <div className='product-info'>
            <h3>Product 3</h3>
            <p>$49.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestseller;

