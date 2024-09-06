// import React, { useState } from "react";
// import "./UpperNav.css";
// import img1 from "../Assets/LargeLogo/img1.gif";
// import img3 from "../Assets/SquareImage/img3.jpg";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import shoppingbag from "../Assets/smallIcon/shoppingbag.svg";
// // import shoppingbag from "../Assest/smallIcon/shoppingbag.svg";
// import { ReactComponent as LoginIcon } from "../Assets/smallIcon/userlogin.svg";
// import { ReactComponent as SearchIcon } from "../Assets/smallIcon/searchLens.svg";

// const UpperNav = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (searchTerm.trim()) {
//       console.log("hi", searchTerm);
//       navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
//     }
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };
//   return (
//     <div className="completenavbar">
//       <div
//         className="uppernav"
//         style={{
//           backgroundImage: `url(${img3})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "50px",
//           display: "flex",
//           alignItems: "center",
//           padding: "0 20px",
//           color: "white",
//         }}
//       >
//         <p>GET APP</p>
//         <p>STORE</p>
//         <p>GIFT CARD</p>
//         <p>HELP</p>
//       </div>

//       <div className="navbar1">
//         <div className="nav1-logo">
//           <Link to="/">
//             <img src={img1} alt="" />
//           </Link>
//         </div>
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder='Try "Liquid Lipstick"'
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyDown={handleKeyPress}
//           />
//           <div className="serach-icon">
//             <SearchIcon style={{ width: "24px", color: "#000" }} />
//             <span className="search-text">Search</span>
//           </div>
//         </div>
//         <div className="login-section">
//           <Link to="/login" className="login-link">
//             <div className="icon-wrapper">
//               <LoginIcon
//                 style={{ width: "24px", height: "24px", color: "#000" }}
//               />
//             </div>
//             <span className="login-text">Login/Register</span>
//           </Link>
//           <Link to="/cart" className="nav-login-cart">
//             <img src={shoppingbag} alt="Shopping Bag" />
//             <span className="login-text">Cart</span>
//             <div className="nav-cart-count">0</div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpperNav;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext.jsx"; // Import the cart context
import "./UpperNav.css";
import img1 from "../Assets/LargeLogo/img1.gif";
import img3 from "../Assets/SquareImage/img3.jpg";
// import shoppingbag from "../Assets/smallIcon/shoppingbag.svg";
import shoppingbag from "../Assets/smallIcon/shoppingbag.svg"; // Import as a normal image
import { ReactComponent as LoginIcon } from "../Assets/smallIcon/userlogin.svg";
import { ReactComponent as SearchIcon } from "../Assets/smallIcon/searchLens.svg";

const UpperNav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { cartItems } = useCart(); // Get cartItems from the cart context

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log("hi", searchTerm);
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // Calculate total quantity of items in the cart
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="completenavbar">
      <div
        className="uppernav"
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50px",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          color: "white",
        }}
      >
        <p>GET APP</p>
        <p>STORE</p>
        <p>GIFT CARD</p>
        <p>HELP</p>
      </div>

      <div className="navbar1">
        <div className="nav1-logo">
          <Link to="/">
            <img src={img1} alt="Logo" />
          </Link>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder='Try "Liquid Lipstick"'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <div className="search-icon">
            <SearchIcon style={{ width: "24px", color: "#000" }} />
            <span className="search-text">Search</span>
          </div>
        </div>
        <div className="login-section">
          <Link to="/login" className="login-link">
            <div className="icon-wrapper">
              <LoginIcon
                style={{ width: "24px", height: "24px", color: "#000" }}
              />
            </div>
            <span className="login-text">Login/Register</span>
          </Link>
          <Link to="/cart" className="nav-login-cart">
            {/* <img src={shoppingbag} alt="Shopping Bag" /> */}
            <img src={shoppingbag} alt="Shopping Bag"  /> 
            <span className="login-text">Cart</span>
            {/* Display total quantity of items in the cart */}
            <div className="nav-cart-count">{totalQuantity}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpperNav;

