import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Volunteer from "../pages/Volunteer";

function AllPages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </div>
  );
}
export default AllPages;
