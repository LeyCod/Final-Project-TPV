import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./header.css";

export const Header = () => {
  return (
    <div className="roll_effect p-4 p-lg-4 pt-3">
      <div className="d-flex justify-content-end align-items-center gap-2 container-fluid">
        <Link to="/register-company" className="btn outline-green-button rounded-button px-4 shadow-sm">
          Registro
        </Link>

        <Link to="/login" className="btn green-button rounded-button px-4 shadow-sm">
          Iniciar sesión
        </Link>
      </div>

      <div className="d-flex justify-content-center align-items-center gap-1">
        <img src="https://res.cloudinary.com/dxbcvuacb/image/upload/v1648662827/Logo_Master_Gest-2-se-shadow_z585ax.png" alt="LogoMG" />
        <h1>aster<strong>Gest</strong></h1>
      </div>

      <div className="d-flex flex-column flex-nowrap justify-content-center align-items-center gap-2 px-3">
        <div>
          <h1>TPV para bares y restaurantes</h1>
          <h4>Implementación fácil y rápida.<br />Configura tus activos al instante y empieza a vender en unos minutos.</h4>
        </div>
      </div>
    </div>
  );
};
