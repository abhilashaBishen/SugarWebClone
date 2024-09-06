// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import CartItem from '../Components/CartItem/CartItem.jsx';

// import './Cart.css'; 

// const fetchCartItems = () => {
//   return [
//     { id: 1, name: 'Product 1', price: 10, quantity: 2 },
//     { id: 2, name: 'Product 2', price: 20, quantity: 1 },
//   ];
// };

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const items = fetchCartItems();
//     setCartItems(items);
//   }, []);

//   const calculateTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   return (
//     <div className="cart-container">
//       <h1 className="cart-title">Shopping Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="cart-items">
//             {cartItems.map((item) => (
//               <CartItem key={item.id} item={item} />
//             ))}
//           </ul>
//           <div className="cart-summary">
//             <h2>Total Price: ${calculateTotalPrice()}</h2>
//             <Link to="/checkout">
//               <button>Proceed to Checkout</button>
//             </Link>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;


// import React from 'react';
// import { useCart } from '../Context/CartContext'; // Import useCart
// import { Link } from 'react-router-dom';
// import './Cart.css'; 

// const Cart = () => {
//   const { cartItems } = useCart(); // Get cartItems from context

//   const calculateTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   return (
//     <div className="cart-container">
//       <h1 className="cart-title">Shopping Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="cart-items">
//             {cartItems.map((item) => (
//               <li key={item.id}>
                
//                 {item.title} - ${item.price} x {item.quantity}
//               </li>
//             ))}
//           </ul>
//           <div className="cart-summary">
            
//             <h2>Total Price: ${calculateTotalPrice()}</h2>
//             <Link to="/checkout">
//               <button>Proceed to Checkout</button>
//             </Link>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React from 'react';
import { useCart } from '../Context/CartContext'; // Import useCart
import { Link } from 'react-router-dom';
import './Cart.css';

// Cart Item Component
const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.img} alt={item.title} className="cart-item-img" />
      <div className="cart-item-details">
        <h2>{item.title}</h2>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    </div>
  );
};

const Cart = () => {
  const { cartItems } = useCart(); // Get cartItems from context

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id}>
                <CartItem item={item} /> {/* Render the CartItem component */}
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h2>Total Price: ${calculateTotalPrice()}</h2>
            <Link to="/checkout">
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;




