import React, { createContext, useState } from "react";
import all_product from "../component/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartitems, setCartitems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartitems);
  };

  const removeFromCart = (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartitems[item];
      }
    }
    return totalAmount;
  }

  const getTotalcartItems = ()=>{
    let totalItems = 0;
    for(const item in cartitems)
    {
      if(cartitems[item] > 0)
      {
        totalItems += cartitems[item];
      }
    }
    return totalItems;
  }

  const contextvalue = {
    all_product,
    cartitems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalcartItems,
  };
  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
