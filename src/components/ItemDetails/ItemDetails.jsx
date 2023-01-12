import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { BtnAddCart } from "../BtnAddCart/BtnAddCart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import { BtnShowCart } from "../BtnShowCart/BtnShowCart";

export const ItemDetails = ({id,category,name,description,price,stock,image,mark,model
}) => {

  const [count,setCount] = useState(1);
  const navigateReturn = useNavigate();
  const { addToCart,productExist } = useCartContext(); 

  const returnPage = () => {
    navigateReturn(`/productos/${category}`);
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
    }
    addToCart(product)
  }

  return (
    <section className="itemDetails">
      <article className="itemDetails__image">
        <img srcSet={"/img/products/" + image} alt={name} />
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
            {!productExist(id) && 
              <ItemCount stock={stock} count={count} setCount={setCount} />
            }

            {stock > 0 && !productExist(id) ?
              <BtnAddCart add={add} />
              :<BtnShowCart/>
            }
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
