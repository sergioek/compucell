import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetails = ({id,category,name,description,price,stock,image, mark,model }) => {
  return (
    <section className="itemDetails">
      <article className="itemDetails__image">
        <img srcSet={"../../../public/img/products/" + image} alt={name} />
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
            <ItemCount />

            <div className="buttonAddToCart">
              <button className="bi bi-cart"> Agregar al carrito</button>
            </div>
          </div>

          <div className="buy">
            <h6>Medios de Pago:</h6>
            <img srcSet="../../../public/img/mediosPago.png" alt="" />
          </div>
        </div>
      </article>
    </section>
  );
};
