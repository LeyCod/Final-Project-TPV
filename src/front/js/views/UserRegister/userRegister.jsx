import React, { useState, useContext }from "react";
import { Context } from "../../store/appContext";
import { Link, Redirect } from "react-router-dom";

//Styles
import "../register/Register.css";
import background from "../../../assets/img/login-bg.png";
import logo from "../../../assets/img/LogoMG-54px.png";

// Functions
import { ApiUserRegister } from "../../service/user.js";

export const UserRegister = () => {
    const {store, actions} = useContext( Context )
    const [loading, setLoading] = useState(false);
    const [UserCredentials, setUserCredentials] = useState({NIF: "", Name: "", Email: "", Password: "" });
    const [notifyMessage, setNotifyMessage] = useState(false);
    const [CoLogged, setCoLogged] = useState(false);

    console.log(store)
    const dataUserRegister = async () => {
        try {
            setNotifyMessage(false);

            const response = await ApiUserLogin(UserCredentials);
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
            style={{backgroundImage : `url(${background})` }}
        >
            <div className="row justify-content-center align-items-center mx-2 my-5">
                <div className="form-content-left d-none d-md-flex col-md-4 col-lg-4 col-xxl-3 p-4 bg-white shadow-sm">
                    <div>
                        <h1 className="mb-3 text-nowrap fw-bold">Registro</h1>
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
                            <label htmlFor="nif" className="form-label mb-1"> NIF </label>
                            <input
                                name="nif"
                                type="text"
                                className="form-control shadow-sm"
                                autoComplete="off"
                                value={UserCredentials.NIF}
                                autoFocus="on"
                                onChange={(e) => setUserCredentials({ ...UserCredentials, NIF: e.target.value.trim() })}
                            />
                    </div>

                    <div className="mb-3">
                            <label htmlFor="name" className="form-label mb-1"> Name </label>
                            <input
                                name="name"
                                type="text"
                                className="form-control shadow-sm"
                                autoComplete="off"
                                autoFocus="on"
                                onChange={(e) => setUserCredentials({ ...UserCredentials, Name: e.target.value.trim() })}
                            />
                    </div>

                    <div className="my-3">
                            <label htmlFor="email" className="form-label mb-1"> Email </label>
                            <input
                                name="email"
                                type="text"
                                className="form-control shadow-sm"
                                autoComplete="off"
                                autoFocus="on"
                                onChange={(e) => setUserCredentials({ ...UserCredentials, Email: e.target.value.trim() })}
                            />
                    </div>

                    <div className="mb-3">
                            <label htmlFor="password" className="form-label mb-1"> Password </label>
                            <input
                                name="password"
                                type="text"
                                className="form-control shadow-sm"
                                autoComplete="off"
                                autoFocus="on"
                                onChange={(e) => setUserCredentials({ ...UserCredentials, Password: e.target.value })}
                            />
                    </div>

                    <button
                            type="button"
                            className="btn green-button mt-2 mb-0 shadow-sm accept-btn"
                            onClick={() => {  }} 
                        >
                            Aceptar
                    </button>

                    <div className="mt-4 text-end">
                        <small>¿Ya tienes cuenta?</small>

                        <Link to="/login" className="ms-2 text-dark text-nowrap text-decoration-none fw-bold">
                            Acceder
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRegister;