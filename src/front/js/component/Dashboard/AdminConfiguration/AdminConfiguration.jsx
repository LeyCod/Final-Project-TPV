import React, { useState, useContext } from "react";
import { Context } from "../../../store/appContext";

// Styles
import "./admin-configuration.css";

// Functions 
import { apiUploadImage } from "../../../service/user";
import { apiUpdateCompany } from "../../../service/company";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { ErrorModal } from "../../Modal/ErrorModal/ErrorModal.jsx";
import { toast } from "react-toastify";
import { ExpiredSessionModal } from "../../Modal/ExpiredSessionModal.jsx";

// Custom Hooks
import { useFetchUser } from "../../CustomHooks/CustomHooks.jsx";

export const AdminConfiguration = () => {
    const { store, actions } = useContext(Context);

    /* User fetch data */
    const [reload, setReload] = useState(false);
    const { validateUser, error, loading } = useFetchUser(reload);

    /* User data form */
    const [name, setName] = useState(store.loggedUserCompanyData.name);
    const [description, setDescription] = useState(store.loggedUserCompanyData.description);
    const [address, setAddress] = useState(store.loggedUserCompanyData.address);
    const [notifyMessage, setNotifyMessage] = useState(false);

    /* Form img */
    const allowedImgExtensions = ["jpg", "jpeg", "png"];
    const [imgUrl, setImgUrl] = useState(store.loggedUserCompanyData.logo_url);
    const [imgLoading, setImgLoading] = useState(false);

    const handleImgChange = async (e) => {
        if (e.target.files) {
            try {
                setImgLoading(true);
                setNotifyMessage(false);

                let img_file = e.target.files[0];
                let filename = img_file.name;

                let split = filename.split(".");
                let extension = split[split.length - 1].toLowerCase();

                if (!allowedImgExtensions.includes(extension)) {
                    e.target.value = "";
                    setNotifyMessage("Formato de imagen no válido.");
                    return false;
                }

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
                setImgLoading(false);
            }
        }
    };

    const handleSaveChanges = async (e) => {
        setNotifyMessage(false);

        try {
            const body = {
                "id": store.loggedUserCompanyData.id,
                "logo_url": imgUrl,
                "name": name.toUpperCase(),
                "description": description,
                "address": address
            };

            // Check data
            let validData = true;
            Object.keys(body).forEach(objKey => {
                if (!body[objKey] || body[objKey].toString().trim().length === 0) {
                    validData = false;
                }
            });

            if (!validData) {
                setNotifyMessage("Completa correctamente todos los campos antes de continuar.");
            }
            else {
                const response = await apiUpdateCompany(JSON.stringify(body));
                const data = await response.json();
                const status = response.status;

                if (status === 200) {
                    notify("success");
                    setReload(!reload);
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
        const text = result === "success" ? "Datos actualizados" : "Ha ocurrido un error";

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
        <div className="dashboard-view-content p-3 p-lg-4">
            {
                loading
                    ? null
                    : imgLoading
                        ? <Spinner />
                        : !validateUser
                            ? <ExpiredSessionModal show={true} />
                            : error
                                ? <ErrorModal show={true} />
                                : null
            }

            <div className="row" id="admin-configuration">
                <div className="col-12 d-none d-md-block">
                    <p className="view-description">
                        Introduce los datos y el logo de tu empresa. Todos los campos son obligatorios.
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-xl-5 mb-3">
                    <label className="form-label mb-1">Nombre de la empresa</label>*
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
                    <label className="form-label mb-1">Dirección completa</label>*
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
                        className="btn theme-color-button shadow-sm"
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
