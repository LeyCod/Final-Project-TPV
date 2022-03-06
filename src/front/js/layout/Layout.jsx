import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// Components
// -- Landing Page
import { Header } from "../component/LandingPage/Header/Header.jsx";
import { Footer } from "../component/LandingPage/Footer/Footer.jsx";

// -- Dashboard

const Layout = (props) => {
    const location = useLocation();
    const locationPath = location.pathname;

    return (
        locationPath === "/dashboard"
            ? props.children
            : locationPath === "/login" || locationPath === "/register-company" || locationPath === "/register-user"
             ? props.children
             : <>
                <Header />
                {props.children}
                <Footer />
            </>
    );
};

Layout.propTypes = {
    children: PropTypes.any
}

export default Layout;
