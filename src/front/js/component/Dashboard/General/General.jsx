import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { Link } from "react-router-dom";

export const General = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <h4 className="fw-normal">Bienvenid@, { store.loggedUserData.first_name }</h4>
    );
};
