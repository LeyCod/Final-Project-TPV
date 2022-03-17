import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { Link } from "react-router-dom";

// Styles
import "./new-order.css";

export const NewOrder = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="dashboard-view-content">
            <div className="row justify-content-start gap-3">
                <div className="coo-12 col-lg-7 grid-container">
                    <div className="menu-item-card">
                        <div>
                            <div>
                                <img className="img-fluid" src="https://placeimg.com/300/300/nature" alt="ALT" />
                            </div>
                            <div>
                                <p>Grid Item 1</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, velit.</p>
                            </div>
                        </div>

                        <div>
                            <div>9,90 €</div>

                            <div>
                                +
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-xl-3 col-xxl-2 d-none d-lg-block bg-danger">
                    asdfasdf
                    asdfasdfasdf
                    asdf
                    asdf
                    asd
                    f
                </div>
            </div>
        </div>
    );
};
