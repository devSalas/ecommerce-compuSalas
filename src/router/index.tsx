import Checkout from "../pages/Checkout/index";
import Signin from "../pages/signin/index";
import Home from "../pages/home";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import FormPayment from "../pages/Payment/FormPayment";
import Product from "../pages/product";
import Error from "../pages/Error";
import Products from "../pages/Products";

/* components */

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/payment" element={<FormPayment />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </>
  );
}
