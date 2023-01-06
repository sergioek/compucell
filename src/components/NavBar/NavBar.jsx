import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="sticky">
      <Container fluid>
        <Navbar.Brand>
          <Image src="../../../public/img/logoCompucellFDZ.png" width="140px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav"
            style={{ maxHeight: "500px" }}
            navbarScroll
          >
            <NavLink end to="/" className="link nav-link">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Home
                </span>
              )}
            </NavLink>

            <NavLink end to="/productos" className="link nav-link">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Productos
                </span>
              )}
            </NavLink>

            <NavLink end to="/contacto" className="link nav-link">
              {({ isActive }) => (
                <span className={isActive ? "activeLink" : undefined}>
                  Contacto
                </span>
              )}
            </NavLink>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
