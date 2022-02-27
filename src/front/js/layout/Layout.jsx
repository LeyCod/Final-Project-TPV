import React from "react";
import PropTypes from "prop-types";

// Components
import { Header } from "./Header/Header.jsx";
import { Footer } from "./Footer/Footer.jsx";




const Layout = (props) => {
   
    return (
        <>
            <Header></Header>
            <main>
                {props.children}
            </main>
            <Footer></Footer>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.any
}

export default Layout;
