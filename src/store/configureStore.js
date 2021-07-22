import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import apiMiddleware from './middleware/api';
import reducer from './reducer';

const store = () => {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), apiMiddleware],
  });
};

export default store;
