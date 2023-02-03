import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { useLoginContext } from "../Context/LoginContext";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
export const LoginWidget = () => {
  const { user, logout } = useLoginContext();
  const navigate = useNavigate();

  return (
    <NavDropdown
      title={user.email ? user.email : "Mi cuenta"}
      id="basic-nav-dropdown"
      className="bi bi-person-circle loginWidget"
    >
      <div className="itemLinks">
        <span>
          {!user.stateLogged && (
            <Link to="/register" className="bi bi-person-plus">
              {" "}
              Registrate
            </Link>
          )}
        </span>

        <span>
          {!user.stateLogged && (
            <Link to="/login" className="bi bi-box-arrow-in-right">
              {" "}
              Iniciar sesión
            </Link>
          )}
        </span>

        <span>
          <Link to="/orders" className="bi bi-bag-fill">
            {" "}
            Mis compras
          </Link>
        </span>

        <span>
          <Link
            className="bi bi-person-dash"
            onClick={() => {
              logout();
              navigate();
            }}
          >
            {" "}
            Cerrar sesión
          </Link>
        </span>
      </div>
    </NavDropdown>
  );
};
