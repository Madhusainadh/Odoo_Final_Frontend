import { ADD_TO_CART } from "../Actions/CartActions";

const initialState = {
    items: [], // this will store the product items
};

const cartReducer = (state = initialState, action) => {
    console.log(ADD_TO_CART,action,state)
    switch (action.type) {
        case ADD_TO_CART:
            let found = false;  // Flag to track if item is found and replaced
            const updatedItems = state.items.map(item => {
                if (item.id === action.payload.id) {
                    found = true;  // Set flag to true if item is found
                    return action.payload;  // Replace with new item
                }
                return item;  // Return existing item if not matched
            });

            // If the item was not found and replaced, add it to the array
            if (!found) {
                updatedItems.push(action.payload);
            }

            return {
                ...state,
                items: updatedItems
            };
        default:
            return state;
    }
};

export default cartReducer;
