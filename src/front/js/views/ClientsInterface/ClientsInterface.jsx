import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Styles 
import "./clients-interface.css";
import defaultCompanyLogo from "../../../assets/img/defaultCompanyLogo.png"
import clientsInterfaceBG from "../../../assets/img/clientsInterfaceBG.png";

// Functions
import { apiGetTable } from "../../service/table";

// Components
import { Spinner } from "../../component/Spinner/Spinner.jsx";
import { ErrorModal } from "../../component/Modal/ErrorModal/ErrorModal.jsx";
import { NewOrder } from "../../component/Dashboard/NewOrder/NewOrder.jsx";
import { NewOrderSummaryShortcutButton } from "../../component/Dashboard/NewOrderSummaryShortcutButton/NewOrderSummaryShortcutButton.jsx";

// Custom Hooks
import { useFetchClients } from "../../component/CustomHooks/CustomHooks.jsx";

export const ClientsInterface = () => {
    const { store, actions } = useContext(Context);

    const { table_id } = useParams();

    /* Fetch all necessary information */
    const { fetchResult, error, loading } = useFetchClients(table_id);

    return loading
        ? <Spinner />
        : error
            ? <ErrorModal show={true} />
            : (
                <div
                    id="clients-interface"
                >
                    <div
                        className="clients-interface-banner-wrapper"
                        style={{ backgroundImage: `url(${clientsInterfaceBG})` }}
                    >
                        <div className="clients-interface-company-banner">
                            <div>
                                <img className="img-fluid" src={store.clientInfo.company ? store.clientInfo.company.logo_url : defaultCompanyLogo} alt="CompanyLogo" />
                            </div>

                            <h4 className="m-2">Nuestra <strong>carta</strong></h4>

                            <hr />

                            <div className="clients-interface-company-description">
                                <p>{store.clientInfo.company ? store.clientInfo.company.company_description : ""}</p>
                            </div>
                        </div>
                    </div>

                    <main>
                        {store.clientInfo.company ? <NewOrder /> : null}
                        
                        {/* <div className="p-1 text-center">
                            Hay un pedido en curso de 30€. Pulsa aquí para finalizarlo.
                        </div> */}


                        {/* <NewOrderSummaryShortcutButton /> */}
                    </main>

                    <div className="clients-interface-footer">
                        2022© By&nbsp;
                        <Link to="/" target="_blank" className="text-decoration-none text-dark fw-bold">
                            MasterGest
                        </Link>
                        &nbsp;| 4Geeks Academy
                    </div>
                </div>
            );
};
/* 
loading
        ? <Spinner />
        : fetchError
            ? <ErrorModal show={true} />
            :  */