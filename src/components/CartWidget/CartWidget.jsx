import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { totalCount } = useCartContext();
  return (
    <Link to="/cart">
      <div className="bi bi-cart iconCart btn">
        <span> +{totalCount()}</span>
      </div>
    </Link>
  );
};
