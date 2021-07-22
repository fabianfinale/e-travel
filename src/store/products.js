import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const slice = createSlice({
  name: 'products',
  initialState: {
    list: [],
  },
  reducers: {
    productsLoaded: (products, action) => {
      products.list = action.payload;
    },

    productAdded: (products, action) => {
      products.list.push(action.payload);
    },
  },
});

export default slice.reducer;

const { productsLoaded, productAdded } = slice.actions;

// Action creators
export const loadProducts = () => {
  return apiCallBegan({
    url: '/products',
    method: 'GET',
    onSuccess: productsLoaded.type,
  });
};

export const addProduct = (product) => {
  return apiCallBegan({
    url: '/products',
    method: 'POST',
    data: product,
    onSuccess: productAdded.type,
  });
};

// Selectors
