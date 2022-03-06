import React from "react";

// Components
import { Slide } from "../Slide/Slide.jsx";

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Logo/MasterGest
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Prices
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <button className="btn btn-primary">Registrar</button>
              <button className="btn btn-success">Iniciar sesión</button>
            </div>
          </div>
        </div>
      </nav>
      <Slide />
    </>
  );
};
