import React from "react";
import { Link } from "react-router-dom";

export const BtnLogin = () => {
  return (
    <div>
      <Link to="/login">
        <button className="btn btn-primary bi bi-box-arrow-in-right ">
          {" "}
          Iniciar sesión
        </button>
      </Link>
    </div>
  );
};
