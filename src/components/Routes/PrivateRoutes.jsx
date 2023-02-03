import React from "react";
import { Routes, Route } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { Checkout } from "../Checkout/Checkout";
import { Resume } from "../Orders/Resume";

export const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Resume />} />
      </Routes>
    </>
  );
};
