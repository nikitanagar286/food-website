import { createContext, useEffect, useState } from "react";
import { Food_List } from "../components/MenuList";
export const Storecontext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});
  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: +prev[itemId] + 1 }));
    }
  };
  const removeTocart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let TotalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = Food_List.find((product) => product._id === item);
        TotalAmount += itemInfo.price * cartItem[item];
      }
    }
    return TotalAmount;
  };

  {
    const ContextValue = {
      Food_List,
      cartItem,
      setCartItem,
      addToCart,
      removeTocart,
      getTotalCartAmount,
    };
    return (
      <Storecontext.Provider value={ContextValue}>
        {props.children}
      </Storecontext.Provider>
    );
  }
};
export default StoreContextProvider;
