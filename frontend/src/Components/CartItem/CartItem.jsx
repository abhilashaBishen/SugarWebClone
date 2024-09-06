// import React from 'react';
// import './CartItem.css'; // Import the CSS file

// const CartItem = ({ item }) => {
//   return (
//     <li className="cart-item">
//       <div>
//         <h3>{item.name}</h3>
//         <p>Price: ${item.price}</p>
//         <p>Quantity: {item.quantity}</p>
//         <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
//       </div>
//     </li>
//   );
// };

// export default CartItem;

// import React from 'react';
// import { useCart } from '../Context/CartContext'; // Import useCart
// import { Link } from 'react-router-dom';
// import './Cart.css';

// // Cart Item Component
// const CartItem = ({ item }) => {
//   return (
    
//     <div className="cart-item">
//       <img src={item.img} alt={item.title} className="cart-item-img" />
//       <div className="cart-item-details">
//         <h2>{item.title}</h2>
//         <p>Price: ${item.price}</p>
//         <p>Quantity: {item.quantity}</p>
//       </div>
//     </div>
//   );
// };

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
//                 <CartItem item={item} /> {/* Render the CartItem component */}
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
