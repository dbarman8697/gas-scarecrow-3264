import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Volunteer from "../pages/Volunteer";
import Login from "../pages/Login";
import Volunteersignup from "../pages/Volunteersignup";
import Agencysignup from "../pages/Agencysignup";
import LoginVolunteer from "../pages/LoginVolunteer";
import LoginAgency from "../pages/LoginAgency";

function AllPages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/volunteersignup" element={<Volunteersignup />} />
        <Route path="/agenciessignup" element={<Agencysignup />} />
        <Route path="/loginVolunteer" element={<LoginVolunteer />} />
        <Route path="/loginAgency" element={<LoginAgency />} />
      </Routes>
    </div>
  );
}
export default AllPages;
