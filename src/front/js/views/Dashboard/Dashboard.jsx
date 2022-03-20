import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

// Styles 
import "./dashboard.css";
import defaultCompanyLogo from "../../../assets/img/DefaultLogo.png";
import defaultAvatarImage from "../../../assets/img/DefaultAvatar.png";
import dashboardBG from "../../../assets/img/DashboardBG.jpg";

// Functions
import { apiUserValidation, apiUserLogout } from "../../service/user";
import { apiCompanyGetData } from "../../service/company";

// Components
import { Spinner } from "../../component/Spinner/Spinner.jsx";
import { ExpiredSessionModal } from "../../component/Modal/ExpiredSessionModal.jsx";

import { ViewTitle } from "../../component/Dashboard/ViewTitle/ViewTitle.jsx";
import { General } from "../../component/Dashboard/General/General.jsx";
import { Orders } from "../../component/Dashboard/Orders/Orders.jsx";
import { NewOrder } from "../../component/Dashboard/NewOrder/NewOrder.jsx";
import { NewOrderButton } from "../../component/Dashboard/NewOrderButton/NewOrderButton.jsx";
import { Tables } from "../../component/Dashboard/Tables/Tables.jsx";
import { Items } from "../../component/Dashboard/Items/Items.jsx";
import { UserConfiguration } from "../../component/Dashboard/UserConfiguration/UserConfiguration.jsx";
import { AdminConfiguration } from "../../component/Dashboard/AdminConfiguration/AdminConfiguration.jsx";

