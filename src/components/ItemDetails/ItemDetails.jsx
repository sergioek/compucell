import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { BtnAddCart } from "../BtnAddCart/BtnAddCart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import { useLoginContext } from "../Context/LoginContext";
import { BtnShowCart } from "../BtnShowCart/BtnShowCart";
import { toast } from "react-toastify";
import { BtnLogin } from "../BtnLogin/BtnLogin";

export const ItemDetails = ({
  id,
  code,
  category,
  name,
  description,
  price,
  stock,
  image,
  mark,
  model,
}) => {
  const [count, setCount] = useState(1);
  const navigateReturn = useNavigate();
  const { addToCart, productExist } = useCartContext();
  const { user } = useLoginContext();
  const returnPage = () => {
    navigateReturn(`/products`);
  };

  const add = () => {
    let product = {
      id,
      category,
      name,
      description,
      price,
      stock,
      image,
      mark,
      model,
      count,
    };
    addToCart(product);
    toast("Producto agregado al carrito.");
  };

  return (
    <section className="itemDetails">
      <article className="itemDetails__image">
        <img srcSet={image} alt={name} />
      </article>

      <article className="itemDetails__details">
        <div className="text">
          <h2>{name + " " + mark + " " + model}</h2>
          <p>{description}</p>
          <strong>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </strong>
        </div>

        <div className="options">
          <div className="addToCart">
            {!productExist(id) && (
              <ItemCount stock={stock} count={count} setCount={setCount} />
            )}

            {user.stateLogged == true ? (
              stock > 0 && !productExist(id) ? (
                <BtnAddCart add={add} />
              ) : (
                <BtnShowCart />
              )
            ) : (
              <BtnLogin />
            )}
          </div>

          <div className="return">
            <button
              className="bi bi-arrow-counterclockwise"
              onClick={returnPage}
            >
              Volver
            </button>
          </div>

          <div className="buy">
            <h6>Medios de Pago:</h6>
            <img srcSet="/img/mediosPago.png" alt="" />
          </div>
        </div>
      </article>
    </section>
  );
};
