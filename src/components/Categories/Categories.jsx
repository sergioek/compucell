import React from "react";
import { NavLink } from "react-router-dom";
export const Categories = () => {
  let activeClassName = "underline";
  return (
    <div className="filter">
      <h3>Categorías</h3>
      <nav>
        <ul>
          <li>
            <NavLink end to="/products">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Todos
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/products/mouse">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Mouse
                </span>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink end to="/products/teclados">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Teclados
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/products/microprocesadores">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Microprocesadores
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/products/pendrives">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Pendrives / MicroSD
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/products/parlantes">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Parlantes
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/products/routers">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Routers
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/products/cargadores">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Cargadores
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/products/motherboard">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Motherboards
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/products/accesorios">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Accesorios
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
