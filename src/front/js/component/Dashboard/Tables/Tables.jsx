import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { Link } from "react-router-dom";

export const Tables = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <h1>Mesas</h1>
    );
};
