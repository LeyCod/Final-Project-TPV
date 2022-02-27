import React from "react";
import "../Menu/menu.css";

export const Menu = () => {
  return (
    <div id="menu" className="container-fluid">
      <nav id="menu-img" className="navbar navbar-expand-lg navbar-light bg-light back-img text-center">
        <a className="navbar-brand" href="#"></a>
       
        <div className="collapse navbar-collapse " id="navbarSupportedContent2">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li id="menu1" className="nav-item">
              <a  className="nav-link active" aria-current="page" href="#">
                Tab
              </a>
            </li>
            <li id="menu2" className="nav-item">
              <a className="nav-link active" href="#">
                Tab
              </a>
            </li>

            <li id="menu3" className="nav-item">
              <a className="nav-link active">Tab</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
