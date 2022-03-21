import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
                <div className="clients-interface-company-banner">
                    <div>
                        <img className="img-fluid" src="https://res.cloudinary.com/dxbcvuacb/image/upload/v1647108989/LogoDesign4_zrx29z.png" alt="CompanyLogo" />
                    </div>

                    <h4 className="m-2">Nuestra <strong>carta</strong></h4>

                    <hr />

                    <p>Descripción de la empresa</p>
                </div>
            </div>

            <main>
                <NewOrder company_id={9003} />
                <NewOrderSummaryShortcutButton />
            </main>

            <div className="clients-interface-footer">
                2022© By&nbsp;
                <Link to="/" target="_blank" className="text-decoration-none text-black fw-bold">
                    MasterGest
                </Link>
                &nbsp;| 4Geeks Academy
            </div>
        </div>
    );
};

