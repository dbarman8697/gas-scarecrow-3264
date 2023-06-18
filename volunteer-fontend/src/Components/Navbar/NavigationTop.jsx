import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../Images/CONTRIBUTE_NOW.png";

const Home = () => {
  const HoverText = styled.p`
    &:hover {
      color: gray;
      transition: 0.3s;
    }
  `;

  return (
    <div>
      <div style={{ display: "flex", gap: "30px" }}>
        <Link to={"/"}>
          <img
            src={logo}
            style={{
              padding: "50px 0px 0px 0px",
              marginLeft: "50px",
              cursor: "pointer",
              marginTop: "-20px",
              width: "340px",
              height: "150px",
            }}
          />
        </Link>

        <div style={{ display: "flex", gap: "30px" }}>
          <div>
            <HoverText
              style={{
                fontSize: "15px",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "70px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              <Link to={"/agencyDashboard"}>About ContributeNow</Link>
            </HoverText>
          </div>
          <div>
            <HoverText
              style={{
                fontSize: "15px",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "70px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Programs
            </HoverText>
          </div>
          <div>
            <HoverText
              style={{
                fontSize: "15px",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "70px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              <Link to={"/volunteer"}>Volunteer</Link>
            </HoverText>
          </div>
          <div>
            <HoverText
              style={{
                fontSize: "15px",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "70px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Training
            </HoverText>
          </div>
          <div>
            <HoverText
              style={{
                fontSize: "15px",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "70px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              News
            </HoverText>
            <div>
              <HoverText
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                Shop
              </HoverText>
            </div>
          </div>
        </div>
        <div class="Header-nav-inner" style={{ marginTop: "40px" }}>
          <a href="http://voly.org " class="Header-nav-item">
            voly.org
          </a>
          <a href="https://www.volyinfo.org" class="Header-nav-item">
            VOLY Info
          </a>
          <a
            href="/donate"
            class="Header-nav-item"
            style={{ marginBottom: "20px" }}
          >
            Donate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
