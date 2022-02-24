import React from "react";
import PropTypes from "prop-types";

// Components
import { Header } from "../component/Header/Header.jsx";
import { Footer } from "../component/Footer/Footer.jsx";
import { Services } from "../component/Services/Services.jsx";
import { Features} from "../component/Features/Features.jsx";
import Navbar from "./Navbar/Navbar.jsx";

const Layout = (props) => {
    const feature1 = "titulo1";
    const feature2 = "titulo2";
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <main>
                {props.children}
            </main>
            <Services></Services>
            <Features id={1} title={"Feature1"} message={"Esto es feature 1"}></Features>
            <Features id={2} title={"Feature2"} message={"Esto es feature 2"}></Features>
            <Footer></Footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.any
}

export default Layout;
