import React, { useState, useEffect } from "react";
import { FormCheckout } from "./FormCheckout";
import { useCartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  
  const { cart } = useCartContext();
  const navigate = useNavigate();



  useEffect(() => {
    cart.length <=0 && navigate('/cart')
  }, [])
  
  return (
    <div className="checkout">
      <div className="title">
        <h2 className="text-primary">Ingresá tus datos</h2>
        <p>
          Se enviará a tu correo electrónico el link de pago y las indicaciones
          para recibir tu compra.
        </p>
        <hr />
      </div>

      <FormCheckout />
    </div>
  );
};
