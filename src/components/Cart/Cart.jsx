import React from "react";
import { ItemCart } from "../ItemCart/ItemCart";
import { useCartContext } from "../Context/CartContext";

export const Cart = () => {
  const { cart } = useCartContext();
  return (
    <div className="cart">
      <div className="cart__title container-fluid">
        <i className="bi bi-cart"></i>
        <h2>Resumen del carrito</h2>
      </div>

      <div className="d-flex mt-2 mx-2 justify-content-end">
        <button className="btn btn-danger bi bi-trash3"> Vaciar carrito</button>
      </div>

      <div className="cart__products">
        {
         cart.map((product) => 
             <ItemCart {...product}/>
          )       
        }
              
      </div>
    </div>
  );
};
