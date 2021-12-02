import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import Error404 from './components/Error404';


import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Sidebar from './components/Sidebar';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/index" element={<App/>} />
        <Route exact path="/components/login" element={<Login/>} />
        <Route exact path="/components/register" element={<Register/>} />
        <Route exact path="*" element={<Error404/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('page-top')
);
