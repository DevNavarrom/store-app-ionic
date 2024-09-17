import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlist/wishlist.slice';
import productsReducer from './products/products.slice';

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    products: productsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;