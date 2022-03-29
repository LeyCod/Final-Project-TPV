import React, { useState, useContext } from "react";
import { Context } from "../../../../store/appContext";

// Styles
import "./table-edition-modal.css";

// Functions
import { apiManageTable } from "../../../../service/table";

// Components
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

export const TableEditionModal = () => {
    const { store, actions } = useContext(Context);

    const new_table = store.activeTableEdition.length === 0 ? true : false;
    const table_index = store.activeTableEdition;

    /* Table data form */
    const [name, setName] = useState(new_table ? "" : store.companyTables[table_index].name); 
    const [notifyMessage, setNotifyMessage] = useState(false);

    const handleSaveChanges = async (e) => {
        setNotifyMessage(false);

        try {
            let body = {
                "id": new_table ? "" : store.companyTables[table_index].id,
                "name": name
            };

            // Check data
            let validData = true;
            Object.keys(body).forEach(objKey => {
                if (objKey === "id") { return; }
                if (!body[objKey] || body[objKey].toString().trim().length === 0) {
                    validData = false;
                }
            });

            if (!validData) {
                setNotifyMessage("Completa correctamente todos los campos antes de continuar.");
            }
            else {
                const response = await apiManageTable(new_table ? true : false, JSON.stringify(body));
                const data = await response.json();
                const status = response.status;

                if (status === 200 || status === 201) {
                    actions.setActiveTableEdition(false);
                    notify("success");
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

    const notify = (result) => {
        const text = result === "success" ? `Mesa ${new_table ? "creada" : "actualizada"}` : "Ha ocurrido un error";

        toast(text, {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: false,
            theme: "colored",
            type: result
        });
    }

    return (
        <Modal id="table-edition"
            show={true}
            onHide={() => actions.setActiveTableEdition(false)}
        >
            <Modal.Header closeButton>
                <h5>{new_table ? "Crear mesa" : "Actualizar mesa"}</h5>
            </Modal.Header>

            <Modal.Body>
                <div className="row">
                    <div className="col-12 mb-3">
                        <label className="form-label mb-1">Nombre</label>*
                        <input
                            type="text"
                            className="form-control shadow-sm"
                            autoComplete="off"
                            autoFocus="on"
                            maxLength={19}
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
                    {new_table ? "Crear" : "Actualizar"}
                </button>
            </Modal.Footer>
        </Modal>
    );
};
