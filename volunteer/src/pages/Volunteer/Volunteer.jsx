import React from 'react'
import "../Volunteer/Volunteer.css"
import { Link } from "react-router-dom"
import mainImg from "./Volunteer-Images/Volunteer_page.JPG"
import animal from "./Volunteer-Images/Animals.JPG"
import art from "./Volunteer-Images/Art-culture.JPG"
import mental from "./Volunteer-Images/mental-wellness.jpg"
import community from "./Volunteer-Images/community.JPG"
import disaster from "./Volunteer-Images/disaster-management.jpg"
import education from "./Volunteer-Images/education.jpg"
import search from "./Volunteer-Images/search-logo.png"
import vlogo from "./Volunteer-Images/V-logo.png"
import track from "./Volunteer-Images/track-logo.png"
import Footer from './Footer'
import Navbar from './Navbar'




const Volunteer = () => {
  return (
    <div>
      <Navbar />
      <img src={mainImg} alt="image" />

      <div className="content-container">
        <div className="text-container">
          <h1>Causes</h1>
          <p>Decide what you are most passionate about and make your impact.</p>
        </div>

        <div className="causes-section">
          <div className="all-causes">
            <div className="causes-card">
              <img src={animal} alt="animal" />
              <p>Animals</p>
            </div>

            <div className="causes-card">
              <img src={art} alt="animal" />
              <p>Art & Culture</p>
            </div>
            <div className="causes-card">
              <img src={mental} alt="animal" />
              <p>Behavioural & Mental Helath</p>
            </div>
            <div className="causes-card">
              <img src={community} alt="animal" />
              <p>Community Development</p>
            </div>
            <div className="causes-card">
              <img src={disaster} alt="animal" />
              <p>Disaster & Emergency Preparedness</p>
            </div>
            <div className="causes-card">
              <img src={education} alt="animal" />
              <p>Education</p>
            </div>
          </div>
        </div>
      </div>

      <div className="how-work-section">
        <h1>How does it work?</h1>

        <div className="working-cards">
          <div className="card">
            <img src={search} width={100} height={100} alt="search-logo" />
            <p>Find
              Browse from thousands of opportunities. Locate based off of interests, skills,
              location or even need.</p><br />
            <Link>Browse Opportunities</Link>
          </div>

          <div className="card">
            <img src={vlogo} width={100} height={100} alt="search-logo" />
            <p>Find
              Browse from thousands of opportunities. Locate based off of interests, skills,
              location or even need.</p><br />
            <Link>Create your account</Link>
          </div>

          <div className="card">
            <img src={track} width={100} height={100} alt="search-logo" />
            <p>Find
              Browse from thousands of opportunities. Locate based off of interests, skills,
              location or even need.</p><br />
            <Link>Access your account</Link>
          </div>
        </div>
      </div>

      <Footer />

    </div>

  )
}

export default Volunteer