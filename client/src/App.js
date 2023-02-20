//Делаем роутинг
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import Onas from "./pages/Onas";
import SignUp from "./pages/SignUp"
import React from "react";
import Bronirovanie from "./pages/Bronirovanie";


function App () {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/onas" element={<Onas />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/bronirovanie" element={<Bronirovanie />} />
      
      
    </Routes>
    </BrowserRouter>
  );
  }


export default App;
