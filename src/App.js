import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Shared/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <ScrollToTop smooth component={<p style={{ color: "blue"}}>⬆</p>}/>
    </div>
  );
}

export default App;
