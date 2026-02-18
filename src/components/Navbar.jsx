import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);

  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="px-6 lg:px-18 py-4 bg-white shadow-md text-black flex justify-between items-center z-50 fixed top-0 left-0 w-full">
      <div className="text-2xl md:text-3xl font-bold flex-1">
        <h2>Order<span className="text-amber-500">Eats</span></h2>
      </div>

      <button className="bg-amber-300 rounded-full lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <img src="/images/hamburger.png" alt="" width={30}/>
      </button>
      
      <div className="hidden lg:flex items-center gap-4 ">
        <div className="space-x-6 text-lg lg:text-xl font-bold">
          <Link to="/" className="hover:text-[#FF5722]">Home</Link>
          <Link to="/menu" className="hover:text-[#FF5722]">Menu</Link>
          
        </div>

        <div className="relative">
          <Link to="/cart" className="text-2xl">
            <img src="/images/cart.webp" width={30} height={30} className="rounded-full"/>
          </Link>

          {totalQty > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalQty}
            </span>
          )}
        </div>
      </div>

      <div className="relative z-50">
        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#1e1e1e] z-50 transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
        >
        {/* Close button */}
          <div
            className=" absolute right-4 top-6 text-2xl cursor-pointer bg-amber-300 rounded-full "
            onClick={() => setSidebarOpen(false)} 
          >
           <img src="/images/close.png" alt="" width={30}/>
          </div>

          {/* Menu items */}
          <div className="flex flex-col items-center space-y-12 font-bold text-amber-400 text-xl mt-24">
            <Link to="/" onClick={() => setSidebarOpen(false)} className="hover:text-[#FF5722]">
              Home
            </Link>
            <Link to="/menu" onClick={() => setSidebarOpen(false)} className="hover:text-[#FF5722]">
              Menu
            </Link>
            <div className="relative">
              <Link to="/cart" onClick={() => setSidebarOpen(false)} className="text-2xl">
                <img src="/images/cart.webp" width={30} height={30} className="rounded-full"/>
              </Link>

              {totalQty > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalQty}
                </span>
              )}
            </div>
        </div>
      </div>
    </div>    
    </nav>
  );
}
