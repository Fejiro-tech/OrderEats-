import React, { useState } from 'react';
import FoodCard from './FoodCard';

export default function FoodLists({ foods }) {
  
  return ( 
    <section className="w-full p-10 ">
      <div className='flex flex-col items-center gap-6 py-16'>

        <h2 className='uppercase text-3xl font-bold text-amber-500'>Taste The Fire</h2>

        {/* Food Cards */}
        <div className="max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
          {foods.map(food => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>

      
    </section>
  );
}
 