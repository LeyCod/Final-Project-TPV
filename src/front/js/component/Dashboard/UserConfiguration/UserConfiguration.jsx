import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { Link } from "react-router-dom";

export const UserConfiguration = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <h1>Configuración de usuario</h1>
    );
};
