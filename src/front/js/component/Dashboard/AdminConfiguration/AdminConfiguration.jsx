import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { Link } from "react-router-dom";

export const AdminConfiguration = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <h4 className="fw-normal">Configuración admin</h4>
    );
};
