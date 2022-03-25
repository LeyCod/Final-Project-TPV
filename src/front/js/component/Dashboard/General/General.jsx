import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import PropTypes from "prop-types"

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { ErrorModal } from "../../Modal/ErrorModal/ErrorModal.jsx";

import { GeneralSummaryCard } from "../GeneralSummaryCard/GeneralSummaryCard.jsx";
import { OrdersTable } from "../OrdersTable/OrdersTable.jsx";

// Custom Hooks
import { useFetchOrdersTables } from "../../CustomHooks/CustomHooks.jsx";

export const General = (props) => {
    const { store, actions } = useContext(Context);

    /* Fetch company orders and tables */
    const { fetchOrderTableResult, error, loading } = useFetchOrdersTables();

    return loading
        ? <Spinner />
        : error
            ? <ErrorModal show={true} />
            : (<div className="dashboard-view-content p-3 p-lg-4">
                <h4 className="fw-normal mb-2">Bienvenid@, {store.loggedUserData.first_name}</h4>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <GeneralSummaryCard
                            counter={store.companyActiveOrders.length}
                            title="Pedidos activos" 
                            icon="orders"
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <GeneralSummaryCard
                            counter={Object.keys(store.companyActiveTables).length} 
                            title="Mesas libres"
                            icon="tables"
                            progress={65}
                        />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-12">
                        <div className="rounded-3 p-3 bg-white shadow-sm">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="m-0 fw-bold">Pedidos recientes</h4>
                                <button
                                    type="button"
                                    className="btn theme-color-button shadow-none"
                                    onClick={() => props.handleChangeView("orders")}
                                >
                                    <small>Ver todo</small>
                                </button>
                            </div>

                            <hr />

                            <div>
                                <OrdersTable viewAll={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
};

General.proptypes = {
    handleChangeView: PropTypes.func
}
