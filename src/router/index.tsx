import Signup from "../pages/signup/index";
import Home from "../pages/home";
import React from "react";
import { Route, Routes } from "react-router-dom";

/* components */

export default function Router() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/signup" element={<Signup />}></Route>
			</Routes>
		</div>
	);
}
