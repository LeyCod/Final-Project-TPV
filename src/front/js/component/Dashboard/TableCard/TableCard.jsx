import React, { useState, useContext } from "react";
import { Context } from "../../../store/appContext";
import PropTypes from "prop-types";

// Styles
import "./table-card.css";

// Components
import { QRModal } from "../Modal/QRModal/QRModal.jsx";

export const TableCard = (props) => {
    const { store, actions } = useContext(Context);
    const [showQR, setShowQR] = useState(false);

    const checkTableOrder = (id) => {
        let found = false;

        Object.keys(store.companyOrders).forEach(objKey => {
            if (store.companyOrders[objKey]["table_id"] === parseInt(id)) {
                found = true;
            }
        })

        return found;
    }

    const handleTableSelection = (name, id) => {
        actions.setActiveTable(name, id);
        props.handleChangeView("new_order");
    }

    return (
        <div className="table-card">
            <div>
                <p className="fw-bold text-center">{props.name}</p>
                <i className={`fas fa-circle ${checkTableOrder(props.table_index) ? "text-success" : "text-danger"}`}></i>
            </div>

            <div>
                <div className="d-flex gap-1">
                    <button
                        type="button"
                        className="btn btn-sm xs-button theme-color-button shadow-none"
                        onClick={() => handleTableSelection(props.name, props.table_index)}
                    >
                        Pedido
                    </button>

                    <button
                        type="button"
                        className="btn btn-sm xs-button btn-secondary shadow-none"
                        onClick={() => setShowQR(true)}
                    >
                        QR
                    </button>
                </div>

                <button
                    type="button"
                    className="btn btn-sm xs-button outline-theme-color-button shadow-none"
                    onClick={() => actions.setActiveItemEdition(props.item_index)}
                >
                    <i className="fas fa-highlighter"></i>
                </button>
            </div>

            {
                showQR
                    ? <QRModal table_name={props.name} setShowQR={setShowQR} qr_url={`${window.location.host}/clients/${props.item_index}`} />
                    : null
            }
        </div>
    );
};

TableCard.propTypes = {
    table_index: PropTypes.string,
    name: PropTypes.string,
    qr_url: PropTypes.string,
    handleChangeView: PropTypes.func
};
