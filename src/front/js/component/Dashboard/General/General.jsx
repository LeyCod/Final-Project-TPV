import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

// Components
import { SummaryCard } from "../SummaryCard/SummaryCard.jsx";

export const General = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <h4 className="fw-normal">Bienvenid@, {store.loggedUserData.first_name}</h4>

            <div className="row my-3">
                <div className="col-12 col-md-6"
                    onClick={() => props.setActualDashboardView("orders")}
                >
                    <SummaryCard
                        counter={12}
                        title="Pedidos activos" icon="orders"
                    />
                </div>
                <div 
                    className="col-12 col-md-6"
                    onClick={() => props.setActualDashboardView("tables")}
                >
                    <SummaryCard 
                        counter={6} title="Mesas libres" 
                        icon="tables" 
                        progress={65} 
                    />
                </div>
            </div>
        </>
    );
};

General.proptypes = {
    setActualDashboardView: PropTypes.func
}
