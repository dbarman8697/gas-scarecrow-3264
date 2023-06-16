import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

function AllPages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}
export default AllPages;
