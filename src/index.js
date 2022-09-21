import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import BookContainer from './components/BookContainer';
import Category from './components/Category';
import Store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route element={<App />} path="/">
            <Route element={<BookContainer />} index />
            <Route element={<Category />} path="category" />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>,
);
