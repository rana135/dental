import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Shared/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ScrollToTop from "react-scroll-to-top";
import Footer from './pages/Shared/Footer/Footer';
import Appointment from './pages/Appointment/Appointment';
import Login from './pages/Login/Login';
import NotFound from './pages/Shared/NotFound';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyReview from './pages/Dashboard/MyReview';
import MyAppointment from './pages/Dashboard/MyAppointment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyAppointment />} />
        <Route path="review" element={<MyReview />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>

      <ScrollToTop smooth component={<p style={{ color: "#1B98F5", marginLeft: "6px" }}>
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-up" className="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"></path>
        </svg>
      </p>} />
    </div>
  );
}

export default App;
