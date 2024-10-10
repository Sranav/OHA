import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { Home } from "./pages/Home";
import About from "./pages/About";
import { Calander } from "./pages/Calander";
import { Program } from "./pages/Program";
import { Alumni } from "./pages/Alumni";
import { Faq } from "./pages/Faq";
import { Contact } from "./pages/Contact";

function App() {

  return (
    <>
   
      <Router>
      
        <div className="text-body-text">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/calander" element={<Calander/>} />
            <Route path="/program" element={<Program />} />
            <Route path="/alumni" element={<Alumni/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
