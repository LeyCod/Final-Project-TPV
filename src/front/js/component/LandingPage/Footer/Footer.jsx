import React from "react";
import { Link } from "react-router-dom";

// Syles
import "./footer.css";

export const Footer = () => (
	<footer className="py-1 px-3" id="landing-page-footer">
		<div>2022© By&nbsp;
			<Link to="/" target="_blank">
				MasterGest
			</Link>
			&nbsp;| 4Geeks Academy
		</div>
	</footer>
);
