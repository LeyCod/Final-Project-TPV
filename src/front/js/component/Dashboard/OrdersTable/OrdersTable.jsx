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
            <Table hover responsive>
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
                        Object.keys(store.companyActiveOrders).map(objKey => {
                            if (!props.viewAll && objKey > 1) { return false; } // Only two orders in the "recents orders" table

                            let date = store.companyActiveOrders[objKey].created_at;
                            date = new Date(date);
                            date = date.toLocaleString();

                            return <tr key={objKey}>
                                <td>#{store.companyActiveOrders[objKey].id}</td>
                                <td>{date}</td>
                                <td>{store.companyActiveOrders[objKey].table_id}</td>
                                <td>
                                    {
                                        store.companyActiveOrders[objKey].is_active
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
        </div>
    );
};


OrdersTable.proptypes = {
    handleChangeView: PropTypes.func,
    viewAll: PropTypes.bool
}
