import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/BookSlice';
import CategoryReducer from './categories/CategorySlice';

const Store = configureStore({
  reducer: {
    books: booksReducer,
    category: CategoryReducer,
  },
});

export default Store;
