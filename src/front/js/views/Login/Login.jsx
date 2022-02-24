import React from "react";

// Styles
import "./login.css";

export const Login = () => {
    return (
        <div className="form-view">
            <div className="row justify-content-center align-items-center my-5">
                <div className="form-left col-lg-3 p-5 bg-white">
                    <div>
                        <h1 className="mb-3 fw-bold">Iniciar sesión</h1>
                        <p>Accede ahora a nuestra plataforma de gestión.</p>
                    </div>

                    <div className="mt-4">
                        <small>¿No tienes una cuenta?</small>

                        <a className="small ms-2 text-dark text-decoration-none fw-bold">
                            Regístrate ahora
                        </a>
                    </div>
                </div>
                <div className="form-right col-lg-3 p-4 bg-light">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            Bievenid@ a
                            <h4 className="fw-bold">MasterGest</h4>
                        </div>
                        <div>
                            <i className="fab fa-css3-alt fa-4x"></i>
                        </div>
                    </div>

                    <div className="my-3">
                        <label className="form-label mb-1">Correo electrónico</label>
                        <input
                            type="email"
                            className="form-control shadow-sm"
                            autoComplete="off"
                            autoFocus="on"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label mb-1">Contraseña</label>
                        <input
                            type="password"
                            className="form-control shadow-sm"
                            autoComplete="off"
                        />
                    </div>

                    <div className={`text-danger text-center fw-normal d-none`}>
                        <small>Notificación de error</small>
                    </div>

                    <button
                        type="button"
                        className="btn btn-success shadow-sm mt-2 mb-0"
                    >
                        Iniciar sesión
                    </button>
                </div>
            </div>
        </div>
    );
};
