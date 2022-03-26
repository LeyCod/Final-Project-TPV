import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import PropTypes from "prop-types";

// Styles
import "./orders-table.css";

// Components
import Table from "react-bootstrap/Table";

export const OrdersTable = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div id="orders-table">
            {
                store.companyOrders.length === 0
                    ? <p className="d-flex align-items-center m-0">
                        <i className="far fa-frown-open fa-2x me-2"></i>
                        Aún no se ha registrado ningún pedido.
                    </p>
                    : <Table hover responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fecha, Hora</th>
                                <th>ID Mesa</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(store.companyOrders).map(objKey => {
                                    if (!props.viewAll && objKey > 1) { return false; } // Only two orders in the "recents orders" table

                                    let date = store.companyOrders[objKey].created_at;
                                    date = new Date(date);
                                    date = date.toLocaleString();

                                    return <tr key={objKey}>
                                        <td>#{store.companyOrders[objKey].id}</td>
                                        <td>{date}</td>
                                        <td>{store.companyOrders[objKey].table_id}</td>
                                        <td>
                                            {
                                                store.companyOrders[objKey].is_active
                                                    ? <button
                                                        type="button"
                                                        className="btn btn-sm yellow-button shadow-none"
                                                    >
                                                        Activo
                                                    </button>
                                                    : <button
                                                        type="button"
                                                        className="btn btn-sm green-button shadow-none"
                                                    >
                                                        Finalizado
                                                    </button>
                                            }
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
            }
        </div>
    );
};


OrdersTable.proptypes = {
    viewAll: PropTypes.bool
}
