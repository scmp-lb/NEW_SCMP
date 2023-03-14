import React from "react";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="info">
          {" "}
          <p>
            {" "}
            <FaPhone />
            &nbsp;&nbsp;&nbsp;&nbsp; +961 1 822041
          </p>
          <p>
            {" "}
            <MdEmail size={20} />
            &nbsp;&nbsp;&nbsp;&nbsp;info@scmp-lb.com
          </p>
          <p>
            {" "}
            <FaMapMarkerAlt />
            &nbsp;&nbsp;&nbsp;&nbsp;Beirut, Bir Hassan
          </p>
        </div>
        <div className="links">
          <p>
            {" "}
            <a href="#">Home</a>
          </p>
          <p>
            {" "}
            <a href="#">Departments</a>
          </p>
          <p>
            {" "}
            <a href="#">Events</a>
          </p>
          <p>
            {" "}
            <a href="#">Start-up Weekend</a>
          </p>
          <p>
            {" "}
            <a href="#">Contact Us </a>
          </p>
        </div>
        <div className="social">
          <p>
            <a href="#">
            {" "}
            <FaInstagram />
            </a>
          </p>
          <p>
            <a href="#">
            {" "}
            <FaFacebook />
            </a>
          </p>
          <p>
            <a href="#">
            {" "}
            <FaLinkedin />
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023-SCMP All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
