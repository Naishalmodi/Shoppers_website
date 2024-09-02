import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter, Route, Router, Routes, Link } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import LoginSignup from "./pages/LoginSignup";
import Cart from "./pages/Cart";
import Footer from "./component/Footer/Footer";
import men_banner from './component/Assets/banner_mens.png';
import women_banner from './component/Assets/banner_women.png';
import kids_banner from './component/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />

        <Route path="/Product" element={<Product />}>
            <Route path=":ProductId" element={<Product />} />
        </Route>

        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
