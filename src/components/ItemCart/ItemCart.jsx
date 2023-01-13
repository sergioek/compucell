import React, { useState } from "react";
import { useCartContext } from "../Context/CartContext";

export const ItemCart = ({
  id,
  name,
  mark,
  model,
  count,
  price,
  image,
  stock,
  category,
  description,
}) => {
  const { deleteProduct, changeAmount } = useCartContext();
  const [amount, setAmount] = useState(count);

  const change = (event) => {
    let product = {
      id: id,
      category: category,
      name: name,
      mark: mark,
      model: model,
      image: image,
      description: description,
      stock: stock,
      price: price,
      count: Number(event.target.value),
    };
    changeAmount(id, product);
    setAmount(event.target.value);
  };
  return (
    <div className="product">
      <i
        className="btn bi bi-trash3 text-danger mt-3"
        onClick={() => deleteProduct(id)}
      ></i>
      <img src={`/img/products/${image}`} alt={name} />
      <h5>{name + " " + mark + " " + model}</h5>
      <div className="unit">
        <label>Unidades:</label>
        <input
          type="number"
          className="form-control mb-2"
          onChange={change}
          value={amount}
          min={1}
          max={stock}
        />
      </div>

      <strong>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price * count)}
      </strong>
    </div>
  );
};
