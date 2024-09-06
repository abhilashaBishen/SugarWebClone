// src/Components/ProductCard/ProductCard.js
// src/components/ProductCard/ProductCard.js
// import React from "react";
// import "./ProductCard.css"; 

// function ProductCard({ product }) {
//   return (
//     <div className="product-box">
//       <div className="product-card">
//         <img src={product.img} alt={product.title} />

//         <h2>{product.title}</h2>
//         <p>Price: ${product.price}</p>
//         <button>Add to Cart</button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


import React from "react";
import "./ProductCard.css"; 
import { useCart } from "../../Context/CartContext"; // Import useCart

function ProductCard({ product }) {
  const { addToCart } = useCart(); // Get addToCart from context

  return (
    <div className="product-box">
      <div className="product-card">
        <img src={product.img} alt={product.title} />
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button> {/* Add to cart */}
      </div>
    </div>
  );
}

export default ProductCard;

