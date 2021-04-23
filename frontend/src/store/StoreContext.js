import React from "react";

import StoreReducer from "./StoreReducer";

const initialValues = {
    products: [],
    cart: []

};

export const StoreContext = React.createContext(initialValues);
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(StoreReducer, initialValues);

  const setProducts = data => {
    // console.log('setProducts in context');
    // console.log(data);
    dispatch({
      type: 'SET_PRODUCTS',
      payload: data,
    });
  }
  const addToCart = data => {
    console.log(data);
    dispatch({
      type: 'ADD_TO_CART',
      payload: data,
    });
  }
  const removeFromCart = data => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: data,
    });
  }

  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch,

        setProducts,
        currentProducts: state?.products,

        addToCart,
        removeFromCart,
        currentCart: state?.cart,
      }}>
          {children}
      </StoreContext.Provider>
  )
}
