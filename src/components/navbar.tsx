import * as React from 'react';
import {Nav, NavDropdown, Navbar, Container, Offcanvas} from "react-bootstrap"
import { Link } from 'gatsby'
import "./navbar.css"

const _Navbar: React.FC = () => {
  return (
  <Navbar collapseOnSelect expand="md" className="navbar-dark">
    <Container fluid className="px-0">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 w-100"/>
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand`}
        aria-labelledby={`offcanvasNavbarLabel-expand`}
        placement="end"
        className="nav-offcanvas"
      >
        <Offcanvas.Header closeButton/>
        <Offcanvas.Body className="justify-content-center">
          
            <Nav variant="underline" defaultActiveKey="/" as="ul">
              <Nav.Item as="li">
                <Nav.Link as={Link} to="/">Accueil</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Association">
                <NavDropdown.Item as="li">
                  <Nav.Link as={Link} to="/le_club">Le club</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="li">
                  <Nav.Link as={Link} to="/reunions">Réunions</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="li">
                  <Nav.Link as={Link} to="/notre_exposition">Notre exposition</Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item as="li">
                <Nav.Link as={Link} to="/galeries">Galeries</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link as={Link} to="/expositions">Expositions</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item as="li">
                <Nav.Link as={Link} to="/divers">Divers</Nav.Link>
              </Nav.Item> */}
            </Nav>

        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  )
}

export default _Navbar
