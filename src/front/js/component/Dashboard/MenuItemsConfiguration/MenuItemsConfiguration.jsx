import React from "react";

// Components
import { MenuItems } from "../MenuItems/MenuItems.jsx";

export const MenuItemsConfiguration = () => {
    return (
        <div className="dashboard-view-content p-2 p-md-3 p-lg-4">
            <div className="row justify-content-start gap-1" id="menu-items-configuration">
                <div className="col-12 col-lg-7 cards-grid-system">
                    <MenuItems edit_item_control={true} />
                </div>
            </div>
        </div>
    );
};
