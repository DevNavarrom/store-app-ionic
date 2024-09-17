import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../interfaces/product';


interface productsState {
  items: Product[];
}

const initialState: productsState = {
  items: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;