import React, { useState, useContext } from "react";
import { Context } from "../../../store/appContext";

// Styles
import "./user-configuration.css";

// Functions 
import { apiUploadImage, apiUpdateUser } from "../../../service/user";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { ErrorModal } from "../../Modal/ErrorModal/ErrorModal.jsx";
import { ExpiredSessionModal } from "../../Modal/ExpiredSessionModal.jsx";

// Custom Hooks
import { useFetchUser } from "../../CustomHooks/CustomHooks.jsx";

export const UserConfiguration = () => {
    const { store, actions } = useContext(Context);

    /* User fetch data */
    const [reload, setReload] = useState(false);
    const { validateUser, error, loading } = useFetchUser(reload);

    /* User data form */
    const [firstName, setFirstName] = useState(store.loggedUserData.first_name);
    const [lastName, setLastName] = useState(store.loggedUserData.last_name);
    const [email, setEmail] = useState(store.loggedUserData.email);
    const [phone, setPhone] = useState(store.loggedUserData.phone);
    const [notifyMessage, setNotifyMessage] = useState(false);

    /* Form img */
    const allowedImgExtensions = ["jpg", "jpeg", "png"];
    const [imgUrl, setImgUrl] = useState(store.loggedUserData.image_url);
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
                "id": store.loggedUserData.id,
                "image_url": imgUrl,
                "first_name": firstName.trim().toUpperCase(),
                "last_name": lastName.trim().toUpperCase(),
                "email": email.trim().toLowerCase(),
                "phone": phone
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
                const response = await apiUpdateUser(JSON.stringify(body));
                const data = await response.json();
                const status = response.status;

                if (status === 200) {
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
    }

    return loading
        ? null
        : !validateUser
            ? <ExpiredSessionModal show={true} />
            : error
                ? <ErrorModal show={true} />
                : (
                    <div className="dashboard-view-content p-3 p-lg-4">
                        {imgLoading ? <Spinner /> : null}

                        <div className="row" id="user-configuration">
                            <div className="col-12 d-none d-md-block">
                                <p className="view-description">
                                    Introduce tus datos personales y tu imagen de perfil. Todos los campos son obligatorios.
                                </p>
                            </div>


                            <div className="col-12 col-sm-6 col-xl-5 mb-3">
                                <label className="form-label mb-1">Nombre</label>*
                                <input
                                    type="text"
                                    className="form-control shadow-sm"
                                    autoComplete="off"
                                    autoFocus="on"
                                    maxLength={29}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    defaultValue={firstName}
                                />
                            </div>

                            <div className="col-12 col-sm-6 col-xl-5 mb-3">
                                <label className="form-label mb-1">Apellidos</label>*
                                <input
                                    type="text"
                                    className="form-control shadow-sm"
                                    autoComplete="off"
                                    maxLength={49}
                                    onChange={(e) => setLastName(e.target.value)}
                                    defaultValue={lastName}
                                />
                            </div>

                            <div className="col-12 col-sm-6 col-xl-5 mb-3">
                                <label className="form-label mb-1">Email</label>*
                                <input
                                    type="text"
                                    className="form-control shadow-sm"
                                    autoComplete="off"
                                    maxLength={59}
                                    onChange={(e) => setEmail(e.target.value)}
                                    defaultValue={email}
                                />
                                <small className="text-muted">Debe ser un email válido</small>
                            </div>

                            <div className="col-12 col-sm-6 col-xl-5 mb-3">
                                <label className="form-label mb-1">Teléfono</label>*
                                <input
                                    type="number"
                                    className="form-control shadow-sm"
                                    autoComplete="off"
                                    onChange={(e) => setPhone(e.target.value)}
                                    defaultValue={phone}
                                />
                            </div>

                            <div className={`col-12 mb-2 ${imgUrl === "" ? "d-none" : ""}`}>
                                <div id="user-configuration-img">
                                    <img className="img-fluid" src={imgUrl} />
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="img-file" className="label-file-button btn btn-sm btn-secondary mb-1 text-white">
                                    <i className="far fa-file-image fa-lg"></i>
                                    Seleccionar avatar
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
