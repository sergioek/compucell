import React from "react";
import { useState, useEffect } from "react";
import { ItemOrder } from "./ItemOrder";
import { Link } from "react-router-dom";
export const Resume = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    JSON.parse(localStorage.getItem("orders")) != null &&
      setOrders(JSON.parse(localStorage.getItem("orders")));
  }, []);

  return (
    <div className="orders">
      <div className="ordersTitle">
        <h2>Tus ordenes de compra!</h2>
        <p>Aquí puedes ver el resumen de tus compras</p>
        <hr />
      </div>

      {orders.length > 0 ? (
        <div className="ordersItems">
          {orders.map((order) => (
            <ItemOrder order={order} key={order.id} />
          ))}
        </div>
      ) : (
        <div className="emptyCart">
          <img
            src="/img/delivery.png"
            alt="cart"
          />
          <div className="addProduct">
            <h2>¡Sin ordenes de compra!😥 </h2>
            <Link to="/products">
              <button className="btn btn-success bi bi-cart">
                {" "}
                Comienza a comprar
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
