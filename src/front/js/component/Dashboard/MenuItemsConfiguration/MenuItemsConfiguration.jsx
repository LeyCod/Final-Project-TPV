import React, { useState } from "react";

// Styles
import "./menu-items-configuration.css";

// Components
import { MenuItems } from "../MenuItems/MenuItems.jsx";
import { MenuItemEditionModal } from "../Modal/MenuItemEditionModal/MenuItemEditionModal.jsx";

export const MenuItemsConfiguration = () => {
    const [editItem, setEditItem] = useState(false);

    return (
        <div className="dashboard-view-content p-3 p-lg-4">
            <div className="row" id="menu-items-configuration">
                <div className="col-12 d-none d-md-block">
                    <p className="view-description">
                        Desde aquí puedes gestionar todos los elementos de la carta.
                    </p>
                </div>

                <div className="col-12 cards-grid-system">
                    {editItem ? <MenuItemEditionModal show={true} new_item={true} setEditItem={setEditItem} /> : null}

                    <button
                        type="button"
                        className="menu-items-configuration-add btn flex-md-column shadow-sm"
                        onClick={() => setEditItem(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                        </svg>

                        <p className="m-0">
                            <strong>Crear</strong> elemento
                        </p>
                    </button>

                    <MenuItems edit_item_control={true} />
                </div>
            </div>
        </div>
    );
};
