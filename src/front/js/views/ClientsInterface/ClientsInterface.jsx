import React from "react";
import { useParams } from "react-router-dom";

// Styles 
import "./clients-interface.css";

// Components
import { NewOrder } from "../../component/Dashboard/NewOrder/NewOrder.jsx";
import { NewOrderSummaryShortcutButton } from "../../component/Dashboard/NewOrderSummaryShortcutButton/NewOrderSummaryShortcutButton.jsx";
import clientsInterfaceBG from "../../../assets/img/ClientsInteface-BG.jpg";

export const ClientsInterface = () => {
    const { table_id } = useParams();

    // Con el id de mesa hay que obtener la empresa y luego enviarla
    // Por ahora hardcodeo

    return (
        <div
            id="clients-interface"
            style={{ backgroundImage: `url(${clientsInterfaceBG})` }}
        >
            <div className="clients-interface-company-description">
                <h5 className="m-0">Jose's Fake Corp.</h5>
            </div>

            <div className="clients-interface-company-banner">
                <h4 className="m-2">Menú</h4>
                <hr />
                
                <p>Descripción de la empresa</p>
            </div>

            <NewOrder company_id={9003} />
            <NewOrderSummaryShortcutButton />
        </div>
    );
};

