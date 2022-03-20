import React from "react";
import { useParams } from "react-router-dom";

// Styles 
import "./clients-interface.css";

// Components
import { NewOrder } from "../../component/Dashboard/NewOrder/NewOrder.jsx";
import { NewOrderSummaryShortcutButton } from "../../component/Dashboard/NewOrderSummaryShortcutButton/NewOrderSummaryShortcutButton.jsx";

export const ClientsInterface = () => {
    const { table_id } = useParams();

    // Con el id de mesa hay que obtener la empresa y luego enviarla
    // Por ahora hardcodeo

    return (
        <div
            id="clients-interface"
        >
            <div>
                <div className="clients-interface-company-description">
                    <div>
                        <img className="img-fluid" src="https://res.cloudinary.com/dxbcvuacb/image/upload/v1647108989/LogoDesign4_zrx29z.png" alt="CompanyLogo" />
                    </div>

                    <h5 className="m-0"><strong>Jose's Fake Corp.</strong></h5>
                </div>

                <div className="clients-interface-company-banner">
                    <h4 className="m-2 text-center">Menú</h4>
                    <hr />

                    <p>Descripción de la empresa</p>
                </div>
            </div>

            <main>
                <NewOrder company_id={9003} />
                <NewOrderSummaryShortcutButton />
            </main>

            <div className="h-auto py-3 bg-white bg-opacity-75 text-white text-center">
                2022© By <strong>MasterGest</strong> | 4Geeks Academy
            </div>
        </div>
    );
};

