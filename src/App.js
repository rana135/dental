import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Shared/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ScrollToTop from "react-scroll-to-top";
import Footer from './pages/Shared/Footer/Footer';
import Appointment from './pages/Appointment/Appointment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer></Footer>
      <ScrollToTop smooth component={<p style={{ color: "blue"}}>⬆</p>}/>
    </div>
  );
}

export default App;
