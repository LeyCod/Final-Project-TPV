import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import PropTypes from "prop-types";

// Styles
import "./menu-item-card.css";

// Component
import { NewOrderItemControl } from "../NewOrderItemControl/NewOrderItemControl.jsx";
import { MenuEditItemControl } from "../MenuEditItemControl/MenuEditItemControl.jsx";

export const MenuItemCard = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="menu-item-card">
            <div>
                <img className="img-fluid" src={store.menuItems[props.item_index].image_url} alt={store.menuItems[props.item_index].name} />
            </div>

            <div>
                <div>
                    <p className="mb-0 fw-bold menu-item-card-title">{store.menuItems[props.item_index].name}</p>
                    <p className="mb-0 menu-item-card-description">{store.menuItems[props.item_index].description}</p>
                </div>

                <div>
                    <p>{store.menuItems[props.item_index].price}€</p>

                    {
                        props.order_item_control
                            ? <NewOrderItemControl item_index={props.item_index} />
                            : props.item_edit_control
                                ? <MenuEditItemControl item_index={props.item_index} />
                                : null
                    }
                </div>
            </div>
        </div>
    );
};

MenuItemCard.propTypes = {
    item_index: PropTypes.string,
    order_item_control: PropTypes.bool,
    item_edit_control: PropTypes.bool
};
