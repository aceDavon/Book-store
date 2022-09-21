import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allCategories, checkStatus } from '../redux/categories/CategorySlice';

const Category = () => {
  const category = useSelector(allCategories);
  const dispatch = useDispatch();

  const handleClick = () => {
    const text = 'Under Construction';
    dispatch(checkStatus(text));
  };
  return (
    <div className="flex justify-center items-center">
      {category ? (
        <p className="text-center bg-blue-600 text-white font-semibold capitalize p-4 my-8">
          {category.msg}
        </p>
      ) : (
        <button
          type="button"
          className="bg-blue-600 text-white tracking-wider font-thin px-16 py-4 my-12 rounded-md uppercase"
          onClick={() => handleClick()}
        >
          Check Status
        </button>
      )}
    </div>
  );
};

export default Category;
