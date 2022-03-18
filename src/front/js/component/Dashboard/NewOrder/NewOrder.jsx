import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { Link } from "react-router-dom";

// Styles
import "./new-order.css";

// Components
import { MenuItemCard } from "../MenuItemCard/MenuItemCard.jsx";
import { NewOrderSummary } from "../NewOrderSummary/NewOrderSummary.jsx";

export const NewOrder = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="dashboard-view-content">
            <div className="row justify-content-start gap-3">
                <div className="col-12 col-lg-7 grid-container">
                    <MenuItemCard title="Plato 1" description="Descripción plato 1" price="20.8" image_url="https://placeimg.com/300/300/nature" />
                    <MenuItemCard title="Plato 2" description="Descripción plato 2" price="1.8" image_url="https://placeimg.com/300/300/nature" />
                    <MenuItemCard title="Plato 3" description="Descripción plato 3" price="90" image_url="https://placeimg.com/300/300/nature" />
                    <MenuItemCard title="Plato 4" description="Descripción plato 4" price="16.95" image_url="https://placeimg.com/300/300/nature" />
                    <MenuItemCard title="Plato 5" description="Descripción plato 5" price="8" image_url="https://placeimg.com/300/300/nature" />
                </div>

                <div className="col-lg-4 col-xl-3 col-xxl-4 d-none d-lg-block">
                    <NewOrderSummary />
                </div>
            </div>
        </div>
    );
};
