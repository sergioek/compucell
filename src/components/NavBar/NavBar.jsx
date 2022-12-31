import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
   return(
    
    <Navbar bg="dark" variant="dark" expand="lg" fixed="sticky">
    
    <Container fluid>
      <Navbar.Brand >
        <Image src="./public/img/logoCompucellFDZ.png"  width="140px"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" >
        <Nav
          className="me-auto my-2 my-lg-0 nav"
          style={{ maxHeight: '500px'}}
          navbarScroll
        >
          <Nav.Link href="" className="link">Home</Nav.Link>

          <Nav.Link href="" className="link">Productos</Nav.Link>

          <Nav.Link href="" className="link">Contacto</Nav.Link>

        </Nav>
       <CartWidget/>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   )
}