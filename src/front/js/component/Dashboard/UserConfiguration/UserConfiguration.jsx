import React, { useContext } from "react";
import { Context } from "../../../store/appContext";

export const UserConfiguration = () => {
    const { store, actions } = useContext(Context);

    return (
        <h4 className="fw-normal">Configuración de usuario</h4>
    );
};
