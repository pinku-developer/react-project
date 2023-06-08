import React from "react";
import logo from "../image/logo.png";

function Navbar() {
  return (
    <div className="navbarrelative">
      <nav class="navbar navbar-expand-lg navbar-light  ">
        <img src={logo} className="logo w-100" alt="logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Network
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Our Story
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Knowledge Center
              </a>
            </li>
          </ul>
          <div className="button-box">
            <button className="btn contactbtn">Contact Us</button>
            <button className="btn login">Log In</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
