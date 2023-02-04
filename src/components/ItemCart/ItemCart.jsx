import React, { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

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

  const change = (newValue) => {
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
      count: newValue,
    };
    changeAmount(id, product);
  };

  const validate = (event) => {
    let valueCount = Number(event.target.value);
    if (valueCount >= 1) {
      if (valueCount > stock) {
        setAmount(stock);
      } else {
        change(valueCount);
        setAmount(valueCount);
      }
    } else {
      setAmount(1);
    }
  };
  return (
    <div className="product">
      <i
        className="btn bi bi-trash3 text-danger mt-3"
        onClick={() => deleteProduct(id)}
      ></i>
      <img src={image} alt={name} />
      <h5>{name + " " + mark + " " + model}</h5>
      <div className="unit">
        <label>Unidades:</label>
        <input
          type="number"
          className="form-control mb-2"
          onChange={validate}
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
      <Link to={"/producto/" + id}>
        <button className="info">+Info</button>
      </Link>
    </div>
  );
};
