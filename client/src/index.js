import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


//Подключение bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Подключение стилей
import './index.css';

//Подключение страниц
import Main from './pages/Main';
import Catalog from './pages/Catalog';
import Onas from './pages/Onas';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Bronirovanie from "./pages/Bronirovanie";

import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Main />}/>
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/onas" element={<Onas />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/bronirovanie" element={<Bronirovanie />} />
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
