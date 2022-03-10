import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";
import injectContext from "./store/appContext";

// Layout
import Layout from "./layout/Layout.jsx";

// Views
import { LandingPage } from "./views/LandingPage/LandingPage.jsx";
import { Login } from "./views/Login/Login.jsx";
import { RegisterCompany } from "./views/RegisterCompany/RegisterCompany.jsx";
import { RegisterUser } from "./views/RegisterUser/RegisterUser.jsx";
import { Dashboard } from "./views/Dashboard/Dashboard.jsx";

const AppRouter = () => {
	// The basename is used when your project is published in a subdirectory and not in the root of the domain
	// The basename can be set on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Layout>
						<Switch>
							<Route exact path="/">
								<LandingPage />
							</Route>
							<Route exact path="/login">
								<Login />
							</Route>
							<Route exact path="/register-company">
								<RegisterCompany />
							</Route>
							<Route exact path="/register-user">
								<RegisterUser />
							</Route>
							<Route exact path="/dashboard">
								<Dashboard />
							</Route>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
					</Layout>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(AppRouter);
