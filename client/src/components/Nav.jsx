import React from "react";
import logo from "../assets/images/logo.png";
function Nav() {
  return (
    <div className="Nav-Bar">
      <div>
        <li>
          <img src={logo} alt="logo"></img>
        </li>
        {/* <p>SCIENTIFIC CENTER OF MANUFACTURING AND PRODUCTION</p> */}
      </div>

      <ul className="Nav-list">
        <li>
          <a href="#!">Home</a>
        </li>
        <li>
          <a href="#!">Departments</a>
        </li>
        <li>
          <a href="#!">Events</a>
        </li>
        <li>
          <a href="#!">StartUp-Weekend</a>
        </li>
        <li>
          <a href="#!">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
