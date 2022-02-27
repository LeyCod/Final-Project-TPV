import React from "react";
import { Link } from "react-router-dom";

//Styles
import "./Register.css";
import background from "../../../assets/img/pexels-pixabay-326268.jpg";
import logo from "../../../assets/img/LogoMG-54px.png";

// Functions
import { ApiCoRegister } from "../../service/Co.js";
import { useState } from "react";

export const Register = () => {
    const [loading, setLoading] = useState(false);
    const [CoCredentials, setCoCredentials] = useState({ user: "", password: "" });
    const [notifyMessage, setNotifyMessage] = useState(false);
    const [CoLogged, setCoLogged] = useState(false);

    const CoRegister = async () => {
        try {
            setNotifyMessage(false);

            const response = await ApiCoLogin(CoCredentials);
            const status = response.status;
            const data = await response.json();

            console.log("data", data);

            if (status === 200) {
                localStorage.setItem("api-flask-token", data.token);
                setUserLogged(true);
                setNotifyMessage("Inicio de sesión correcto. Accediendo al área de usuario ...");
            }
            else {
                setNotifyMessage(data);
            }
        }
        catch (err) {
            setNotifyMessage("Error interno del servidor. Por favor, inténtalo de nuevo.");
        } 
        finally {
            setLoading(false);
        }
    }

    return (
        <div
            className="form-view"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="row justify-content-center align-items-center mx-2 my-5">
                <div className="form-content-left d-none d-md-flex col-md-4 col-lg-4 col-xxl-3 p-4 bg-white shadow-sm">
                    <div>
                        <h1 className="mb-3 text-nowrap fw-bold">Company Register</h1>
                        <p className="p-1 bg-white bg-opacity-50">Bienvenid@ a <i>MasterGest</i>.
                            <br /><br />Estas un paso mas cerca de facilitar tu trabajo con nuestra plataforma de gestión.</p>
                    </div>
                </div>
                <div className="form-content-right col-12 col-sm-9 col-md-7 col-lg-5 col-xxl-4 p-4 bg-light">
                    <div className="form-title d-flex justify-content-between align-items-center">
                        <div>
                            <p className="m-0">Registro de Empresa</p>
                            <h4>MasterGest</h4>
                        </div>

                        <img src={logo} alt="LogoMG" className={loading ? "rotate" : null} />
                    </div>

                    <div className="my-3">
                        <label className="form-label mb-1">CIF / Correo electrónico</label>
                        <input
                            type="text"
                            className="form-control shadow-sm"
                            autoComplete="off"
                            autoFocus="on"
                            onChange={(e) => setCoCredentials({ ...CoCredentials, user: e.target.value.trim() })}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label mb-1">Contraseña</label>
                        <input
                            type="password"
                            className="form-control shadow-sm"
                            autoComplete="off"
                            onChange={(e) => setCoCredentials({ ...CoCredentials, password: e.target.value })}
                        />
                    </div>

                    <button
                        type="button"
                        className="btn green-button mt-2 mb-0 shadow-sm"
                        onClick={() => { setLoading(true); CoRegister(); }}
                    >
                        Iniciar sesión
                    </button>

                    <div className="mt-4 text-end">
                        <small>¿Ya tienes una cuenta?</small>

                        <Link to="/login" className="ms-2 text-dark text-nowrap text-decoration-none fw-bold">
                            Regístrate ahora
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

/**
 * TODO aun queda por revision
 * !este registro debe setearse en el store, falta por hacer 
 * !faltan imports 
 */