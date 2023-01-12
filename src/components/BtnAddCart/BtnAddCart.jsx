import React from "react";

export const BtnAddCart = ({add}) => {
  return (
    < div className="buttonAddToCart">
        <button className="bi bi-cart" onClick={add}>Agregar al carrito</button>
    </div>
  );
};
