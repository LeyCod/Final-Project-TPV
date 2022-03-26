import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import PropTypes from "prop-types";

// Styles
import "./new-order-select-table.css";

// Components
import { Spinner } from "../../../Spinner/Spinner.jsx";
import { ErrorModal } from "../../../Modal/ErrorModal/ErrorModal.jsx";
import Modal from "react-bootstrap/Modal";

// Custom Hooks
import { useFetchOrdersTables } from "../../../CustomHooks/CustomHooks.jsx";

export const NewOrderSelectTable = (props) => {
    const { store, actions } = useContext(Context);

    /* Fetch company orders and tables */
    const { fetchOrderTableResult, error, loading } = useFetchOrdersTables();

    const handleTableSelection = (select) => {
        props.setShowTableSelection(false);

        if (select) {
            actions.setActiveTableID(select);
            props.handleChangeView("new_order");
        }
        else {
            props.handleChangeView("tables");
        }
    }

    return loading
        ? <Spinner />
        : error
            ? <ErrorModal show={true} />
            : (
                <Modal id="new-order-select-table"
                    show={true}
                    onHide={() => props.setShowTableSelection(false)}
                >
                    {store.companyTables.length === 0
                        ? <div className="d-flex flex-column flex-nowrap gap-3 p-3 text-center">
                            <i className="far fa-meh fa-3x"></i>

                            <p className="m-0">
                                Debes crear las mesas sobre las que se realizarán los pedidos.
                            </p>

                            <div>
                                <button
                                    type="button"
                                    className="btn theme-color-button shadow-none"
                                    onClick={() => handleTableSelection(false)}
                                >
                                    Entendido
                                </button>
                            </div>
                        </div>
                        : <>
                            <Modal.Header closeButton>
                                <h5>Seleccionar mesa</h5>
                            </Modal.Header>

                            <Modal.Body className="p-4">
                                {
                                    Object.keys(store.companyTables).map(objKey =>
                                        <div
                                            key={objKey}
                                            className="selectable-table shadow-sm"
                                            onClick={() => handleTableSelection(store.companyTables[objKey].id)}
                                        >
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-secondary w-100"
                                            >
                                                <i className="fas fa-th-large me-3"></i>

                                                {store.companyTables[objKey].name}
                                            </button>
                                        </div>
                                    )
                                }
                            </Modal.Body>
                        </>
                    }
                </Modal >
            );
};

NewOrderSelectTable.propTypes = {
    setShowTableSelection: PropTypes.func,
    handleChangeView: PropTypes.func
};
