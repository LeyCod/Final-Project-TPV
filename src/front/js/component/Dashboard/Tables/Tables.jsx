import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { Link } from "react-router-dom";

//components 
import ToastContainer from 'react-bootstrap/ToastContainer'
import Toast from 'react-bootstrap/Toast'

export const Tables = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid">
            <div className="row">
                <div>
                    <button><FontAwesomeIcon icon="fa-regular fa-circle-plus" /></button>
                </div>
                <div
                    aria-live="polite"
                    aria-atomic="true"
                    className="bg-dark position-relative"
                    style={{ minHeight: '240px' }}
                >
                    <ToastContainer position="top-start" className="p-3">
                        <Toast>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                <strong className="me-auto">Bootstrap</strong>
                                <small className="text-muted">just now</small>
                            </Toast.Header>
                            <Toast.Body>See? Just like this.</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </div>
            </div>
        </div>
    );
};

//TODO Crear el componente principal de la mesa.
//TODO Si esta ocupada o no.
//TODO Si esta activa o no.
//TODO Generar QR que apunta a qr_table.
//TODO Boton que lleva a Order y ver lo que lleva pedido.
