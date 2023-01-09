import React from "react";
import { Link } from "react-router-dom";

export const Item = (props) => {
  const { id, name, mark, model, price, image } = props.product;
  return (
    <div className="item">
      <img src={"/img/products/" + image} alt={name} />
      <div className="item__text">
        <h5>{name + " " + mark + " " + model}</h5>
        <strong>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </strong>

        <Link to={`/producto/${id}`}>
          <button>+Info</button>
        </Link>
      </div>
    </div>
  );
};
