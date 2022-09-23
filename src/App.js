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
    <div className="bg-slate-100 w-11/12 mx-auto border border-gray-200 my-3 rounded">
      <div className="bg-gray-50 w-11/12 lg:w-10/12 mx-auto my-10 shadow-xl shadow-gray-400">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
