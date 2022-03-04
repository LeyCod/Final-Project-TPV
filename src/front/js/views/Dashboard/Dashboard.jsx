import React, { useState } from "react";

// Styles 
import "./dashboard.css";
import companyLogo from "../../../assets/img/BeerLogo.png";
import avatarImage from "../../../assets/img/AvatarTest.jpg";
import dashboardBG from "../../../assets/img/DashboardBG_size.jpg";

// Components
import { DashboardCard } from "../../component/DashboardCard/DashboardCard.jsx";

export const Dashboard = () => {
    const [activeSidebar, setActiveSidebar] = useState(true);

    return (
        <div className="container-fluid">
            <div className="row" id="dashboard-wrapper">
                <aside
                    className={`col-auto p-0 ${activeSidebar ? "" : "inactive"}`}
                    id="dashboard-sidebar"
                    style={{ backgroundImage: `url(${dashboardBG})` }}
                >
                    <div className="mx-2 my-3">
                        <div>
                            <div className="company-logo">
                                <div className="logo">
                                    <img className="img-fluid p-0" src={companyLogo} alt="companyLogo" />
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
                                        <i className="fas fa-clipboard-list"></i> Pedidos
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
                    <main>
                        <div className="navbar navbar-expand-md navbar-light mb-3 p-2 shadow-sm" id="dashboard-content-header">
                            <div className="container-fluid p-1 pe-md-4">
                                <button
                                    type="button"
                                    className="btn d-md-none text-warning shadow-none"
                                    onClick={() => setActiveSidebar(!activeSidebar)}
                                >
                                    {
                                        !activeSidebar
                                            ? <i className="fas fa-align-left fa-lg"></i>
                                            : <i className="fas fa-align-right fa-lg"></i>
                                    }

                                </button>

                                <div
                                    className="navbar-toggler border-0 avatar-image"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav"
                                >
                                    <img className="img-fluid" src={avatarImage} alt="avatarImg" />
                                </div>

                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav align-items-center gap-3 ms-auto" id="dashboard-main-menu">
                                        <li className="nav-item">
                                            <a className="nav-link text-dark" href="#">
                                                <i className="fas fa-cog"></i> Admin
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-dark" href="#">
                                                <i className="fas fa-user"></i> Cuenta
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-dark" href="#">
                                                <i className="fas fa-sign-out-alt"></i> Salir
                                            </a>
                                        </li>
                                        <li
                                            className="avatar-image"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#navbarNav"
                                        >
                                            <img className="img-fluid" src={avatarImage} alt="avatarImg" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="px-4">
                            <h4>Bienvenid@, Jose</h4>

                            <div className="dashboard-card-container">
                                {/* <DashboardCard quantity="14" title="PEDIDOS ACTIVOS" icon="hourglass-half" />
                                <DashboardCard quantity="5" title="MESAS LIBRES" icon="grip-horizontal" />
                                <DashboardCard quantity="5" title="MESAS LIBRES" icon="grip-horizontal" /> */}
                            </div>
                        </div>
                    </main>

                    <footer className="py-1 px-3" id="dashboard-footer">
                        2022 © Designed by <a href="https://github.com/adrianchange" target="_blank">Adrián</a>, <a href="https://github.com/LeyCod" target="_blank">Leyan</a> & <a href="https://github.com/m4n50n" target="_blank">Jose</a> | 4Geeks Academy
                    </footer>
                </div>
            </div>
        </div>
    );
};
