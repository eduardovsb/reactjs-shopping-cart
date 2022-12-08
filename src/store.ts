import { configureStore } from '@reduxjs/toolkit';
import products from './slices/Products/products.slice';
import cart from './slices/Cart/cart.slice';

// todo_improv: add navbar state management
const store = configureStore({
    reducer: {
        products,
        cart
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
