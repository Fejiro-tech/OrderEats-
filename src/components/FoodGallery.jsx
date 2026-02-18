import React from 'react'
import foodData from '../data/food'
import { motion } from "framer-motion";

const FoodGallery = () => {

    const previewFood = foodData.slice(0, 6)

  return (
    <div className=' max-w-360 mx-auto px-16 py-20'>
        <h2 className='uppercase font-bold text-amber-500 text-3xl text-center mb-2'>Taste the Fire.</h2>
        <p className='text-center text-gray-400 text-lg mb-'>Just a glimpse of what we offer!</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-10 '>
            {previewFood.map((food) => (
                <motion.div key={food.id}
                    initial={{ opacity: 0, y: 50}}
                    whileInView={{ opacity:1, y: 0}}
                    viewport={{ once: true, amount: 0.3}}
                    transition={{ duration: 0.5, delay: food.id * 0.2}}
                    whileHover={{ scale: 1.05,  }}
                    className='p-2'
                >
                    <img 
                        src={food.image}
                        alt={food.name}
                        className='w-full h-50 md:h-60 rounded-2xl object-cover hover:scale-105 transition-transform'
                    />

                </motion.div>


            ))}
        </div>

    </div>
  )
}

export default FoodGallery