import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { fetchData } from './redux/books/BookSlice';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="bg w-11/12 lg:w-10/12 mx-auto my-10 shadow shadow-gray-400">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
