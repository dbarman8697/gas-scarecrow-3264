import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: "42px",
          letterSpacing: "1px",
          fontFamily: "fantasy",
          marginTop: "90px",
          marginBottom: "90px",
          color: "#383838",
          textAlign: "center",
        }}
      >
        Choose Careear Path to Signup
      </h1>
      <div
        style={{ display: "flex", justifyContent: "center", columnGap: "40px" }}
      >
        <div>
          <Link to={"/volunteersignup"}>
            <button
              style={{
                padding: "30px",
                fontSize: "30px",
                boxShadow: "20px 20px 50px 10px pink inset",
              }}
            >
              Volunteer
            </button>
          </Link>
        </div>

        <div>
          <Link to={"/agenciessignup"}>
            <button
              style={{
                padding: "30px",
                fontSize: "30px",
                boxShadow: "20px 20px 50px 10px pink inset",
              }}
            >
              Agencies
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
