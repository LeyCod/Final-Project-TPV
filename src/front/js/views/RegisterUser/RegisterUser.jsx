import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link, Redirect } from "react-router-dom";

//Styles
import "../../../assets/css/register-login-forms.css";
import formBackground from "../../../assets/img/FormsBG.jpg";
import formBanner from "../../../assets/img/FormLoginBanner-BG.png";
import logoMasterGest from "../../../assets/img/LogoMG-45px.png";

// Functions
import { apiCompanyRegister } from "../../service/company.js";
import { apiUserRegister } from "../../service/user.js";

export const RegisterUser = () => {
    const { store, actions } = useContext(Context);

    const [userCredentials, setUserCredentials] = useState({ nif: "", name: "", email: "", password: "" });
    const [notifyMessage, setNotifyMessage] = useState(false);

    return (
        <div
            className="main-form form-view"
            style={{ backgroundImage: `url(${formBackground})` }}
        >
            <div>
                <div className="row justify-content-center align-items-center h-100 mx-2">
                    <div
                        className="form-content-left d-none d-md-flex col-md-4 col-lg-4 col-xxl-2 p-4 bg-white"
                        style={{ backgroundImage: `url(${formBanner})` }}
                    >
                        <div>
                            <h1 className="mb-3 text-nowrap fw-bold">Registro</h1>
                            <p className="p-1 bg-white bg-opacity-50">Bienvenid@ a <i>MasterGest</i>.
                                <br /><br />Completa los datos de usuario para finalizar el registro.</p>
                        </div>
                    </div>
                    <div className="form-content-right col-12 col-sm-9 col-md-7 col-lg-5 col-xxl-3 p-3 bg-light">
                        <div className="form-title d-flex justify-content-between align-items-center">
                            <div>
                                <p className="m-0">Registro de Usuario</p>
                                <h4>MasterGest</h4>
                            </div>
                            <Link to="/" title="MasterGest">
                                <img src={logoMasterGest} alt="LogoMG" />
                            </Link>
                        </div>
                        
                        <div className="my-3">
                            <label className="form-label mb-1">NIF</label>
                            <input
                                type="text"
                                className="form-control shadow-sm"
                                autoComplete="off"
                                autoFocus="on"
                                onChange={(e) => setUserCredentials({ ...userCredentials, nif: e.target.value.trim() })}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label mb-1">Nombre completo</label>
                            <input
                                type="text"
                                className="form-control shadow-sm"
                                autoComplete="off"
                                onChange={(e) => setUserCredentials({ ...userCredentials, name: e.target.value.trim() })}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label mb-1">Email</label>
                            <input
                                type="text"
                                className="form-control shadow-sm"
                                autoComplete="off"
                                onChange={(e) => setUserCredentials({ ...userCredentials, email: e.target.value.trim() })}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label mb-1">Contraseña</label>
                            <input
                                type="password"
                                className="form-control shadow-sm"
                                autoComplete="off"
                                onChange={(e) => setUserCredentials({ ...userCredentials, password: e.target.value.trim() })}
                            />
                        </div>

                        <div className={`text-danger text-center fw-normal ${!notifyMessage ? "invisible" : ""}`}>
                            <small>{notifyMessage}&nbsp;</small>
                        </div>

                        <button
                            type="button"
                            className="btn green-button mt-2 mb-0 shadow-sm"
                        //onClick={checkCompanyData}
                        >
                            Finalizar registro
                        </button>

                        <div className="mt-4 small text-end">
                            ¿Ya tienes una cuenta?
                            <Link to="/login" className="ms-1 text-dark text-nowrap text-decoration-none fw-bold">
                                Inicia sesión
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
