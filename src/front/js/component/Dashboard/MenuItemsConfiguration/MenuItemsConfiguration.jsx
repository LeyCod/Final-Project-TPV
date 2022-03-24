import React, { useState } from "react";

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
                        onClick={() => setEditItem(true)}
                    >
                        Crear elemento
                    </button>
                    
                    <MenuItems edit_item_control={true} />
                </div>
            </div>
        </div>
    );
};
