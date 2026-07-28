
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Resources from "./pages/Resources";
import MockTests from "./pages/MockTests";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

import { Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/mocktests" element={<MockTests />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
     </Routes>
      <Footer/>
   
    </>
  )
}

export default App
