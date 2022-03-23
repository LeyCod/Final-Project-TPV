import React, { useState, useContext } from "react";
import { Context } from "../../../store/appContext";

// Styles
import "./admin-configuration.css";

// Functions 
import { apiUploadImage } from "../../../service/user";
import { apiUpdateCompany } from "../../../service/company";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";

export const AdminConfiguration = () => {
    const { store, actions } = useContext(Context);

    const [loading, setLoading] = useState(false);
    const [notifyMessage, setNotifyMessage] = useState(false);

    const [name, setName] = useState(store.loggedUserCompanyData.name);
    const [description, setDescription] = useState(store.loggedUserCompanyData.description);
    const [address, setAddress] = useState(store.loggedUserCompanyData.address);
    
    const [imgUrl, setImgUrl] = useState(store.loggedUserCompanyData.logo_url);
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
                "id": store.loggedUserCompanyData.id,
                "logo_url": imgUrl             
            };

            if (name.trim().length === 0) { body["name"] = name.toUpperCase() }
            if (description.trim().length === 0) { body["description"] = description }
            if (address.trim().length === 0) { body["address"] = address }

            const response = await apiUpdateCompany(JSON.stringify(body));
            const data = await response.json();
            const status = response.status;

            if (status === 200) {
                location.reload();
            }
            else {
                setNotifyMessage(data);
            }
        }
        catch (err) {
            console.log(err);
            setNotifyMessage("Error interno del servidor. Por favor, inténtalo de nuevo.");
        }
    }

    return (
        <div className="dashboard-view-content p-3 p-lg-4">
            {loading ? <Spinner /> : null}

            <div className="row" id="admin-configuration">
                <div className="col-12 d-none d-md-block">
                    <p className="view-description">
                        Introduce los datos y el logo de tu empresa.
                    </p>
                </div>


                <div className="col-12 col-sm-6 col-xl-5 mb-3">
                    <label className="form-label mb-1">Nombre de la empresa</label>
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

                <div className="col-12 col-sm-6 col-xl-5 mb-3">
                    <label className="form-label mb-1">Dirección completa</label>
                    <input
                        type="text"
                        className="form-control shadow-sm"
                        autoComplete="off"
                        maxLength={69}
                        onChange={(e) => setAddress(e.target.value)}
                        defaultValue={address}
                    />
                </div>

                <div className="col-12 col-xl-5 mb-3">
                    <label className="form-label mb-1">Descripción</label>
                    <textarea
                        /* type="text" */
                        className="form-control shadow-sm"
                        /* autoComplete="off" */
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
                        Seleccionar logo
                    </label>

                    <input
                        type="file"
                        className="invisible"
                        id="img-file"
                        onChange={handleImgChange}
                    />
                </div>

                <div className="col-12 mb-3">
                    <button
                        type="button"
                        className="btn btn-sm theme-color-button shadow-none"
                        onClick={handleSaveChanges}
                    >
                        Guardar cambios
                    </button>
                </div>

                <p className={`text-danger fw-normal ${!notifyMessage ? "d-none" : ""}`}>
                    <i className="fas fa-exclamation-circle me-2"></i>
                    {notifyMessage}
                </p>
            </div>
        </div>
    );
};
