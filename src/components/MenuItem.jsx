import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function MenuItem({ food }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="border-b border-gray-800 last:border-b-0 py-4">
    
      <div className="flex items-center gap-3">
        <img
          src={food.image}
          alt={food.name}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
        />

        <div className="flex-1">
          <h3 className="text-sm md:text-base lg:text-lg font-semibold">{food.name}</h3>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm md:text-xl text-gray-400"
        >
          {isOpen ? "▲" : "▼"}
        </button>
      </div>

      {/* Open content */}
      {isOpen && (
        <div className="mt-2 flex flex-col gap-2 pl-2">
          <div className="">
            <p className="text-sm text-gray-400 max-w-[75%]">
            {food.description}
          </p>

          </div>
          
          <div className="flex items-center justify-between gap-2">
            <span className="text-base font-medium text-amber-400">
              ₦{food.price}
            </span>

            <button onClick={() => navigate(`/food/${food.id}`)} className="text-sm font-semibold cursor-pointer text-amber-400 hover:text-amber-300">View Menu</button>
          
          </div>

        </div>
        
      )}
      
      
    </div>
  );
}
