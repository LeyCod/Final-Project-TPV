import React from "react";
import PropTypes from "prop-types";

// Components
// -- Landing Page
import { Header } from "../component/LandingPage/Header/Header.jsx";
import { Footer } from "../component/LandingPage/Footer/Footer.jsx";

const Layout = (props) => {
    console.log("propslayaout", props);
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.any
}

export default Layout;
