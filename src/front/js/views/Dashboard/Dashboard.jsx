import React, { useState } from "react";

// Styles 
import "./dashboard.css";
import companyLogo from "../../../assets/img/BeerLogo.png";
import dashboardBG from "../../../assets/img/DashboardBG.jpg";

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

                        <hr />

                        <div id="dashboard-company-name">
                            <small>Company Name</small>
                        </div>
                    </div>
                </aside>

                <div className={`col-auto p-2 px-md-3 ${activeSidebar ? "" : "inactive"}`} id="dashboard-content">
                    <header className="navbar navbar-expand-lg navbar-light mb-4 py-1 rounded-3 shadow-sm">
                        <div className="container-fluid px-2">
                            <button
                                type="button"
                                className="btn shadow-none"
                                onClick={() => setActiveSidebar(!activeSidebar)}
                            >
                                {
                                    !activeSidebar
                                        ? <i className="fas fa-align-left fa-lg"></i>
                                        : <i className="fas fa-align-right fa-lg"></i>
                                }

                            </button>

                            <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                                <span className="navbar-toggler-icon btn-sm"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
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
                                        <a className="nav-link text-dark">
                                            <i className="fas fa-sign-out-alt"></i> Salir
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </header>

                    <main>
                        {/* <h3>Bienvenid@, Jose</h3> */}

                        {/* <div className="dashboard-card-container">
                            <DashboardCard quantity="14" title="PEDIDOS ACTIVOS" icon="hourglass-half" />
                            <DashboardCard quantity="5" title="MESAS LIBRES" icon="grip-horizontal" />
                        </div> */}
                    </main>
                </div>
            </div>
        </div>
    );
};