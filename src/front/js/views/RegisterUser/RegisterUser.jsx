import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link, Redirect } from "react-router-dom";

//Styles
import "../../../css/register-login-forms.css";
import formBG from "../../../assets/img/formBG.jpg";
import formBannerBG from "../../../assets/img/formBannerBG.png";
import logoMasterGest from "../../../assets/img/logoMasterGest.png";

// Functions
import { apiCompanyRegister } from "../../service/company.js";
import { apiUserRegister } from "../../service/user.js";

// Components
import { SuccessModalOnRegister } from "../../component/Modal/SuccessModalOnRegister.jsx";

export const RegisterUser = () => {
    const { store, actions } = useContext(Context);

    const [loading, setLoading] = useState(false);
    const [notifyMessage, setNotifyMessage] = useState(false);
    const [registerCompleted, setRegisterCompleted] = useState(false);

    const companyRegister = async () => {
        if (store.companyRegistered) {
            userRegister();
            return false;
        }

        setLoading(true);

        try {
            setNotifyMessage(false);

            const response = await apiCompanyRegister(store.companyRegisterData);
            const status = response.status;
            const data = await response.json();

            actions.setRegisteredCompanyID(data.id);

            if (status === 201) {
                actions.setCompanyRegistered();
                userRegister();
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

    const userRegister = async () => {
        setLoading(true);

        try {
            setNotifyMessage(false);

            const response = await apiUserRegister(store.userRegisterData);
            const status = response.status;
            const data = await response.json();

            if (status === 201) {
                setRegisterCompleted(true);
                actions.setRestartRegisterData();
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

    return !actions.checkCompanyRegisterData() // Additional check to force company data to exist
        ? <Redirect to="/register-company" />
        : (
            <div
                className="main-form form-view"
                style={{ backgroundImage: `url(${formBG})` }}
            >
                <div>
                    <div className="row justify-content-center align-items-center h-100 mx-2">
                        <div
                            className="form-content-left d-none d-md-flex col-md-4 col-lg-4 col-xxl-3 p-4 bg-white"
                            style={{ backgroundImage: `url(${formBannerBG})` }}
                        >
                            <div>
                                <h1 className="mb-3 text-nowrap fw-bold">A tu medida</h1>
                                <p className="p-1 bg-white bg-opacity-50">Completa los datos de usuario y empieza a configurar nuestra herramienta según tus necesidades.</p>
                            </div>
                        </div>
                        <div className="form-content-right col-12 col-sm-9 col-md-7 col-lg-5 col-xxl-3 p-3 bg-light">
                            <div className="form-title d-flex justify-content-between align-items-center">
                                <div>
                                    <p className="m-0">Registro de Usuario</p>
                                    <h4>MasterGest</h4>
                                </div>
                                <Link to="/" title="MasterGest">
                                    <img src={logoMasterGest} alt="logoMasterGest" className={loading ? "rotate" : null} />
                                </Link>
                            </div>

                            <div className="my-3">
                                <label className="form-label mb-1">NIF</label>
                                <input
                                    type="text"
                                    className="form-control text-uppercase shadow-sm"
                                    autoComplete="off"
                                    autoFocus="on"
                                    maxLength={9}
                                    onChange={(e) => actions.setUserRegisterData("nif", e.target.value.trim())}
                                    defaultValue={store.userRegisterData.nif}
                                />
                            </div>
                            <div className="d-flex justify-content-between flex-wrap gap-sm-4">
                                <div className="col-12 col-sm-5 mb-3">
                                    <label className="form-label mb-1">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control shadow-sm"
                                        autoComplete="off"
                                        maxLength={70}
                                        onChange={(e) => actions.setUserRegisterData("first_name", e.target.value.trim())}
                                        defaultValue={store.userRegisterData.first_name}
                                    />
                                </div>
                                <div className="flex-grow-1 col-12 col-sm-6 mb-3">
                                    <label className="form-label mb-1">Apellidos</label>
                                    <input
                                        type="text"
                                        className="form-control shadow-sm"
                                        autoComplete="off"
                                        maxLength={70}
                                        onChange={(e) => actions.setUserRegisterData("last_name", e.target.value.trim())}
                                        defaultValue={store.userRegisterData.last_name}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label mb-1">Email</label>
                                <input
                                    type="text"
                                    className="form-control text-lowercase shadow-sm"
                                    autoComplete="off"
                                    maxLength={60}
                                    onChange={(e) => actions.setUserRegisterData("email", e.target.value.trim())}
                                    defaultValue={store.userRegisterData.email}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label mb-1">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control shadow-sm"
                                    autoComplete="off"
                                    maxLength={20}
                                    onChange={(e) => actions.setUserRegisterData("password", e.target.value)}
                                    defaultValue={store.userRegisterData.password}
                                />
                            </div>

                            <div className={`text-danger text-center fw-normal ${!notifyMessage ? "invisible" : ""}`}>
                                <small>{notifyMessage}&nbsp;</small>
                            </div>

                            <div className="d-flex gap-2">
                                <Link to="/register-company" className="btn outline-green-button mt-2 mb-0 shadow-sm">
                                    Atrás
                                </Link>

                                <button
                                    type="button"
                                    className="btn flex-grow-1 green-button mt-2 mb-0 shadow-sm"
                                    onClick={companyRegister}
                                >
                                    Finalizar registro
                                </button>
                            </div>

                            <div className="mt-4 small text-end">
                                ¿Ya tienes una cuenta?
                                <Link to="/login" className="ms-1 text-dark text-nowrap text-decoration-none fw-bold">
                                    Inicia sesión
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <SuccessModalOnRegister show={registerCompleted ? true : false} />
            </div>
        );
};
