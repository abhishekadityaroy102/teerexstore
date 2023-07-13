import React from "react";
import { Route, Routes } from "react-router-dom";
import Cartpage from "../pages/Cartpage";
import Homepage from "../pages/Homepage";
import PaymentForm from "../pages/Paymentpage";

const MainRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/cart" element={<Cartpage />}></Route>
      <Route path="/checkout" element={<PaymentForm />}></Route>
    </Routes>
  );
};

export default MainRouters;
