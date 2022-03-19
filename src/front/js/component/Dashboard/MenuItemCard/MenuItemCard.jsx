import React from "react";
import PropTypes from "prop-types";

// Styles
import "./menu-item-card.css";

export const MenuItemCard = (props) => {
    return (
        <div className="menu-item-card">
            <div>
                <img className="img-fluid" src={props.image_url} alt={props.title} />
            </div>

            <div>
                <div>
                    <p className="fw-bold mb-0">{props.title}</p>
                    <p className="mb-0">{props.description}</p>
                </div>

                <div>
                    <p>{props.price} €</p>

                    <div>
                        <button type="button" className="btn btn-sm xs-button outline-theme-color-button">
                            <i className="fas fa-minus align-middle"></i>
                        </button>

                        <span>2</span>

                        <button type="button" className="btn btn-sm xs-button theme-color-button">
                            <i className="fas fa-plus align-middle"></i>                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

MenuItemCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    image_url: PropTypes.string
};
