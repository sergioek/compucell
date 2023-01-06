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
            <NavLink end to="/productos/mouse">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Mouse
                </span>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink end to="/productos/teclados">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Teclados
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/productos/microprocesadores">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Microprocesadores
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/productos/pendrives">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Pendrives / MicroSD
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/productos/parlantes">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Parlantes
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/productos/routers">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Routers
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/productos/cargadores">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Cargadores
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/productos/motherboard">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Motherboards
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/productos/accesorios">
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
