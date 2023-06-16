import { Route, Routes } from "react-router-dom";
import Brushes from "../pages/Brushes";
import Cart from "../pages/Cart";
import Eyes from "../pages/Eyes";
import Face from "../pages/Face";
import Home from "../pages/Home";
import Lips from "../pages/Lips";
import Makeup from "../pages/Makeup";
import Skincare from "../pages/Skincare";
import Trending from "../pages/Trending";
import MakeupIndividual from "./IndividualPages/MakeupIndividual";
import Search from "../pages/Search";
import LipsIndividual from "./IndividualPages/LipsIndividual";
import Login from "../pages/Login";
function AllPages
(){
    return <div>
        
       <Routes>
        <Route path="/"  element={<Home/>}></Route>
        <Route path="/login"  element={<Login/>}></Route>
        <Route path="/cart"  element={<Cart/>}></Route>
        <Route path="/makeup"  element={<Makeup/>}></Route>
        <Route path="/brushes"  element={<Brushes/>}></Route>
        <Route path="/skincare"  element={<Skincare/>}></Route>
        <Route path="/trending"  element={<Trending/>}></Route>
        <Route path="/lips"  element={<Lips/>}></Route>
        <Route path="/eyes"  element={<Eyes/>}></Route>
        <Route path="/Face"  element={<Face/>}></Route>
        <Route path="/makeup/:id"  element={<MakeupIndividual/>}></Route>
        <Route path="/lips/:id"  element={<LipsIndividual/>}></Route>
        <Route path="/search/"  element={<Search/>}></Route>
        
       </Routes>

    </div>
}
export default AllPages
;