import React from "react";
import { Link } from "react-router-dom";

export const BtnLogin = () => {
  return (
    <div className="btnLogin">
      <p>¿Querés comprar?</p>
      <Link to="/login">
        <button className="bi bi-box-arrow-in-right "> Inicia sesión</button>
      </Link>
    </div>
  );
};
