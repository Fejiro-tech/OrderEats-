import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import foodData from "../data/food";

export default function FoodDetailsPage() {
  const { id } = useParams();
  const food = foodData.find(f => f.id === +id);

  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(0); //  local state

  if (!food) return <p className="text-white text-center mt-10">Food not found</p>;

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 mt-20 bg-black">
      <div className="w-full max-w-lg bg-gray-100 rounded-lg shadow-lg p-6 text-black ">
        
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-50 md:h-66 object-cover rounded mb-4"
        />

        <h2 className="text-lg md:text-2xl font-bold mb-2">{food.name}</h2>
        <p className="text-sm md:text-base text-gray-700 mb-4">{food.description}</p>
        <p className="text-amber-500 font-semibold mb-4 text-base md:text-lg">
          ₦{food.price}
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <button
            onClick={() => setQuantity(prev => Math.max(0, prev - 1))}
            className="px-6 py-2  text-black font-bold text-xl md:text-2xl"
          >
            -
          </button>

          <span className="font-bold text-2xl md:text-3xl text-amber-500">{quantity}</span>

          <button
            onClick={() => setQuantity(prev => prev + 1)}
            className="px-6 py-2 rounded text-black font-bold text-xl md:text-2xl"
          >
            +
          </button>
        </div>

        {/* Add To Cart */}
        <button
          onClick={() => addToCart(food, quantity)}
          className="w-full bg-black hover:bg-gray-900 text-amber-400 font-semibold py-2 md:py-4 rounded transition cursor-pointer text-sm md:text-base"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
