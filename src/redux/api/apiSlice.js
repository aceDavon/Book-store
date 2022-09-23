import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { Url } from '../../components/setter';

export const BooksAPI = createApi({
  reducerPath: 'booksAPI',
  baseQuery: fetchBaseQuery({ baseUrl: Url }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
    }),
    addBook: builder.mutation({
      query: (books) => ({
        url: '/books',
        method: 'POST',
        body: JSON.stringify(books),
        headers: {
          'content-type': 'Application/json; charset=UTF-8',
        },
      }),
    }),
  }),
});

export const { useGetBooksQuery, useAddBookMutation } = BooksAPI;

export const postBooks = async (book) => {
  const link = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/j1EiMWtHAZ0ZOLEwXYWY/books';
  try {
    return await axios.post(link, book).then((res) => res.data);
  } catch (err) {
    return err.message;
  }
};
