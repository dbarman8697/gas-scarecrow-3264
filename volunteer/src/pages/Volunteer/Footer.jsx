import React from 'react'
import volylogo from "./Volunteer-Images/Logo_voly.png"
import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-section">
            <div>
                <img src={"/"} alt="logo" />
                <p style={{color:"yellow"}}>All-in-one volunteer solution</p>
                <p>© 2023 VolunteerNow & VOLY.org</p>
            </div>
            <div>
                <h3 style={{color:"yellow"}}>Who we are</h3>
                <div className="footer-links">
                <p>Our expertise</p>
                <p>Contact us</p>
                <p>Request demo</p>
                <p>Support & Issues</p>
                </div>
                
            </div>
            <div>
                <h3 style={{color:"yellow"}}>Who we Serve</h3>
                <div className="footer-links">
                <p>Nonprofits</p>
                <p>School Districts</p>
                <p>Governments and Municipalities</p>
                <p>Businesses and Corporations</p>
                <p>Volunteer Centers</p>
                <p>Banks</p>
                <p>Court Systems</p>
                </div>
                
            </div>
        </div>
    )
}

export default Footer
