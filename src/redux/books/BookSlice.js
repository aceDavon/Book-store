export const addBook = "bookstore/books/ADD_BOOK";
export const removeBook = "bookstore/books/REMOVE_BOOK";

const booksReducer = (state = [books: []], action) => {
  switch (action.type) {
    case addBook:
      return {
        ...state, action.payload
      }
    case removeBook:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
