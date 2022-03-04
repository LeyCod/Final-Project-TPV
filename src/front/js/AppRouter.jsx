import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";
import injectContext from "./store/appContext";

// Views
import { Home } from "./views/Home.jsx";
import { Register } from "./views/register/Register.jsx"
import UserRegister from "./views/UserRegister/userRegister.jsx"
// Layout
import Layout from "./layout/Layout.jsx";

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
								<Home />
							</Route>
							<Route exact path="/company/register">
								<Register />
							</Route>
							<Route exact path="/user/register">
								<UserRegister />
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
