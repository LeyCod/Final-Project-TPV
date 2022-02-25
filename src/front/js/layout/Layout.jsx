import React from "react";
import PropTypes from "prop-types";

// Components
import { Header } from "./Header/Header.jsx";
import { Footer } from "./Footer/Footer.jsx";
import { Services } from "./Services/Services.jsx";
import { Features} from "./Features/Features.jsx";
import {Menu} from "./Menu/Menu.jsx";


const Layout = (props) => {
    const feature1 = "titulo1";
    const feature2 = "titulo2";
    return (
        <>
            <Header></Header>
            <main>
                {props.children}
            </main>
            <Menu></Menu>
            <Services></Services>
            <Features id={1} title={"Feature1"} message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis pretium ipsum ac molestie. Aliquam dapibus feugiat faucibus. Vestibulum accumsan."}></Features>
            <Features id={2} title={"Feature2"} message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis pretium ipsum ac molestie. Aliquam dapibus feugiat faucibus. Vestibulum accumsan."}></Features>
            <Footer></Footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.any
}

export default Layout;
