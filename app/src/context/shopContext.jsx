import React, { createContext, useState } from "react";
import Axios from "axios";
import Product from "../pages/product";
// this is the shop context api page 
// here we are defining our states 

// we are creating a store in our application where it will keep track of states and functionality
//sounds similar to routes 
// 30:13 in the video
export const ShopContext = createContext(null);

// function to get the array and to create an empty object to present our initial state of our cart items
// could be an axios 
const getDefaultCart = () => {
    let cart = {}
    //gonna loop through all of the items
    for (let i = 1; i < Product.length + 1; i++) {
        // finding the cart item to have a key = to the i value
        cart[i] = 0
    }
    // returning the cart 
    return cart;
}


const ShopContextProvider = (props) => {

    // useState(()=> {
    //     Axios.get('http://localhost:5000/api/product/:id')
    //     .then(res => {
    //         let productData = res.data;
    //         console.log(productData);

    //         let renderProducts = productData.map((item) => <CartProductCard key={item._id} id={item._id} name={item.name} type={item.type} description={item.description} price={item.price} />)

    //         setProduct(renderProducts);
    //         setUpdateProducts(false);

    //     })
    //     .catch(err => console.log(err));
    // })

    // the use state will be an object
    const [cartItems, setCartItems] = useState(getDefaultCart());

    //adding item to cart
    const addToCart = (itemId) => {
        // the [itemId] is to grab a specific item with its id 
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    //removing from cart
    const removeFromCart = (itemId) => {
        // the [itemId] is to grab a specific item with its id 
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };
    // if you want to acces any one of these things go the where you want to acces the info i.e products 
    const contextvalue = {cartItems, addToCart, removeFromCart}

    return <ShopContext.Provider value={contextvalue}>{props.children}</ShopContext.Provider>;
}
export default ShopContextProvider