import { createStore, combineReducers } from 'redux';
import cartReducer from './Reducers/CartReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    // other reducers can be added here
});

const store = createStore(rootReducer);
export default store;
