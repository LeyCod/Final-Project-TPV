import React from "react";

export const Register = () => {
    return (
        <div 
            className="form-view"
            style={{ backgroundImage: `url(${pass})` }}
        >
            <div className="row justify-content-center align-items-center mx-2 my-5">
                <div className="form-content-left d-none d-md-flex col-md-4 col-lg-4 col-xxl-3 p-4 bg-white shadow-sm">
                    <div>
                        <h1 className="mb-3 fw-bold">Registro</h1>
                        <p  className="p-1 bg-white bg-opacity-50">Empecemos por egistrar los datos de la empresa.<br/><br/>Si tienes algún problema, contacta con nosotros.</p>
                    </div>
                </div>
                <div className="form-content-right col-12 col-sm-9 col-md-7 col-lg-5 col-xxl-4 p-4 bg-light">
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
                        <label className="form-label mb-1">Nombre de la empresa</label>
                        <input
                            type="text"
                            className="form-control shadow-sm"
                            autoComplete="off"
                            autoFocus="on"
                        />
                    </div>

                    <div className="my-3">
                        <label className="form-label mb-1">CIF / Correo electrónico</label>
                        <input
                            type="text"
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

                    <div className={`d-none text-danger text-center fw-normal`}>
                        <small>Notificación de error</small>
                    </div>

                    <button
                        type="button"
                        className="btn green-button mt-2 mb-0 shadow-sm"
                    >
                        Registrarme
                    </button>

                    <div className="mt-4 text-end">
                        <small>¿Ya tienes una cuenta?</small>

                        <Link to="/Login" className="ms-2 text-dark text-nowrap text-decoration-none fw-bold">
                                Haz Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};