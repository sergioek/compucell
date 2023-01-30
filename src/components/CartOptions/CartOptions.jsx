import React from "react";
import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
export const CartOptions = () => {
  const { emptyCart, priceTotalCart } = useCartContext();

  return (
    <div className="cart__options">
      <div className="total">
        <h2>TOTAL: </h2>
        <h2>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(priceTotalCart())}
        </h2>
      </div>

      <div>
        <button className="btn btn-danger bi bi-trash3" onClick={emptyCart}>
          {" "}
          Vaciar carrito
        </button>
      </div>
      <div>
        <Link to="/checkout">
          <button className="btn btn-success bi bi-caret-right">
            {" "}
            Continuar compra
          </button>
        </Link>
      </div>
    </div>
  );
};
