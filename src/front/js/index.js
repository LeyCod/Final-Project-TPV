// Import React into the bundle
import React from "react";
import ReactDOM from "react-dom";

// Styles
import "../assets/css/index.css";

// Components
import AppRouter from "./AppRouter.jsx";
import QRCode from "react-qr-code";

// Render React application
ReactDOM.render(<AppRouter />, document.querySelector("#app"));
