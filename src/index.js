import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import BookContainer from './components/BookContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />} path="/">
          <Route element={<BookContainer />} index />
        </Route>

      </Routes>
    </Router>
  </React.StrictMode>,
);
