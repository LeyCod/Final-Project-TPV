import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// Components
// -- Landing Page
import { Header } from "../component/LandingPage/Header/Header.jsx";
import { Footer } from "../component/LandingPage/Footer/Footer.jsx";

const Layout = (props) => {
    const location = useLocation();
    const locationPath = location.pathname;

    return (
        locationPath === "/"
            ? <>
                <Header />
                {props.children}
                <Footer />
            </>
            : props.children
    );
};

Layout.propTypes = {
    children: PropTypes.any
}

export default Layout;
