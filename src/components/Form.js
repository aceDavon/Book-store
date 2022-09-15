import React from 'react';

const Form = () => (
  <form
    action="#!"
    className="w-10/12 mx-auto border-t border-t-gray-300 pt-10"
  >
    <span className="text-xl font-semibold text-slate-300 block uppercase">
      Add New Book
    </span>
    <input
      type="text"
      className="w-5/12 p-2 border rounded mr-4 font-thin"
      placeholder="Enter book title"
    />
    <input
      type="text"
      className="w-4/12 p-2 border rounded mr-4 font-thin"
      placeholder="Enter book author"
    />
    <button
      type="button"
      className="py-2 px-14 rounded-md text-sm ml-2 bg-blue-600 text-white uppercase"
    >
      Add book
    </button>
  </form>
);

export default Form;
