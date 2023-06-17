import React, { useState } from 'react'
import alredylogin from "../Images/already-login.JPG"
import Navbar from '../pages/Navbar'
import "./ASignup.css"
import { Link } from 'react-router-dom'


const Agencysignup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [zip, setZip] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = () => {
    const payload = {
      name,
      email,
      phone,
      zip,
      address,
      city,
      state,
      password
    }

    fetch("/url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

    setName("")
    setEmail("")
    setPhone("")
    setZip(0)
    setAddress("")
    setCity("")
    setState("")
    setPassword("")
  }
  return (
    <div>
      <Navbar />
      <div className="signup-section">
        <div className="signup-form">
          <form action="" onSubmit={handleSubmit}>
            <h1>Create Your Nonprofit Account!</h1>
            <p>
              We need some basic information about your agency in order to
              verify your nonprofit status.
            </p>
            <br />
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
              type="text"
              placeholder="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <input
              type="text"
              placeholder="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <input
              type="text"
              placeholder="state"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
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
}

export default Agencysignup
