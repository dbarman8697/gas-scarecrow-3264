import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router";

const initialState = {
  name: "",
  email: "",
  phone: 0,
  address: "",
  city: "",
  state: "",
  zip: 0,
  password: 0,
};

const Agencysignup = () => {
  const [formState, setFormState] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/register", formState, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        navigate("/loginAgency");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1
        style={{
          fontSize: "42px",
          letterSpacing: "1px",
          fontFamily: "fantasy",
          marginTop: "50px",
          marginBottom: "50px",
          color: "#383838",
          textAlign: "center",
        }}
      >
        Login Here
      </h1>
      <div>
        <form onSubmit={handleSignup}>
         
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            style={{
              boxShadow: "20px 20px 10px grey",
              border: "1px solid gray",
              width: "60vh",
              padding: "1.5vh",
            }}
          />
          <br />
          <input
            type="number"
            placeholder="Contact Number"
            name="phone"
            onChange={handleChange}
            style={{
              boxShadow: "20px 20px 10px grey",
              border: "1px solid gray",
              width: "60vh",
              padding: "1.5vh",
            }}
          />

          <br />
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={handleChange}
            style={{
              boxShadow: "20px 20px 10px grey",
              border: "1px solid gray",
              width: "60vh",
              padding: "1.5vh",
            }}
          />

          <br />
          <input
            type="text"
            placeholder="City"
            name="city"
            onChange={handleChange}
            style={{
              boxShadow: "20px 20px 10px grey",
              border: "1px solid gray",
              width: "60vh",
              padding: "1.5vh",
            }}
          />

          <br />
          <input
            type="text"
            placeholder="State"
            name="state"
            onChange={handleChange}
            style={{
              boxShadow: "20px 20px 10px grey",
              border: "1px solid gray",
              width: "60vh",
              padding: "1.5vh",
            }}
          />
          <br />
          <input
            type="number"
            placeholder="Zip Code"
            name="zip"
            onChange={handleChange}
            style={{
              boxShadow: "20px 20px 10px grey",
              border: "1px solid gray",
              width: "60vh",
              padding: "1.5vh",
            }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            style={{
              boxShadow: "20px 20px 10px grey",
              border: "1px solid gray",
              width: "60vh",
              padding: "1.5vh",
            }}
          />
          <br />
          <input
            type="submit"
            value="Register"
            style={{
              boxShadow: "20px 20px 10px grey",
              border: "1px solid gray",
              width: "30vh",
              padding: "1.5vh",
              borderRadius: "30px",
              fontWeight: "bold",
              marginTop: "20px",
              cursor: "pointer",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Agencysignup;
