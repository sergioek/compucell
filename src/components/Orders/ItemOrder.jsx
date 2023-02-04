import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export const ItemOrder = ({ order }) => {
  return (
    <div
      className="itemOrder"
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-delay="500"
      data-aos-duration="500"
    >
      <img
        src={
          order.user.sending !== "envio-domicilio"
            ? "https://firebasestorage.googleapis.com/v0/b/compucell-8d167.appspot.com/o/envios%2FretiroLocal.jpg?alt=media&token=fc3e3fa0-5bdb-44eb-adb6-a0a3c22c7bfd"
            : "https://firebasestorage.googleapis.com/v0/b/compucell-8d167.appspot.com/o/envios%2FenvioDomicilio.png?alt=media&token=0be61a64-5f56-4c66-92d2-a66c730813c1"
        }
        alt="image-order"
      />

      <div className="total">
        <strong>TOTAL: </strong>
        <strong>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(order.total)}
        </strong>
      </div>

      <div>
        <label htmlFor="">Código ID:</label>
        <input type="text" className="form-control" value={order.id} disabled />
      </div>

      <div>
        <div>
          <label htmlFor="">Fecha de compra:</label>
          <input
            type="text"
            className="form-control"
            value={order.date}
            disabled
          />
        </div>

        <div>
          <label>Método de envío:</label>
          <input
            type="text"
            className="form-control"
            value={order.user.sending.toLocaleString().toUpperCase()}
            disabled
          />
        </div>
      </div>
    </div>
  );
};
