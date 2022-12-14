import React from 'react';

const Book = (data) => {
  const { items } = data;
  const { title, author } = items;
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xl font-semibold tracking-wider capitalize">{ title }</span>
      <span className="text-blue-400 font-light capitalize">{ author }</span>
    </div>
  );
};

export default Book;
