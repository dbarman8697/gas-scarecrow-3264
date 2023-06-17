import React, { useState } from 'react'
import Navbar from '../pages/Navbar'
import alredylogin from "../Images/already-login.JPG"
import "./VSignup.css"

const Volunteersignup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [zip, setZip] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      name,
      email,
      phone,
      zip,
      password
    }

    fetch("https://reqres.in/api/register", {
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
    setPassword("")
    setZip("")

  }

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
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="email"
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="phone"
              name='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              type="text"
              placeholder="zip"
              name='zip'
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />

            <input
              type="password"
              placeholder="password"
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input type="submit" value="Submit" />
          </form>
        </div>

        <div className="already-login">
          <p>Already Have An Account? </p>
          <p>Please log in.</p>
          <button>Login</button> <br /> <br />
          <img src={alredylogin} alt="login" style={{ border: "1px solid black" }} />
        </div>
      </div>


    </div>
  )
}

export default Volunteersignup

