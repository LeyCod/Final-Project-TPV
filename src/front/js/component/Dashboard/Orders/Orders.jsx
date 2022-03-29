import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import PropTypes from "prop-types";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { ErrorModal } from "../../Modal/ErrorModal/ErrorModal.jsx";
import { OrdersTable } from "../OrdersTable/OrdersTable.jsx";

// Custom Hooks
import { useFetchOrdersTables } from "../../CustomHooks/CustomHooks.jsx";

export const Orders = (props) => {
    const { store, actions } = useContext(Context);

    /* Fetch company orders and tables */
    const { fetchOrderTableResult, error, loading } = useFetchOrdersTables();

    return loading
        ? <Spinner />
        : error
            ? <ErrorModal show={true} />
            : (
                <div className="dashboard-view-content p-3 p-lg-4">
                    <div className="row">
                        <div className="col-12 d-none d-md-block">
                            <p className="view-description">
                                Listado de todos los pedidos realizados.
                            </p>
                        </div>

                        <div className="col-12">
                            <div className="rounded-3 p-3 bg-white shadow-sm">
                                <div>
                                    <h4 className="m-0 fw-bold">Pedidos realizados</h4>
                                </div>

                                <hr />

                                <div>
                                    <OrdersTable viewAll={true} handleChangeView={props.handleChangeView} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
};

Orders.propTypes = {
    handleChangeView: PropTypes.func
}
