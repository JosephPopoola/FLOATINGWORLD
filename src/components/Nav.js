import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { fadeIn } from "react-animations";
import { createAnimation } from "../helpers/createAnimation";

import Home from "../pages/Home";
import Joinus from "../pages/JoinUs";
import Shows from "../pages/Shows";

let fadeInAnim = createAnimation(fadeIn, "3s");

const NavBar = styled.div`
	position: absolute;
	display: flex;
	${fadeInAnim};
`;

export default function Nav() {
	return (
		<Router>
			<NavBar>
				<Link className="fw-title" to="/">
					FLOATING WORLD
				</Link>
				<nav>
					<ul className="nav">
						<li className="nav-list">
							<Link to="/shows">Shows</Link>
						</li>
						<li className="nav-list">
							<Link to="/joinus">Join Us</Link>
						</li>
					</ul>
				</nav>
			</NavBar>
			<Switch>
				<Route path="/shows">
					<Shows />
				</Route>
				<Route path="/joinus">
					<Joinus />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}
