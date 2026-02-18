import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "/images/deliver.avif",
    heading: "Fast Delivery",
    desc: "Promise to deliver within 45 minutes from our kitchen to your doorstep",
  },
  {
    icon: "/images/freshmeals.png",
    heading: "Fresh Meals",
    desc: "Prepared fresh daily with quality ingredients",
  },
  {
    icon: "/images/hero.jpg",
    heading: "Easy Ordering",
    desc: "Order your favorite meals in just a few clicks",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-100 py-24 px-6 flex flex-col justify-center items-center gap-10 ">
    <h2 className="text-3xl lg:text-5xl font-semibold uppercase text-black mb-8">Why Choose Us</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 px-12 md:px-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="border-b-4 border-amber-500 shadow rounded-xl p-6 bg-white text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 50}}
            whileInView={{ opacity:1, y: 0}}
            viewport={{ once: true, amount: 0.3}}
            transition={{ duration: 0.5, delay: index * 0.2}}
            whileHover={{ scale: 1.05,  }}
            
            >
            <img
                src={feature.icon}
                alt={feature.heading}
                className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h2 className="text-black text-xl font-bold mb-2">{feature.heading}</h2>
            <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
