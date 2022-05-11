import React from "react";
import logo from "../../images/agencyLogo.jpg";
// import Auto from "../typewrite";
import { Link } from "react-router-dom";
import "../../StyleSheet/DesktopNavBar.css";
const DesktopNavBar = () => {
  return (
  <div>
    <div className="DesktopNav__container">
      <div className="DesktopNav__leftContainer">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="DesktopNav__rightContainer">
      <Link to="/" className="links">
          <h4 className="link">Home</h4>
        </Link>
        <Link to="/properties/sale" className="links">
          <h4 className="link">Hostel</h4>
        </Link>
        <Link className="links" to="/properties/rent">
          <h4 className="link">Mess</h4>
        </Link>
        <Link className="links" to="/properties/sell">
          <h4 className="link">Add your hostel</h4>
        </Link>
        <Link className="links" to="/contact-us">
          <h4 className="link">Contact Us</h4>
        </Link>
        <a className="links" href="https://home-3f3d6.web.app/login">;

          <h4 className="link" style={{backgroundColor:"#e98074", borderRadius:"30px"}}>Login</h4>
        </a>
      </div>
    </div>
        {/* <Auto/> */}
    </div>
  );
};

export default DesktopNavBar;