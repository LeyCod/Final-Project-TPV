import React from "react";
import PropTypes from "prop-types";

// Components
import { Header } from "../component/Header/Header.jsx";
import { Footer } from "../component/Footer/Footer.jsx";

const Layout = (props) => {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.any
}

export default Layout;
