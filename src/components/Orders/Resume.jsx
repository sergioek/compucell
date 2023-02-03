import React from "react";
import { useState, useEffect } from "react";
import { ItemOrder } from "./ItemOrder";
import { Link, useNavigate } from "react-router-dom";
import { useLoginContext } from "../Context/LoginContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { databaseFirestore } from "../../firebase/config.js";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Resume = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useLoginContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.stateLogged) {
      const ref = collection(databaseFirestore, "orders");
      const queryOrders = query(ref, where("userEmailOrder", "==", user.email));
      getDocs(queryOrders).then((response) => {
        setOrders(
          response.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      });
    } else {
      navigate('/login')
    }
  }, [user]);

  return (
    <div className="orders">
      {<ToastContainer autoClose={500} />}
      <div className="ordersTitle">
        <h2>Tus ordenes de compra!</h2>
        <p>Aquí puedes ver el resumen de tus compras</p>
        <hr />
      </div>

      {user.stateLogged && orders.length>0 ? (
        <div className="ordersItems">
          {orders.map((order) => (
            <ItemOrder order={order} key={order.id} />
          ))}
        </div>
      ) : (
        <div className="emptyCart">
          <img src="/img/delivery.png" alt="cart" />
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
