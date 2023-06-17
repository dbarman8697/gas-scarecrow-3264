import React, { useState } from "react";
import Navbar from "../pages/Navbar";
import axios from "axios";
import alredylogin from "../Images/already-login.JPG";
import { useNavigate } from "react-router-dom";
import "./VSignup.css";

const initialState = {
  email: "",
  password: "",
};

const LoginVolunteer = () => {
  const [formState, setFormState] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", formState, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("new_token", res.data.token);
        navigate("/events");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="signup-section">
        <div className="signup-form">
          <form action="" onSubmit={handleLogin}>
            <h1>Login Here!</h1> <br />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <div className="role-selection">
              <label
                className={`role-option ${
                  formState.role === "volunteer" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="role"
                  value="volunteer"
                  checked={formState.role === "volunteer"}
                  onChange={handleChange}
                />
                Volunteer
              </label>
              <label
                className={`role-option ${
                  formState.role === "agency" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="role"
                  value="agency"
                  checked={formState.role === "agency"}
                  onChange={handleChange}
                />
                Agency
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div className="already-login">
          <p>Already Have An Account? </p>
          <p>Please log in.</p>
          <button>Login</button> <br /> <br />
          <img
            src={alredylogin}
            alt="login"
            style={{ border: "1px solid black" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginVolunteer;
