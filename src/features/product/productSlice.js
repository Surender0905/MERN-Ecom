import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

///state

const initialState = {
  product: [],
  brand: [],
  categories: [],
  status: 'idle',
  totalItems: 0,
  selectedProduct: null,
};

//async thunk middleware
export const fetchProductByIdAsync = createAsyncThunk(
  'product/fetchProductById',
  async (id) => {}
);

//product slice
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {},
});
