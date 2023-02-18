import Checkout from "../pages/Checkout/index";
import Signup from "../pages/signup/index";
import Home from "../pages/home";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Test from "../pages/test";
import FormPayment from "../pages/Payment/FormPayment";
import Product from "../pages/product";
import Error from "../pages/Error";

/* components */

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/payment" element={<FormPayment />}></Route>
        <Route path="/:id" element={<Product />}></Route>
        <Route path="*" element={<Error/>}></Route>
        <Route path="/error" element={<Error/>}></Route>
      </Routes>
    </div>
  );
}
