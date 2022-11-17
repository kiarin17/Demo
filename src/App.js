//Делаем роутинг
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import Onas from "./pages/Onas";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
    <Link to="/signup">Зарегистрироваться</Link>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/onas" element={<Onas />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
