import React from "react";
import { motion } from "framer-motion";
import Features from "../components/Features";
import { useNavigate } from "react-router-dom";
import FoodLists from "../components/FoodLists";
import foodData from "../data/food";
import FoodGallery from "../components/FoodGallery";

const HomePage = () => {
  
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden pt-0">
      
      <div className="relative z-10 max-w-360 mx-auto  flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-8 min-h-screen pt-0 lg:pt-20 px-8 lg:px-16">
    
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-5/5 flex flex-col justify-center"
        >
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold mb-2 leading-tight">
            Delicious Meals <span className="text-amber-500">Delivered Fast</span>
          </h1>

          <p className="text-base lg:text-lg mb-8 max-w-lg text-gray-400">
            Explore a wide variety of dishes and order your favorite meals in just a few clicks!
          </p>

          <button 
            onClick={() => navigate("/menu")}
            className="w-fit bg-amber-500 text-black font-bold px-4 md:px-8 py-2 md:py-4 rounded-full shadow-xl hover:bg-amber-400 transition cursor-pointer text-sm md:text-base">
            Explore Menu
          </button>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="full md:w-3/5 lg:w-5/5 relative overflow-hidden rounded-full mt-10 lg:mt-0"
        >
          <img
            src="/images/hero5.png"
            alt="Delicious food"
            className="w-full h-full object-cover scale-120"
          />
        </motion.div>
      </div>
      
      <div className="mt-20">
        <Features />
      </div>

      <div className="bg-[#1e1e1e]">
        <FoodGallery />
      </div>
    </section>
  );
};

export default HomePage;