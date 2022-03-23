import React, { useState, useContext } from "react";
import { Context } from "../../../store/appContext";

// Styles
import "./user-configuration.css";

// Functions 
import { apiUploadImage, apiUpdateUser } from "../../../service/user";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";

export const UserConfiguration = () => {
    const { store, actions } = useContext(Context);

    const [loading, setLoading] = useState(false);
    const [notifyMessage, setNotifyMessage] = useState(false);

    const [firstName, setFirstName] = useState(store.loggedUserData.first_name);
    const [lastName, setLastName] = useState(store.loggedUserData.last_name);
    const [email, setEmail] = useState(store.loggedUserData.email);
    const [phone, setPhone] = useState(store.loggedUserData.phone);

    const [imgUrl, setImgUrl] = useState(store.loggedUserData.image_url);
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
            const body = JSON.stringify({
                "id": store.loggedUserData.id,
                "image_url": imgUrl,
                "first_name": firstName.toUpperCase().trim(),
                "last_name": lastName.toUpperCase().trim(),
                "email": email.toLowerCase().trim(),
                "phone": phone
            });

            const response = await apiUpdateUser(body);
            const data = await response.json();
            const status = response.status;

            console.log("data", data),
                console.log("status", status);

            if (status === 201) {
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

            <div className="row" id="user-configuration">
                <div className="col-12 d-none d-md-block">
                    <p className="view-description">
                        Introduce tus datos personales y tu imagen de perfil.
                    </p>
                </div>


                <div className="col-12 col-sm-6 col-xl-5 mb-3">
                    <label className="form-label mb-1">Nombre</label>
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
                    <label className="form-label mb-1">Apellidos</label>
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
                    <label className="form-label mb-1">Email</label>
                    <input
                        type="text"
                        className="form-control shadow-sm"
                        autoComplete="off"
                        maxLength={59}
                        onChange={(e) => setEmail(e.target.value)}
                        defaultValue={email}
                    />
                </div>

                <div className="col-12 col-sm-6 col-xl-5 mb-3">
                    <label className="form-label mb-1">Teléfono</label>
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
                        Seleccionar imagen
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
