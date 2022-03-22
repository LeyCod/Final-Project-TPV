import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link, Redirect } from "react-router-dom";

//Styles
import "../../../assets/css/register-login-forms.css";
import formBackground from "../../../assets/img/FormsBG.jpg";
import formBanner from "../../../assets/img/FormLoginBanner-BG.png";
import logoMasterGest from "../../../assets/img/LogoMG-45px.png";

export const RegisterCompany = () => {
    const { store, actions } = useContext(Context);

    const [notifyMessage, setNotifyMessage] = useState(false);
    const [nextStep, setNextStep] = useState(false);

    const checkCompanyData = () => {
        setNotifyMessage(false);

        if (!actions.checkCompanyRegisterData()) {        
            setNotifyMessage("Introduce los datos de tu empresa antes de continuar")
            return false;
        }

        return true;
    }

    return Object.keys(store.companyRegisterData).length !== 0 && nextStep
        ? <Redirect to="/register-user" />
        : (
            <div
                className="main-form form-view"
                style={{ backgroundImage: `url(${formBackground})` }}
            >
                <div>
                    <div className="row justify-content-center align-items-center h-100 mx-2">
                        <div
                            className="form-content-left d-none d-md-flex col-md-4 col-lg-4 col-xxl-3 p-4 bg-white"
                            style={{ backgroundImage: `url(${formBanner})` }}
                        >
                            <div>
                                <h1 className="mb-3 text-nowrap fw-bold">Bienvenid@</h1>
                                <p className="p-1 bg-white bg-opacity-50">Estás un paso más cerca de incrementar la productividad de tu negocio.</p>
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
                                    maxLength={70}
                                    onChange={(e) => actions.setCompanyRegisterData("name", e.target.value.trim() ) }
                                    defaultValue={ store.companyRegisterData.name }
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label mb-1">CIF</label>
                                <input
                                    type="text"
                                    className="form-control text-uppercase shadow-sm"
                                    autoComplete="off"
                                    maxLength={9}
                                    onChange={(e) => actions.setCompanyRegisterData("cif", e.target.value.trim() ) }
                                    defaultValue={ store.companyRegisterData.cif }
                                />
                            </div>

                            <div className={`text-danger text-center fw-normal ${!notifyMessage ? "invisible" : ""}`}>
                                <small>{notifyMessage}&nbsp;</small>
                            </div>

                            <button
                                type="button"
                                className="btn green-button mt-2 mb-0 shadow-sm"
                                onClick={ () => setNextStep(checkCompanyData() ? true : false) }
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
