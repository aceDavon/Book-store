import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/BookSlice';
import categoryReducer from './categories/CategorySlice';

const rootReducer = combineReducers({
  booksReducer,
  categoryReducer,
});

const Store = configureStore({
  name: 'Books Store',
  reducer: rootReducer,
});

export default Store;
