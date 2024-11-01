import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Result from "./components/result";
import Login from "./components/Login";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      

      </Routes>
     
    </Router>
  );
}

export default App;
