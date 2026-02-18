// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FoodDetailsPage from "./pages/FoodDetailsPage";
import Navbar from "./components/Navbar";
import './App.css'
import Footer from "./components/Footer";
import MenuPage from "./pages/MenuPage";

import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  
  
  return (
   <BrowserRouter>
      <ScrollToTop/>
      <ToastContainer position="top-center"/>
      <div className="min-h-screen flex flex-col bg-black">
        <Navbar />
        <main className="flex-1 w-full lg:max-w-480 mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />        
            <Route path="/food/:id" element={<FoodDetailsPage />} />  
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
