import React from "react";
import PropTypes from "prop-types";

// Styles
import "./menu-item-card.css";

export const MenuItemCard = (props) => {
    return (
        <div className="menu-item-card">
            {/* <div>
                <div>
                    <img className="img-fluid" src={props.image_url} alt="ALT" />
                </div>
                <div>
                    <p>{props.title}</p>
                    <p>{props.description}</p>
                </div>
            </div>

            <div>
                <div>{props.price} €</div>

                <div>
                    +
                </div>
            </div> */}
        </div>
    );
};

MenuItemCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    image_url: PropTypes.string
};
