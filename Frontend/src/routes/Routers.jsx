import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import SingUp from "../pages/SingUp";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetail from "../pages/Doctors/DoctorDetail";
import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/doctors" element={<Doctors />}></Route>
      <Route path="/doctors/:id" element={<DoctorDetail />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<SingUp />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/services" element={<Services />}></Route>
    </Routes>
  );
};

export default Routers;
