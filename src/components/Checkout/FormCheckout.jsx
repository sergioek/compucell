import React from "react";
import { useState, useEffect } from "react";
import { renderCity, renderStates } from "./api.js";
import { useCartContext } from "../Context/CartContext.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import { databaseFirestore } from "../../firebase/config.js";
import { Form } from "./Form.jsx";

export const FormCheckout = () => {
  const [typeSending, setTypeSending] = useState(false);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const { cart, addToCart } = useCartContext();

  const sending = (event) => {
    event.target.value == "homeSending"
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

  //Consumiendo api de provincias argentinas
  return (
    <Form
      typeSending={typeSending}
      sending={sending}
      city={city}
      state={state}
      changeState={changeState}
    />
  );
};
