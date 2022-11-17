import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {NavLink} from "react-router-dom"

//Подключение bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Подключение стилей
import './index.css';

//Подключение страниц
import App from './App';
import Main from './pages/Main';
import Catalog from './pages/Catalog';
import Onas from './pages/Onas';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/onas" element={<Onas />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/signup" element={<SignUp />} />

    
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
