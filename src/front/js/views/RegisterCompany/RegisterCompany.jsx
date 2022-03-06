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

export const RegisterCompany = () => {
    const { store, actions } = useContext(Context);

    const [companyCredentials, setCompanyCredentials] = useState({ name: "", cif: "" });
    const [notifyMessage, setNotifyMessage] = useState(false);

    const checkCompanyData = () => {
        setNotifyMessage(false);

        if (companyCredentials["name"].length !== 0 && companyCredentials["cif"].length !== 0) {
            actions.setCompanyRegisterCredentials(companyCredentials);
        }
        else {
            setNotifyMessage("Por favor, introduce los datos de empresa antes de continuar.")
        }
    }

    return Object.keys(store.companyRegisterCredentials).length !== 0
        ? <Redirect to="/register-user" />
        : (
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
                                    <br /><br />Estás un paso mas cerca de facilitar tu trabajo con nuestra plataforma de gestión.</p>
                            </div>
                        </div>
                        <div className="form-content-right col-12 col-sm-9 col-md-7 col-lg-5 col-xxl-3 p-3 bg-light">
                            <div className="form-title d-flex justify-content-between align-items-center">
                                <div>
                                    <p className="m-0">Registro de Empresa</p>
                                    <h4>MasterGest</h4>
                                </div>
                                <Link to="/" title="MasterGest">
                                    <img src={logoMasterGest} alt="LogoMG" />
                                </Link>
                            </div>
                            <div className="my-3">
                                <label className="form-label mb-1">Nombre de la empresa</label>
                                <input
                                    type="text"
                                    className="form-control shadow-sm"
                                    autoComplete="off"
                                    autoFocus="on"
                                    onChange={(e) => setCompanyCredentials({ ...companyCredentials, name: e.target.value.trim() })}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label mb-1">CIF</label>
                                <input
                                    type="text"
                                    className="form-control shadow-sm"
                                    autoComplete="off"
                                    onChange={(e) => setCompanyCredentials({ ...companyCredentials, cif: e.target.value.trim() })}
                                />
                            </div>

                            <div className={`text-danger text-center fw-normal ${!notifyMessage ? "invisible" : ""}`}>
                                <small>{notifyMessage}&nbsp;</small>
                            </div>

                            <button
                                type="button"
                                className="btn green-button mt-2 mb-0 shadow-sm"
                                onClick={checkCompanyData}
                            >
                                Siguiente
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
