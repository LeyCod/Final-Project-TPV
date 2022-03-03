import React, { useState } from "react";

// Styles 
import "./dashboard.css";
import companyLogo from "../../../assets/img/BeerLogo.png";
import dashboardBG from "../../../assets/img/DashboardBG.jpg";

export const Dashboard = () => {
    const [activeSidebar, setActiveSidebar] = useState(true);

    return (
        <div className="container-fluid">
            <div className="row" id="wrapper">
                <aside 
                    className={`col-2 p-0 text-white ${activeSidebar ? "" : "inactive"}`} 
                    id="sidebar"
                    style={{ backgroundImage: `url(${dashboardBG})` }}
                >
                    <div className="company-logo text-center">
                        <img className="img-fluid pt-2 pb-3" src={companyLogo} alt="CompanyLogo" />
                    </div>

                    <ul className="navbar-nav p-2 pt-0">
                        <li className="active">
                            <a href="#">
                                <i className="fas fa-server"></i> General
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-clipboard-list"></i> Pedidos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-map"></i> Mesas
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-th-large"></i> Carta
                            </a>
                        </li>
                        <hr />
                        <li>
                            <a href="#">
                                <i className="fas fa-cog"></i> Admin
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-user"></i> Cuenta
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-sign-out-alt"></i> Salir
                            </a>
                        </li>
                    </ul>

                    <div className="d-grid">
                        <button
                            type="button"
                            className="btn btn-success rounded-0 shadow-sm"
                            onClick={() => setActiveSidebar(!activeSidebar)}
                        >
                            {
                                !activeSidebar
                                    ? <i className="fas fa-angle-double-right fa-lg"></i>
                                    : <i className="fas fa-angle-double-left fa-lg"></i>
                            }

                        </button>
                    </div>
                </aside>

                <div className={`col-10 p-2 px-md-3 bg-light ${activeSidebar ? "" : "inactive"}`} id="content">
                    <header className="navbar navbar-expand-lg navbar-light mb-4 py-2 rounded-3 bg-warning bg-opacity-50 shadow-sm">
                        <div className="container-fluid">
                            <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </header>

                    <main>
                        <h2>Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <hr />
                    </main>
                </div>
            </div>
        </div>
    );
};