// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';

// Action Creators
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
