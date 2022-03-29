import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import PropTypes from "prop-types";

// Styles
import "./orders-table.css";

// Components
import Table from "react-bootstrap/Table";

export const OrdersTable = (props) => {
    const { store, actions } = useContext(Context);

    const handleViewOrder = (name, id) => {
        actions.setActiveTable(name, id);
        props.handleChangeView("new_order");
    }

    return (
        <div id="orders-table">
            {
                store.companyOrders.length === 0
                    ? <p className="d-flex align-items-center m-0">
                        <i className="far fa-frown-open fa-2x me-2"></i>
                        Aún no se ha registrado ningún pedido.
                    </p>
                    : <Table responsive>
                        <thead>
                            <tr>
                                <th>Mesa</th>
                                <th className="d-none d-md-table-cell">Fecha, Hora</th>
                                <th>Importe</th>
                                <th>Estado</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(store.companyOrders).map(objKey => {
                                    if (!props.viewAll && objKey > 2) { return false; } // Only three orders in the "recents orders" table

                                    let date = store.companyOrders[objKey].created_at;
                                    date = new Date(date);
                                    date = date.toLocaleString();

                                    return <tr key={objKey}>
                                        <td><strong>{store.companyOrders[objKey].table_name}</strong></td>
                                        <td className="d-none d-md-table-cell">{date}</td>
                                        <td>{store.companyOrders[objKey].total_price} €</td>
                                        <td>
                                            {
                                                store.companyOrders[objKey].is_active
                                                    ? <button
                                                        type="button"
                                                        className="btn btn-sm xs-button yellow-button px-0 shadow-none"
                                                    >
                                                        Activo
                                                    </button>
                                                    : <button
                                                        type="button"
                                                        className="btn btn-sm xs-button green-button px-0 shadow-none"
                                                    >
                                                        Pagado
                                                    </button>
                                            }
                                        </td>
                                        <td className="text-center">
                                            {store.companyOrders[objKey].is_active
                                                ? <button
                                                    type="button"
                                                    className="d-flex justify-content-center align-items-center gap-2 m-auto btn btn-sm outline-theme-color-button shadow-sm"
                                                    onClick={() => handleViewOrder(store.companyOrders[objKey].table_name, store.companyOrders[objKey].table_id)}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                                        <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                                                    </svg> <span className="fw-bold">Ver</span>
                                                </button>
                                                : null
                                            }
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
            }

            <hr />
        </div>
    );
};


OrdersTable.proptypes = {
    viewAll: PropTypes.bool,
    handleChangeView: PropTypes.func
}
