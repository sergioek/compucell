import React, { useEffect, useState } from "react";
import { FormCheckout } from "./FormCheckout";
import { useCartContext } from "../Context/CartContext";
import { useLoginContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { databaseFirestore } from "../../firebase/config.js";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Checkout = () => {
  const { cart, priceTotalCart, emptyCart} = useCartContext();
  const navigate = useNavigate();
  const { user } = useLoginContext();
  
  useEffect(() => {
    cart.length <= 0 && navigate("/cart");
    !user.stateLogged && navigate("/login");
  }, [user]);

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


  const finishBuying = (user) => {
    let total;
    user.sending == "envio-domicilio" ?  total=priceTotalCart()+2000 : total=priceTotalCart()
    let dateTime = new Date();
    let order = {
      user: user,
      userEmailOrder:user.email,
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
