import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BannerProducts from "./Components/Banner/BannerProducts";
import UpperNav from "./Components/UpperNav/UpperNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import  ProductCategory from './Pages/Cart';
import Home from "./Pages/ProductList";
import Product from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import NewLaunch from "./Components/NewLaunch/NewLaunch";
import Bestseller from "./Components/BestSellers/BestSellers";
import GiftAndCombo from "./Components/GiftandCombo/GiftandCombo";
import MousseMuseLipCream from "./Components/MousseMuseLipCream/MousseMuseLipCream";
import Footer from "./Components/Footer/Footer";
// import ProductCategory from "./Components/ProductCategory/ProductCategory.jsx";
import SearchResults from "./Pages/SearchResult.jsx";
import ProductList from './Components/ProductList/ProductList';
import ProductCategory from "./Components/ProductCategory/ProductCategory.jsx";
import CartProvider from "./Context/CartContext.jsx";
import Dashboard from "./Components/Dashboard.jsx";
function App() {
  return (
    <div>
    <CartProvider>
      <BrowserRouter>
        <UpperNav />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <BannerProducts />
                <NewLaunch />
                <Bestseller />
                <GiftAndCombo />
                <MousseMuseLipCream />
              </>
            }
          />

          <Route path="/" element={<Home />} />
          <Route path ="/dashboard" element ={<Dashboard/>} />
          <Route path="/lips" element={<ProductCategory category="lips" />} />
          <Route path="/eyes" element={<ProductCategory category="eyes" />} />
          <Route path="/face" element={<ProductCategory category="face" />} />
          <Route path="/nail" element={<ProductCategory category="nail" />} />
          <Route path="/skincare" element={<ProductCategory category="skincare" />} />
          <Route path="/accessories" element={<ProductCategory category="accessories" />} />
          <Route path="/gifting" element={<ProductCategory category="gifting" />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/offer" element={<ProductCategory category="offer" />} />
          <Route path="/bestseller" element={<ProductCategory category="bestseller" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/newlaunch" element={<ProductCategory category="newlaunch" />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path ='/search'  element={<SearchResults/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
