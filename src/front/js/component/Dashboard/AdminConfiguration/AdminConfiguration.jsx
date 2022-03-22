import React, { useContext } from "react";
import { Context } from "../../../store/appContext";

export const AdminConfiguration = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <h4 className="fw-normal">Configuración admin</h4>
    );
};
