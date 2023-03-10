import React, { useEffect } from "react";
import { ItemCart } from "../ItemCart/ItemCart";
import { useCartContext } from "../Context/CartContext";
import { useLoginContext } from "../Context/LoginContext";
import { CartOptions } from "../CartOptions/CartOptions";
import { Link, useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cart } = useCartContext();
  const { user } = useLoginContext();
  const navigate = useNavigate();
  useEffect(() => {
    !user.stateLogged && navigate("/login");
  }, [user]);

  return (
    <div className="cart">
      <div className="cart__title container-fluid">
        <i className="bi bi-cart"></i>
        <h2>Resumen del carrito</h2>
      </div>

      <div className="cart__products">
        {cart.map((product) => (
          <ItemCart {...product} key={product.id} />
        ))}
      </div>

      {cart.length > 0 ? (
        <CartOptions />
      ) : (
        <div className="emptyCart">
          <img src="/img/cart-empty-removebg-preview.png" alt="cart" />
          <div className="addProduct">
            <h2>¡Carrito sin productos!😥 </h2>
            <Link to="/products">
              <button className="btn btn-success bi bi-cart">
                {" "}
                Agregar productos
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
