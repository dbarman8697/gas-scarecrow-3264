import React from 'react'
import { Link } from "react-router-dom"
import logo from "../Images/Logo_voly.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav className="top-navbar">
        <div className="left-links">
          <Link to="/" className="top-nav-link">Who We Are</Link>
          <Link to="/" className="top-nav-link">Who We Serve</Link>
        </div>
        <div className="right-links">
          <Link to="/login" className="top-nav-link">Create Account</Link>
          <Link to="/" className="top-nav-link">Login</Link>
        </div>
      </nav>
      <nav className="bottom-navbar">
        <img src={logo} alt="logo" width={"200px"} height={"100px"} />
        <Link to="/" className="bottom-nav-link">Causes</Link>
        <Link to="/" className="bottom-nav-link">Opportunities</Link>
        <Link to="/" className="bottom-nav-link">Teams</Link>
        <Link to="/" className="bottom-nav-link">Agencies</Link>
      </nav>
    </div>
  )
}

export default Navbar