export const Dashboard = () => {
    const { store, actions } = useContext(Context);

    const [loading, setLoading] = useState(true); // Loading spinner control
    const [responsiveTopMenu, setResponsiveTopMenu] = useState(false);

    /* Sidebar control */
    const [activeSidebar, setActiveSidebar] = useState(true);

    /* User validation */
    const [validatedUser, setValidatedUser] = useState(null);

    useEffect(() => {
        async function userValidation() {
            try {
                const response = await apiUserValidation();
                const data = await response.json();
                const status = response.status;

                if (status === 200) {
                    actions.setLoggedUserData(data); // Save user data in the store
                    getUserCompanyData();
                }
                else {
                    setValidatedUser(false);
                }
            }
            catch (err) {
                console.error(err);
                setValidatedUser(false);
            }
        }

        userValidation();
    }, []);

    /* Get user company data */
    const getUserCompanyData = async () => {
        try {
            const response = await apiCompanyGetData();
            const data = await response.json();
            const status = response.status;

            if (status === 200) {
                actions.setLoggedUserCompanyData(data); // Save company data in the store
                setValidatedUser(true);
            }
            else {
                setValidatedUser(false);
            }
        }
        catch (err) {
            console.error(err);
            setValidatedUser(false);
        }
        finally {
            setLoading(false);
        }
    }

    /* Dashboard contents definition and control */
    const [actualDashboardView, setActualDashboardView] = useState("new_order");

    const handleChangeView = (viewName) => { /* This handle helps to hide the responsive user top menu when a new view is clicked */
        setActualDashboardView(viewName);
        setActiveSidebar(viewName === "new_order" ? false : activeSidebar);
        setResponsiveTopMenu(false);
    }

    const dashboardViews = {
        "general": { "title": "General", "component": <General handleChangeView={handleChangeView} /> },
        "orders": { "title": "Pedidos", "component": <Orders /> },
        "new_order": { "title": "Nuevo pedido", "component": <NewOrder /> },
        "tables": { "title": "Mesas", "component": <Tables /> },
        "items": { "title": "Carta", "component": <Items /> },
        "user_configuration": { "title": "Configuración de usuario", "component": <UserConfiguration /> },
        "admin_configuration": { "title": "Configuración de administrador", "component": <AdminConfiguration /> }
    }

    return validatedUser === null
        ? <Spinner />
        : !validatedUser
            ? <ExpiredSessionModal show={true} />
            : (
                <div className="container-fluid">

                    {loading ? <Spinner /> : null}

                    <div className={`row dashboard-theme-${store.dashBoardThemeColors[localStorage.getItem("dashboard-theme-color") !== null ? localStorage.getItem("dashboard-theme-color") : store.selectedDashboardThemeColor]}`} id="dashboard-wrapper">
                        <aside
                            className={`col-auto p-0 ${activeSidebar ? "" : "inactive"} scrollbar-custom`}
                            id="dashboard-sidebar"
                            style={{ backgroundImage: `url(${dashboardBG})` }}
                        >
                            <div className="mx-2 my-3">
                                <div>
                                    <div className="company-logo">
                                        <div className="logo">
                                            <img className="img-fluid p-2" src={!store.loggedUserCompanyData.logo_url ? defaultCompanyLogo : store.loggedUserCompanyData.logo_url} alt="companyLogo" />
                                        </div>
                                    </div>
                                    <ul className="navbar-nav mt-3">
                                        <li className={`${actualDashboardView === "general" ? "active" : ""}`}>
                                            <a
                                                className="nav-link"
                                                href="#"
                                                onClick={() => handleChangeView("general")}
                                            >
                                                <i className="fas fa-server"></i> General
                                            </a>
                                        </li>
                                        <li className={`${actualDashboardView === "orders" ? "active" : ""}`}>
                                            <a
                                                className="nav-link"
                                                href="#"
                                                onClick={() => handleChangeView("orders")}
                                            >
                                                <i className="fas fa-clipboard-list"></i>
                                                <div className="d-flex flex-nowrap align-items-center gap-2">
                                                    Pedidos

                                                    {/* <div className="user-notifications-number d-flex justify-content-center align-items-center">6</div> */}
                                                </div>
                                            </a>
                                        </li>
                                        <li className={`${actualDashboardView === "tables" ? "active" : ""}`}>
                                            <a
                                                className="nav-link"
                                                href="#"
                                                onClick={() => handleChangeView("tables")}
                                            >
                                                <i className="fas fa-th-large"></i> Mesas
                                            </a>
                                        </li>
                                        <li className={`${actualDashboardView === "items" ? "active" : ""}`}>
                                            <a
                                                className="nav-link"
                                                href="#"
                                                onClick={() => handleChangeView("items")}
                                            >
                                                <i className="fas fa-map"></i> Carta
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div id="dashboard-company-name">
                                    <hr />
                                    <small className="text-muted">
                                        - {
                                            store.loggedUserCompanyData.name
                                        } -
                                    </small>
                                </div>
                            </div>
                        </aside>

                        <div className={`col-auto p-0 ${activeSidebar ? "" : "inactive"}`} id="dashboard-content">
                            <main className="flex-grow-1 d-flex flex-column flex-nowrap align-items-end overflow-auto scrollbar-custom-lg" id="dashboard-content-wrapper">
                                <div className="navbar navbar-expand-md navbar-light sticky-top px-2 py-2 py-md-3 bg-white shadow-sm" id="dashboard-content-header">
                                    <div className="container-fluid px-2 px-md-4">
                                        <button
                                            type="button"
                                            className="btn d-md-none p-0 shadow-none"
                                            onClick={() => setActiveSidebar(!activeSidebar)}
                                        >
                                            {
                                                !activeSidebar
                                                    ? <i className="fas fa-align-left fa-lg"></i>
                                                    : <i className="fas fa-align-right fa-lg"></i>
                                            }

                                        </button>

                                        <h4
                                            id="dashboard-title"
                                            onClick={() => handleChangeView("general")}
                                            role="button"
                                        >
                                            Dashboard
                                        </h4>

                                        <div
                                            className="navbar-toggler border-0 p-0 avatar-image"
                                            onClick={() => setResponsiveTopMenu(!responsiveTopMenu)}
                                        >
                                            <img className="img-fluid" src={!store.loggedUserData.image_url ? defaultAvatarImage : store.loggedUserData.image_url} alt="avatarImg" />
                                        </div>

                                        <div className={`collapse navbar-collapse gap-2 ${responsiveTopMenu ? "d-block" : ""}`} id="userNavBar">
                                            <ul
                                                className="navbar-nav justify-content-start align-items-start gap-md-3 ms-auto"
                                                id="dashboard-main-menu"
                                            >
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        href="#"
                                                        onClick={() => { setResponsiveTopMenu(!responsiveTopMenu); handleChangeView("user_configuration") }}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                        </svg>

                                                        <span className="d-md-none">Usuario</span>
                                                    </a>
                                                </li>
                                                {
                                                    store.loggedUserData.is_admin ?
                                                        <li className="nav-item">
                                                            <a
                                                                className="nav-link"
                                                                href="#"
                                                                onClick={() => { setResponsiveTopMenu(!responsiveTopMenu); handleChangeView("admin_configuration") }}
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                                                </svg>

                                                                <span className="d-md-none">Configuración</span>
                                                            </a>
                                                        </li>
                                                        : null
                                                }
                                                <li className="nav-item">
                                                    <Link
                                                        to="/"
                                                        title="Cerrar sesión"
                                                        className="nav-link"
                                                        onClick={apiUserLogout}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                                            <path d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                                            <path d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                                        </svg>

                                                        <span className="d-md-none">Salir</span>
                                                    </Link>
                                                </li>
                                                <li className="avatar-image d-none d-md-block">
                                                    <img className="img-fluid" src={!store.loggedUserData.image_url ? defaultAvatarImage : store.loggedUserData.image_url} alt="avatarImg" />
                                                </li>
                                            </ul>

                                            <div className="d-flex flex-column mt-3 mt-md-0">
                                                <p className="dashboard-username m-0 text-dark fw-bold">
                                                    {store.loggedUserData.first_name}
                                                </p>
                                                <small className="dashboard-user-rol text-muted">
                                                    {
                                                        store.loggedUserData.is_admin
                                                            ? "Admin"
                                                            : "Empleado"
                                                    }
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="dashboard-content-main">
                                    <div id="dashboard-views-content">
                                        <ViewTitle title={dashboardViews[actualDashboardView].title} />
                                        {dashboardViews[actualDashboardView].component}

                                        <footer className="py-1 px-3" id="dashboard-footer">
                                            <div>2022. © By&nbsp;
                                                <Link to="/" target="_blank">
                                                    MasterGest
                                                </Link>
                                            </div>

                                            <button
                                                type="button"
                                                className="dashboard-theme-switch"
                                                onClick={actions.changeDashboardThemeColor}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-palette-fill" viewBox="0 0 16 16">
                                                    <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                </svg>
                                            </button>
                                        </footer>
                                    </div>
                                </div>
                            </main>

                            <NewOrderButton handleChangeView={handleChangeView} />
                        </div>
                    </div>
                </div>
            );
};
