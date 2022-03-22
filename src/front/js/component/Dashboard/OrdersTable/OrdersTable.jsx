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
                        <th>Hora</th>
                        <th>Mesa</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#4</td>
                        <td>22:10</td>
                        <td>2</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-sm green-button shadow-none"
                            >
                                Pendiente
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>#3</td>
                        <td>21:05</td>
                        <td>5</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-sm blue-button shadow-none"
                            >
                                Pagado
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>#2</td>
                        <td>20:45</td>
                        <td>1</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-sm yellow-button shadow-none"
                            >
                                En espera
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>#1</td>
                        <td>19:55</td>
                        <td>5</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-sm red-button shadow-none"
                            >
                                Eliminado
                            </button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

OrdersTable.proptypes = {
    handleChangeView: PropTypes.func,
    viewAll: PropTypes.bool
}
