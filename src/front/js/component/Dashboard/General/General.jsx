import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import PropTypes from "prop-types"

// Components
import { SummaryCard } from "../SummaryCard/SummaryCard.jsx";
import { OrdersTable } from "../OrdersTable/OrdersTable.jsx";

export const General = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <h4 className="fw-normal">Bienvenid@, {store.loggedUserData.first_name}</h4>

            <div className="row my-3">
            <div className="col-12 col-md-6">
                    <SummaryCard
                        counter={12}
                        title="Pedidos activos" icon="orders"
                    />
                </div>
                <div className="col-12 col-md-6">
                    <SummaryCard
                        counter={6} title="Mesas libres"
                        icon="tables"
                        progress={65}
                    />
                </div>
            </div>

            <div className="row my-3">
                <div className="col-12">
                    <div className="rounded-3 p-3 bg-white shadow-sm">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="m-0 fw-bold">Pedidos recientes</h4>
                            <button 
                                type="button" 
                                className="btn theme-color-button shadow-none"
                                onClick={() => props.setActualDashboardView("orders")}
                            >
                                <small>Ver todos</small>
                            </button>
                        </div>

                        <hr />

                        <div>
                            <OrdersTable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

General.proptypes = {
    setActualDashboardView: PropTypes.func
}
