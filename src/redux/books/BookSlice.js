import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const Url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/j1EiMWtHAZ0ZOLEwXYWY/books';

export const fetchData = createAsyncThunk('books/fetchBooks', async () => axios.get(Url).then((res) => res.data));

export const addData = createAsyncThunk('books/addData', async (newBook) => {
  try {
    return await axios.post(Url, newBook).then((res) => res.data);
  } catch (err) {
    return err.message;
  }
});

export const removeData = createAsyncThunk('books/removeData', async (id) => {
  try {
    return await axios(`${Url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.data);
  } catch (error) {
    return error.message;
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState: { books: [], status: 'idle', msg: { bookAdd: '', bookRemove: '' } },
  reducers: {
    addBook: (state, action) => [...state, action.payload],
    removeBook: (state, action) => state.books.filter((book) => book.id !== action.payload),
  },
  extraReducers: (Builder) => {
    Builder.addCase(fetchData.pending, (state) => ({
      ...state,
      status: 'waiting',
    }))
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        const newArr = [];
        const arr = Object.entries(payload);
        arr.map(([key, value]) => {
          const data = value.map((x) => ({ ...x, id: key }));
          return newArr.push(...data);
        });
        return {
          ...state,
          books: newArr,
          status: 'idle',
        };
      })
      .addCase(fetchData.rejected, (state, { error }) => ({
        ...state,
        status: error,
      }))
      .addCase(addData.fulfilled, (state, { payload }) => ({
        ...state,
        msg: { ...state.msg, bookAdd: payload },
      }))
      .addCase(removeData.fulfilled, (state, { payload }) => ({
        ...state,
        msg: { ...state.msg, bookRemove: payload },
      }))
      .addCase(removeData.rejected, (state, action) => ({
        ...state,
        msg: { ...state.msg, bookRemove: action.error },
      }));
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export const allBooks = (state) => state.books;

export default bookSlice.reducer;
