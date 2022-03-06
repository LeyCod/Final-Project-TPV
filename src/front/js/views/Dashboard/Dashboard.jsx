import React, { useState, useRef, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";

// Styles 
import "./dashboard.css";
import companyLogo from "../../../assets/img/LogoDesign.png";
import avatarImage from "../../../assets/img/AvatarTest.jpg";
import dashboardBG from "../../../assets/img/DashboardBG.jpg";

// Functions
import { apiUserValidation, apiUserLogout } from "../../service/user";

export const Dashboard = () => {
    /* Theme color selection */
    const dashBoardThemeColors = ["orange", "yellow", "red", "green"];
    const actualDashboardThemeColor = useRef(0);

    const getThemeColor = () => {
        const nextIndex = actualDashboardThemeColor.current + 1;
        actualDashboardThemeColor.current = !dashBoardThemeColors[nextIndex] ? 0 : nextIndex;

        return dashBoardThemeColors[actualDashboardThemeColor.current];
    }

    const [themeColor, setThemeColor] = useState(dashBoardThemeColors[actualDashboardThemeColor.current]);

    /* Sidebar control */
    const [activeSidebar, setActiveSidebar] = useState(true);

    /* User validation */
    const [validatedUser, setValidatedUser] = useState(false);

    /* useEffect(() => {
        async function userValidation() {
            try {
                const response = await apiUserValidation();
                const status = response.status;

                console.log("status", status);
                console.log("response", response);

                setValidatedUser(status === 200 ? true : false);
            }
            catch (err) {
                console.error(err);
                setValidatedUser(false);
            }
        }

        userValidation();
    }, []); */

    return (
            <div className="container-fluid">
                <div className={`row dashboard-theme-${themeColor}`} id="dashboard-wrapper">
                    <aside
                        className={`col-auto p-0 ${activeSidebar ? "" : "inactive"}`}
                        id="dashboard-sidebar"
                        style={{ backgroundImage: `url(${dashboardBG})` }}
                    >
                        <div className="mx-2 my-3">
                            <div>
                                <div className="company-logo">
                                    <div className="logo">
                                        <img className="img-fluid p-2" src={companyLogo} alt="companyLogo" />
                                    </div>
                                </div>
                                <ul className="navbar-nav mt-3">
                                    <li className="active">
                                        <a className="nav-link" href="#">
                                            <i className="fas fa-server"></i> General
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="#">
                                            <i className="fas fa-clipboard-list"></i>
                                            <div className="d-flex flex-nowrap align-items-center gap-2">
                                                Pedidos

                                                <div className="user-notifications-number d-flex justify-content-center align-items-center">6</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="#">
                                            <i className="fas fa-th-large"></i> Mesas
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="#">
                                            <i className="fas fa-map"></i> Carta
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div id="dashboard-company-name">
                                <hr />
                                <small>Company Name</small>
                            </div>
                        </div>
                    </aside>

                    <div className={`col-auto p-0 ${activeSidebar ? "" : "inactive"}`} id="dashboard-content">
                        <main className="flex-grow-1 d-flex flex-column flex-nowrap overflow-auto">
                            <div className="navbar navbar-expand-md navbar-light sticky-top px-2 py-3 shadow-sm" id="dashboard-content-header">
                                <div className="container-fluid px-2 px-md-4">
                                    <button
                                        type="button"
                                        className="btn d-md-none p-0 text-warning shadow-none"
                                        onClick={() => setActiveSidebar(!activeSidebar)}
                                    >
                                        {
                                            !activeSidebar
                                                ? <i className="fas fa-align-left fa-lg"></i>
                                                : <i className="fas fa-align-right fa-lg"></i>
                                        }

                                    </button>

                                    <h4>Dashboard</h4>

                                    <div
                                        className="navbar-toggler border-0 avatar-image"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav"
                                    >
                                        <img className="img-fluid" src={avatarImage} alt="avatarImg" />
                                    </div>

                                    <div className="collapse navbar-collapse gap-2" id="navbarNav">
                                        <ul className="navbar-nav justify-content-start align-items-start gap-md-3 ms-auto" id="dashboard-main-menu">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                    </svg>

                                                    <span className="d-md-none">Usuario</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                                    </svg>

                                                    <span className="d-md-none">Configuración</span>
                                                </a>
                                            </li>
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
                                                <img className="img-fluid" src={avatarImage} alt="avatarImg" />
                                            </li>
                                        </ul>

                                        <div className="d-flex flex-column mt-3 mt-md-0">
                                            <p className="dashboard-username m-0 text-dark fw-bold">Jose Clemente</p>
                                            <small className="dashboard-user-rol text-muted">Admin</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-2" id="dashboard-content-main">
                                <div className="p-2 rounded-3" id="dashboard-views-content">
                                    {/* VIEWS CONTENT */}
                                </div>
                            </div>
                        </main>

                        <footer className="py-1 px-3" id="dashboard-footer">
                            <div>2022. © By&nbsp;
                                <Link to="/" target="_blank">
                                    MasterGest
                                </Link>
                            </div>

                            <button
                                type="button"
                                className="dashboard-theme-switch"
                                onClick={() => setThemeColor(getThemeColor())}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-palette-fill" viewBox="0 0 16 16">
                                    <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                            </button>
                        </footer>

                        <div className="dashboard-new-order-button">
                            <button
                                title="Crear nuevo pedido"
                                type="button"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
};
