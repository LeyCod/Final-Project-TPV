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
                        <th>Mesa</th>
                        <th>Estado</th>
                        <th>Importe</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>3</td>
                        <td>Mesa 2</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-sm green-button shadow-none"
                            >
                                Pendiente
                            </button>
                        </td>
                        <td>10 €</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Mesa 5</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-sm blue-button shadow-none"
                            >
                                Pagado
                            </button>
                        </td>
                        <td>15 €</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mesa 1</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-sm yellow-button shadow-none"
                            >
                                En espera
                            </button>
                        </td>
                        <td>17 €</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

OrdersTable.proptypes = {
    setActualDashboardView: PropTypes.func
}
