import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, allBooks } from '../redux/books/BookSlice';
import Setter from './setter';

const Form = () => {
  const { values, onchange } = Setter();
  const dispatch = useDispatch();
  const books = useSelector(allBooks);

  const { title, author } = values;
  const handleSubmit = () => {
    const newBook = {
      id: books.length + 1,
      title,
      author,
    };
    dispatch(addBook(newBook));
  };
  return (
    <form
      action="#!"
      className="w-10/12 mx-auto border-t border-t-gray-300 pt-10"
    >
      <span className="text-xl font-semibold text-slate-300 block uppercase">
        Add New Book
      </span>
      <input
        type="text"
        name="title"
        className="w-5/12 p-2 border rounded mr-4 font-thin"
        placeholder="Enter book title"
        onChange={(e) => onchange(e)}
      />
      <input
        type="text"
        className="w-4/12 p-2 border rounded mr-4 font-thin"
        placeholder="Enter book author"
        name="author"
        onChange={(e) => onchange(e)}
      />
      <button
        type="button"
        className="py-2 px-14 rounded-md text-sm ml-2 bg-blue-600 text-white uppercase"
        onClick={handleSubmit}
      >
        Add book
      </button>
    </form>
  );
};

export default Form;
