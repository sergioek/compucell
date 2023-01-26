import React from "react";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className="error">
      <img src="/img/error404.jpg" alt="error404" />
      <div className="text">
        <h2>Página no encontrada 😅</h2>
        <p>La página solicitada no existe.</p>
        <Link to="/productos">
          <button>Volver</button>
        </Link>
      </div>
    </div>
  );
};
