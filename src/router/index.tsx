import Signup from "../pages/signup/index";
import Home from "../pages/home";
import { Route, Routes } from "react-router-dom";
import Login from '../pages/login'

/* components */

export default function Router() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login/>}></Route>
			</Routes>
		</div>
	);
}
