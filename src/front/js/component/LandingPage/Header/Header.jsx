import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./header.css";
import logoMasterGest from "../../../../assets/img/LogoMG-45px.png";

export const Header = () => {
  return (
    <div className="roll_effect"> 
    <header className="navbar navbar-expand-lg navbar-light p-1 bg-light">
      <div className="container nav-container">
        <Link to="/" className="navbar-brand">
          <img src={logoMasterGest} alt="LogoMG" />
        </Link>

        <button
          className="navbar-toggler shadow-none nav-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" href="#Home">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#AboutUs">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <Link to="/register-company" className="btn outline-green-button rounded-button px-5 shadow-sm">
              Registro
            </Link>

            <Link to="/login" className="btn green-button rounded-button px-4 shadow-sm">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </header>
    </div>
  );
};
