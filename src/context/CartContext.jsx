import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {
        
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });


const addToCart = (food, quantity) => {

    if (!quantity || quantity <= 0) {
        toast.error("Invalid quantity");
        return;
    }

    const existingItem = cartItems.find(item => item.id === food.id);

    setCartItems(prevCartItems => {

        if (existingItem) {

            return prevCartItems.map(item =>
                item.id === food.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
        } else {
            
            return [...prevCartItems, { ...food, quantity }];
        }
        
    });

    if (existingItem) {
        toast.success("Item quantity updated 🛒");
    } else {
        toast.success("Item added to cart 🛒");
    }
};


    const increaseQty = (id) => {
        setCartItems(prevCartItems =>
            prevCartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCartItems(prevCartItems =>
            prevCartItems
            .map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter(item => item.quantity > 0)
        );
    };


    const getItemQuantity = (id) => {
        const item = cartItems.find(item => item.id === id);
        return item ? item.quantity : 0;
    };

    const clearCart = () => {
        setCartItems([])
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);



  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, increaseQty, decreaseQty, getItemQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
