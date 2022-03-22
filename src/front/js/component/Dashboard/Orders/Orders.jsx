import React, { useContext } from "react";
import { Context } from "../../../store/appContext";

export const Orders = () => {
    const { store, actions } = useContext(Context);

    return (
        <h4 className="fw-normal">Pedidos</h4>
    );
};
