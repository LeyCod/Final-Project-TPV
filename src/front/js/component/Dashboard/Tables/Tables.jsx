import React from "react";
import PropTypes from "prop-types";

// Styles
import "./tables.css";

// Components
import { TablesWrapper } from "../TablesWrapper/TablesWrapper.jsx";

export const Tables = (props) => {
    return (
        <div className="dashboard-view-content p-3 p-lg-4">
            <div className="row" id="tables-configuration">
                <div className="col-12 d-none d-md-block">
                    <p className="view-description">
                        Desde aquí puedes gestionar las mesas del local.
                    </p>
                </div>

                <TablesWrapper handleChangeView={props.handleChangeView} />
            </div>
        </div>
    );
};

Tables.propTypes = {
    handleChangeView: PropTypes.func
}
