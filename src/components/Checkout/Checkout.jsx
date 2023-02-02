import React, { useEffect, useState } from "react";
import { FormCheckout } from "./FormCheckout";
import { useCartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { databaseFirestore } from "../../firebase/config.js";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { date } from "yup/lib/locale";

export const Checkout = () => {
  const { cart, priceTotalCart, emptyCart} = useCartContext();
  const navigate = useNavigate();
  
  useEffect(() => {
    cart.length <= 0 && navigate("/cart");
    localStorage.getItem('orders') == null &&
    localStorage.setItem("orders", JSON.stringify([]));
  }, []);

  const MySwal = withReactContent(Swal);
  const alert = (response) => {
    MySwal.fire({
      title: <strong>Compra finalizada!</strong>,
      html: (
        <i>
          El código de orden es: <strong>{response.id}</strong>. Pronto recibirá en su correo electrónico los detalles de la compra y su factura. ¡Muchas Gracias!.
        </i>
      ),
      icon: "success",
    });
  };

  const saveOrder = (newOrder) => {
    const arrayOrders = JSON.parse(localStorage.getItem('orders'))
    arrayOrders.push(newOrder)
    localStorage.setItem('orders',JSON.stringify(arrayOrders))

  }

  
  const finishBuying = (user) => {
    let total;
    user.sending == "envio-domicilio" ?  total=priceTotalCart()+2000 : total=priceTotalCart()
    
    let dateTime = new Date();
    let order = {
      user: user,
      products: cart,
      total: total,
      date: dateTime.toLocaleDateString(),
      time: dateTime.toLocaleTimeString(),
    };

    const ref = collection(databaseFirestore, "orders");
    addDoc(ref, order)
      .then((response) => {
       emptyCart();
        alert(response);
        saveOrder({...order,id:response.id });
        navigate('/orders')
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

      <FormCheckout finishBuying={finishBuying} />
    </div>
  );
};
