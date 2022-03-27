import React, { useState, useContext } from "react";
import { Context } from "../../../../store/appContext";
import PropTypes from "prop-types";

// Styles
import "./table-edition-modal.css";

// Functions
import { apiManageTable, apiDeleteTable } from "../../../../service/table.js";

// Components
import Modal from "react-bootstrap/Modal";
import { Spinner } from "../../../Spinner/Spinner.jsx";

export const TableEditionModal = (props) => {
    const { store, actions } = useContext(Context);

    const [loading, setLoading] = useState(false);
    const [notifyMessage, setNotifyMessage] = useState(false);

    const new_table = store.activeTableEdition.length === 0 ? true : false;
    const [name, setName] = useState(props.new_table ? "" : store.tableData[props.table_index].name);
    

    const handleSaveChanges = async (e) => {
        setNotifyMessage(false);

        try {
            let body = {
                "id": props.new_table ? "" : store.tableData[props.table_index].id,
                "name": name
            };
            console.log(body)
            // Check data
            let validData = true;
            Object.keys(body).forEach(objKey => {
                if (objKey === "id") { return; }
                if (!body[objKey] || body[objKey].toString().trim().length === 0) {
                    validData = false;
                }
            });

            if (!validData) {
                setNotifyMessage("Completa correctamente todos los campos antes de continuar");
            }
            else {
                const response = await apiManageTable(new_table ? true : false, JSON.stringify(body));
                const data = await response.json();
                const status = response.status;

                if (status === 200 || status === 201) {
                    props.setEditTable(false);
                }
                else {
                    setNotifyMessage(data);
                }
            }
        }
        catch (err) {
            console.log(err);
            setNotifyMessage("Error interno del servidor. Por favor, inténtalo de nuevo.");
        }
    };

    return (
        <Modal id="menu-item-edition"
            show={props.show}
            onHide={() => props.setEditTable(false)}
        >
            <Modal.Header closeButton>
                <h5>{!props.new_table ? "Actualizar" : "Crear"}</h5>
            </Modal.Header>

            <Modal.Body>
                {loading ? <Spinner /> : null}

                <div className="row">
                    <div className="col-8 mb-3">
                        <label className="form-label mb-1">Nombre</label>*
                        <input
                            type="text"
                            className="form-control shadow-sm"
                            autoComplete="off"
                            autoFocus="on"
                            maxLength={69}
                            onChange={(e) => setName(e.target.value)}
                            defaultValue={name}
                        />
                    </div>
                </div>

                <p className={`text-danger fw-normal ${!notifyMessage ? "d-none" : ""}`}>
                    <i className="fas fa-exclamation-circle me-2"></i>
                    {notifyMessage}
                </p>
            </Modal.Body>

            <Modal.Footer>
                <button
                    type="button"
                    className="btn btn-sm theme-color-button shadow-none"
                    onClick={handleSaveChanges}
                >
                    <i className="fas fa-paper-plane me-2"></i>
                    {!props.new_table ? "Actualizar" : "Crear"}
                </button>
            </Modal.Footer>
        </Modal>
    );
};

TableEditionModal.propTypes = {
    new_table: PropTypes.bool,
    table_index: PropTypes.number,
    setEditTable: PropTypes.func
};