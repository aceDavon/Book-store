import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="bg w-11/12 lg:w-10/12 mx-auto my-10 shadow shadow-gray-400">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
