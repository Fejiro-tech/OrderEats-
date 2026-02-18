import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, increaseQty, decreaseQty } = useContext(CartContext);
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return ( 
    <div className="min-h-screen p-14 flex  justify-center items-start text-black">

      <div className="w-full max-w-140 mt-20">

        <Link to="/menu" className='text-amber-300 px-1  underline hover:text-[#FF5722] '>Continue Shopping</Link>
        <div className="w-full max-w-140 bg-white p-3 md:p-6 rounded-lg shadow-lg text-black mt-3 ">
          <h1 className="text-2xl md:text-3xl font-bold  mb-6 text-center">Your Cart</h1>

          {cartItems.length === 0 ? (
            <p className="text-amber-600 text-center">Your cart is empty</p>
          ) : (
            <div className="flex flex-col gap-4">
              {/* Cart items */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-[#1e1e1e] rounded p-3"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                      <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                      />
                      <div>
                          <h3 className="text-sm md:text-base font-semibold text-white">{item.name}</h3>
                          <p className="text-amber-400 font-medium text-sm md:text-base ">₦{item.price}</p>
                      </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 md:gap-4">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className=" ounded text-white font-bold"
                    >
                      -
                    </button>
                    <span className="font-bold text-amber-400">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className=" rounded text-white font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              {/* Total price */}
              <div className="flex justify-between items-center mt-2 md:mt-4 text-black font-bold text-xl">
                <span className="text-base md:text-lg">Total:</span>
                <span className="text-base md:text-lg">₦{totalPrice}</span>
              </div>

              {/* Proceed to Checkout */}
              <button
                onClick={() => navigate("/checkout")}
                disabled={cartItems.length === 0}
                className={`w-full py-3 md:py-4 rounded mt-2 md:mt-4 font-semibold transition text-sm md:text-base cursor-pointer ${
                  cartItems.length === 0
                    ? "bg-gray-300 cursor-not-allowed text-gray-300"
                    : "bg-black hover:bg-gray-900 text-amber-400"
                }`}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
