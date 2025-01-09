import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import About from "./pages/About";
import Pagenotfound from "./pages/Pagenotfound";

import "./App.css";
import Try from "./try";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
