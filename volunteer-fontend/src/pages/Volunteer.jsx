import React from "react";
import "./Volunteer.css";
import { Link } from "react-router-dom";
import mainImg from "../Images/Volunteer_page.JPG";
import animal from "../Images/Animals.JPG";
import art from "../Images/Art-culture.JPG";
import mental from "../Images/mental-wellness.jpg";
import community from "../Images/community.JPG";
import disaster from "../Images/disaster-management.jpg";
import education from "../Images/education.jpg";
import search from "../Images/search-logo.png";
import vlogo from "../Images/V-logo.png";
import track from "../Images/track-logo.png";
import Navbar from "./Navbar";
import { Box, Heading, Image } from "@chakra-ui/react";

const Volunteer = () => {
  return (
    <div>
      <Navbar />
      <img src={mainImg} alt="image" />

      <div className="content-container">
        <div className="text-container">
          <Heading as={"h1"} size={"xl"}>
            Causes
          </Heading>
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
        <Heading as={"h1"} size={"xl"}>
          How does it work?
        </Heading>
        <div className="working-cards">
          <Box
            className="card"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Image
              m={"auto"}
              src={search}
              width={100}
              height={100}
              alt="search-logo"
            />
            <p>
              Find Browse from thousands of opportunities. Locate based off of
              interests, skills, location or even need.
            </p>
            <br />
            <Link to="/event">
              <b>Browse Opportunities</b>
            </Link>
          </Box>

          <div className="card">
            <Image
              m={"auto"}
              src={vlogo}
              width={100}
              height={100}
              alt="search-logo"
            />
            <p>
              Find Browse from thousands of opportunities. Locate based off of
              interests, skills, location or even need.
            </p>
            <br />
            <Link to="/login">
              <b>Create your account</b>
            </Link>
          </div>

          <div className="card">
            <Image
              m={"auto"}
              src={track}
              width={100}
              height={100}
              alt="search-logo"
            />
            <p>
              Find Browse from thousands of opportunities. Locate based off of
              interests, skills, location or even need.
            </p>
            <br />
            <Link to="/browse-opportunities">
              <b>Access your account</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
