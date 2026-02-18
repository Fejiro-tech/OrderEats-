import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const CheckoutPage = () => {

    const { cartItems, clearCart} = useContext(CartContext);
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity, 0
    )

    const handlePayment = () => {

        if (!name || !address || !phone || !email) {
            toast.error("Please fill all fields");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address");
            return;
        }


        const handler = window.PaystackPop.setup({
            key: "pk_test_ebefc8503de6c56c5380aff7fbb1db90fc6582e6", 
            email: email,
            amount: totalPrice * 100, // amount in kobo
            ref: "" + new Date().getTime(), 
            onClose: () => toast.info("Payment cancelled"),
                callback: (response) => {
                    toast.success("Payment successful! Reference: " + response.reference);
                    clearCart(); // clear cart after payment
                    navigate("/"); // redirect to home or confirmation page
                },
        });

        handler.openIframe();
    }

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">Your cart is empty.</div>
        )
    }

    return (
        <div className='min-h-screen p-10 bg-black flex justify-center items-start '>
            <div className='w-full max-w-md bg-gray-900 p-6 rounded-lg text-white mt-20'>
                <h1 className='text-3xl font-bold mb-6 text-center'>Checkout</h1>

                <div className='mb-6'>
                    <h2 className='font-semibold mb-2 text-xl'>Order Summary</h2>
                    {cartItems.map((item) => (
                        <div key={item.id} className='bg-gray-800 flex items-center justify-between p-3 rounded mb-2'>
                            <div className='flex items-center gap-2'>
                                <img src={item.image} alt="" width={30} className="w-6 md:w-10 h-6 md:h-10 rounded-full object-cover"/>
                                <span>{item.name} x {item.quantity}</span>
                            </div>
                            <span>{item.price * item.quantity}</span>
                        </div>
                    ))}

                    <div className='flex justify-between font-bold text-xl mt-2'>
                        <span className='text-base md:text-lg'>Total:</span>
                        <span className='text-base md:text-lg'>{totalPrice}</span>
                    </div>
                </div>

                <div className='flex flex-col gap-4 mb-4'>
                    <input 
                        type="text"
                        placeholder='Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 rounded bg-gray-700 text-white placeholder-gray-400"
                    />

                    <input  
                        type='text'
                        placeholder='Delivery Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="p-2 rounded bg-gray-700 text-white placeholder-gray-400"
                    />

                    <input      
                        type='text'
                        placeholder='Phone Number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="p-2 rounded bg-gray-700 text-white placeholder-gray-400"
                    />
                    <input      
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 rounded bg-gray-700 text-white placeholder-gray-400"
                    />
                </div>

                <button onClick={handlePayment} className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded cursor-pointer">Pay Now</button>

            </div>
        </div>
    )
}

export default CheckoutPage