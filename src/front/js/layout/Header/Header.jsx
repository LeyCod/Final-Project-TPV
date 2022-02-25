import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/header.css"

  export const Header = () => {
	return (
		<nav className="navbar navbar-light bg-light">
		<div className="container-fluid">
			<span className="navbar-brand mb-0 h1">Logo/MasterGest</span>
		</div>
		<div className="nav-item1">
			<a className="nav-link active" aria-current="page" href="#">
				About us
			</a>
		</div>
		<div className="nav-item2">
			<a className="nav-link active" aria-current="page" href="#">
				Prices
			</a>
		</div>
		<div className="nav-item">
			<a className="nav-link active" aria-current="page" href="#">
				Contact
			</a>
		</div>
		<button type="button" className="btn1 btn-primary">
			Sign up
		</button>
		<button type="button" className="btn2 btn-primary">
			Log in
		</button>
	</nav>
	);
};

