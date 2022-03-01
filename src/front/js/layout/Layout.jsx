import React from "react";
import PropTypes from "prop-types";

// Styles
import "../../assets/css/index.css";

// Components





const Layout = (props) => {
   
    return (
        <>
            <main>
                {props.children}
            </main>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.any
}

export default Layout;

