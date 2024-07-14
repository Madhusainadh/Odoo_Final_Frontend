// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
// Action Creators

// import { INCREMENT_QUANTITY, DECREMENT_QUANTITY } from './actionTypes';

export const addToCart = (product) => {
    console.log("dsmfsdfsdfsd",{
        type: ADD_TO_CART,
        payload: product
    })
    return {
        type: ADD_TO_CART,
        payload: product
    };
};


export const incrementQuantity = (id) => ({
    type: INCREMENT_QUANTITY,
    payload: id
  });
  
  export const decrementQuantity = (id) => ({
    type: DECREMENT_QUANTITY,
    payload: id
  });