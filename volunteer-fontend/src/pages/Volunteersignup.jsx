import React, { useState } from "react";
import Navbar from "../pages/Navbar";
import alredylogin from "../Images/already-login.JPG";
import { Link, useNavigate } from "react-router-dom";
import "./VSignup.css";
import { useToast } from "@chakra-ui/react";

const Volunteersignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      phone,
      zip,
      password,
    };

    fetch("https://real-teal-hen-boot.cyclic.app/users/volunteerregister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/loginVolunteer");
      })
      .catch((err) => console.log(err));

    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setZip("");

    toast({
      title: "Account created.",
      description: `We've created your account for ${name}.`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="signup-section">
        <div className="signup-form">
          <form action="" onSubmit={handleSubmit}>
            <h1>Create A Volunteer Account!</h1> <br />
            <input
              type="text"
              placeholder="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="zip"
              name="zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div className="already-login">
          <p>Already Have An Account? </p>
          <p>Please log in.</p>
          <Link to={"/loginVolunteer"}>
            {" "}
            <button>Login</button>
          </Link>{" "}
          <br /> <br />
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

export default Volunteersignup;
