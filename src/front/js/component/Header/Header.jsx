import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <nav id="navHead" className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo/MasterGest
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a
                id="aboutUs"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                About us
              </a>
            </li>
            <li className="nav-item">
              <a id="prices" className="nav-link active" href="#">
                Prices
              </a>
            </li>
            <li className="nav-item">
              <a id="contact" className="nav-link active" href="#">
                Contact
              </a>
            </li>
          </ul>
          <button id="btn1" className="btn btn-primary">
            <i className="fa-solid fa-paper-plane">Sign up</i>
          </button>
          <button id="btn2" className="btn btn-primary">
            <i className="fa-light fa-right-to-bracket">Log in</i>
          </button>
        </div>
      </div>
    </nav>
  );
};
