import React from "react";
import { useState, useEffect } from "react";
import { renderCity, renderStates } from "./api.js";
import { useCartContext } from "../Context/CartContext.jsx";
import { Form } from "./Form.jsx";

export const FormCheckout = ({finishBuying}) => {
  const [typeSending, setTypeSending] = useState(false);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const sending = (event) => {
    event.target.value == "envio-domicilio"
      ? setTypeSending(true)
      : setTypeSending(false);
  };

  const changeState = (event) => {
    renderCity(event.target.value.toLowerCase(), setCity);
  };

  useEffect(() => {
    if (typeSending) {
      renderStates(setState);
      renderCity("misiones", setCity);
    }
  }, [typeSending]);

  return (
    <Form
      typeSending={typeSending}
      sending={sending}
      city={city}
      state={state}
      changeState={changeState}
      finishBuying={finishBuying}
    />
  );
};
