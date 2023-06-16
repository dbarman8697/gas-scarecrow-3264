
import "../pages/Volunteer.css"
import { Link } from "react-router-dom"
import logo from "../Images/Logo_voly.png"
import mainImg from "../Images/Volunteer_page.JPG"

const Volunteer = () => {
  return (
    <div>
      <nav className="top-navbar">
        <div className="left-links">
          <Link to="/" className="top-nav-link">Who We Are</Link>
          <Link to="/" className="top-nav-link">Who We Serve</Link>
        </div>
        <div className="right-links">
          <Link to="/" className="top-nav-link">Create Account</Link>
          <Link to="/" className="top-nav-link">Login</Link>
        </div>
      </nav>
      <nav className="bottom-navbar">
        <img src={logo} alt="logo" width={"200px"} height={"100px"} />
        <Link to="/" className="bottom-nav-link">Causes</Link>
        <Link to="/" className="bottom-nav-link">Opportunities</Link>
        <Link to="/" className="bottom-nav-link">Teams</Link>
        <Link to="/" className="bottom-nav-link">Agencies</Link>
      </nav>

      <img src={mainImg} alt="image" />

      <div className="causes-section">
        <h1>Causes</h1>
        <p>Decide what you are most passionate about, and make your impact.</p>

        <div className="causes">
          <div className="causes-card">
            {/* <img src={} alt="" /> */}
          </div>
        </div>
      </div>

    </div>



  )
}

export default Volunteer