import React from "react";

// Styles
import "./menu-items-configuration.css";

// Components
import { MenuItems } from "../MenuItems/MenuItems.jsx";

export const MenuItemsConfiguration = () => {
    return (
        <div className="dashboard-view-content p-3 p-lg-4">
            <div className="row" id="menu-items-configuration">
                <div className="col-12 d-none d-md-block">
                    <p className="view-description">
                        Desde aquí puedes gestionar todos los elementos de la carta.
                    </p>
                </div>

                <MenuItems edit_item_control={true} />
            </div>
        </div>
    );
};
