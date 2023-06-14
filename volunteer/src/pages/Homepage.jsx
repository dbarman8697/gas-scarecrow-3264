import React from "react";
import styled from "styled-components";
import logo from "../Images/CONTRIBUTE_NOW.png";

const Homepage = () => {
  const HoverText = styled.p`
    &:hover {
      color: gray;
      transition: 0.3s;
    }
  `;
  return (
    <div>
      <div style={{ display: "flex", gap: "30px" }}>
        <img
          src={logo}
          width={"27%"}
          style={{ padding: "30px 0px 0px 50px" }}
        />

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
              About ContributeNow
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
              Volunteer
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
      </div>
    </div>
  );
};

export default Homepage;
