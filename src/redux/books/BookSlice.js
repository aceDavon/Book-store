export const addBook = 'ADD_BOOK';
export const removeBook = 'REMOVE_BOOK';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case addBook:
      return state.concat(action.payload);
    case removeBook:
      return state.map((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
