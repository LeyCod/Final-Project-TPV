// Import React into the bundle
import React from "react";
import ReactDOM from "react-dom";

// Styles
import "../assets/css/index.css";

// Components
import AppRouter from "./AppRouter.jsx";

// Render React application
ReactDOM.render(<AppRouter />, document.querySelector("#app"));
