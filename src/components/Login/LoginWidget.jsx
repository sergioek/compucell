import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { useLoginContext } from "../Context/LoginContext";
import NavDropdown from "react-bootstrap/NavDropdown";

export const LoginWidget = () => {
  const { user } = useLoginContext();

  return (
    <NavDropdown
      title="Mi cuenta"
      id="basic-nav-dropdown"
      className="bi bi-person-circle loginWidget"
    >
      <NavDropdown.Item>
        <Link to="/register" className="bi bi-person-plus">
          {" "}
          Registrate
        </Link>
      </NavDropdown.Item>

      <NavDropdown.Item>
        <Link to="/orders" className="bi bi-bag-fill">
          {" "}
          Mis compras
        </Link>
      </NavDropdown.Item>

      <NavDropdown.Item>
        <Link to="/login" className="bi bi-box-arrow-in-right">
          {" "}
          Iniciar sesión
        </Link>
      </NavDropdown.Item>

      <NavDropdown.Item>
        <Link to="/logout" className="bi bi-person-dash">
          {" "}
          Cerrar sesión
        </Link>
      </NavDropdown.Item>
    </NavDropdown>
  );
};
