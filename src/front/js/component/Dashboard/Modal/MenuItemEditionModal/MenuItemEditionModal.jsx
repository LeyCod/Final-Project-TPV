import React, { useState, useContext } from "react";
import { Context } from "../../../../store/appContext";
import PropTypes from "prop-types";

// Styles
import "./menu-item-edition-modal.css";

// Functions
import { apiUploadImage } from "../../../../service/user";
import { apiManageItem, apiDeleteItem } from "../../../../service/menu-item";

// Components
import Modal from "react-bootstrap/Modal";
import { Spinner } from "../../../Spinner/Spinner.jsx";

export const MenuItemEditionModal = (props) => {
    const { store, actions } = useContext(Context);

    const [loading, setLoading] = useState(false);
    const [notifyMessage, setNotifyMessage] = useState(false);

    const [name, setName] = useState(props.new_item ? "" : store.menuItems[props.item_index].name);
    const [description, setDescription] = useState(props.new_item ? "" : store.menuItems[props.item_index].description);
    const [price, setPrice] = useState(props.new_item ? "" : store.menuItems[props.item_index].price);

    const [imgUrl, setImgUrl] = useState(props.new_item ? "" : store.menuItems[props.item_index].image_url);
    const allowExtensions = ["jpg", "jpeg", "png"];

    const handleImgChange = async (e) => {
        setNotifyMessage(false);

        if (e.target.files) {
            let img_file = e.target.files[0];
            let filename = img_file.name;

            let split = filename.split(".");
            let extension = split[split.length - 1].toLowerCase();

            if (!allowExtensions.includes(extension)) {
                e.target.value = "";
                setNotifyMessage("Formato de archivo no válido");
                return false;
            }

            try {
                setLoading(true);

                const form = new FormData();
                form.append("img", img_file);

                const response = await apiUploadImage(form);
                const data = await response.json();
                const status = response.status;

                if (status === 200) {
                    setImgUrl(data["img_url"]);
                }
                else {
                    setNotifyMessage(data);
                }
            }
            catch (err) {
                console.log(err);
                setNotifyMessage("Error interno del servidor. Por favor, inténtalo de nuevo.");
            }
            finally {
                setLoading(false);
            }
        }
    };

    const handleSaveChanges = async (e) => {
        setNotifyMessage(false);

        try {
            let body = {
                "id": props.new_item ? "" : store.menuItems[props.item_index].id,
                "image_url": imgUrl,
                "name": name,
                "description": description,
                "price": price
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
                setNotifyMessage("Completa correctamente todos los campos antes de continuar");
            }
            else {
                const response = await apiManageItem(props.new_item, JSON.stringify(body));
                const data = await response.json();
                const status = response.status;

                if (status === 200 || status === 201) {
                    props.setEditItem(false);
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

    const handleDeleteItem = async (e) => {
        setNotifyMessage(false);

        try {
            let body = {
                "id": store.menuItems[props.item_index].id
            };

            const response = await apiDeleteItem(JSON.stringify(body));
            const data = await response.json();
            const status = response.status;

            if (status === 200 || status === 201) {
                props.setEditItem(false);
            }
            else {
                setNotifyMessage(data);
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
            onHide={() => props.setEditItem(false)}
        >
            <Modal.Header closeButton>
                <h5>{!props.new_item ? `Actualizar elemento` : "Crear elemento"}</h5>
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

                    <div className="col-4 mb-3">
                        <label className="form-label mb-1">Precio (€)</label>*
                        <input
                            type="number"
                            className="form-control shadow-sm"
                            autoComplete="off"
                            autoFocus="on"
                            maxLength={69}
                            onChange={(e) => setPrice(e.target.value)}
                            defaultValue={price}
                        />
                    </div>
                </div>

                <div className="col-12 mb-3">
                    <label className="form-label mb-1">Descripción</label>*
                    <textarea
                        className="form-control shadow-sm"
                        maxLength={279}
                        onChange={(e) => setDescription(e.target.value)}
                        defaultValue={description}
                    />
                </div>


                <div className={`col-12 mb-2 ${imgUrl === "" ? "d-none" : ""}`}>
                    <div id="admin-configuration-img">
                        <img className="img-fluid" src={imgUrl} />
                    </div>
                </div>

                <div className="col-12">
                    <label htmlFor="img-file" className="label-file-button btn btn-sm btn-secondary mb-1 text-white">
                        <i className="far fa-file-image fa-lg"></i>
                        Seleccionar imagen
                    </label>

                    <input
                        type="file"
                        className="invisible"
                        id="img-file"
                        onChange={handleImgChange}
                    />
                </div>

                {/* <div className="d-flex gap-3 col-12 mb-3"> */}

                {/* </div> */}

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
                    <i class="fas fa-paper-plane me-2"></i>
                    {!props.new_item ? "Actualizar elemento" : "Crear elemento"}
                </button>

                {!props.new_item ?
                    <button
                        type="button"
                        className="btn btn-sm red-button shadow-none"
                        onClick={handleDeleteItem}
                    >
                        <i class="fas fa-trash-alt me-2"></i>                       
                        Eliminar elemento
                    </button>
                    : null}
            </Modal.Footer>
        </Modal>
    );
};

MenuItemEditionModal.propTypes = {
    new_item: PropTypes.bool,
    item_index: PropTypes.string,
    setEditItem: PropTypes.func
};
