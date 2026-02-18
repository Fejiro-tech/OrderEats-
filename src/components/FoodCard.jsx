import React from 'react'

export default function FoodCard({ food }) {
  return (
    <div className='shadow-md rounded-xl p-4 bg-white tex'>
      <img 
        src={food.image} 
        alt={food.description} 
        className='w-full h-80 object-cover rounded-lg'
      />
      <h2>{food.name}</h2>
      <p>{food.description}</p>
      <p>${food.price}</p>

    </div>
  )
}
