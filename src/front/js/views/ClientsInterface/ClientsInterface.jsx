import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Styles 
import "./clients-interface.css";

// Functions
import { apiGetTable } from "../../service/table";

// Components
import { Spinner } from "../../component/Spinner/Spinner.jsx";
import { ErrorModal } from "../../component/Modal/ErrorModal/ErrorModal.jsx";
import { NewOrder } from "../../component/Dashboard/NewOrder/NewOrder.jsx";
import { NewOrderSummaryShortcutButton } from "../../component/Dashboard/NewOrderSummaryShortcutButton/NewOrderSummaryShortcutButton.jsx";

export const ClientsInterface = () => {
    const { table_id } = useParams();

    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(false);

    useEffect(() => {
        async function getTable() {
            try {
                const response = await apiGetTable(table_id);
                const data = await response.json();
                const status = response.status;

                if (status === 200) {
                    console.log("perfe");
                    setFetchError(false);
                }
                else {
                    console.error(status);
                    setFetchError(true);
                }
            }
            catch (err) {
                console.error(err);
                setFetchError(true);
            }
            finally {
                setLoading(false);
            }
        }

        getTable();
    }, []);

    return loading
        ? <Spinner />
        : fetchError
            ? <ErrorModal show={true} />
            : (
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

