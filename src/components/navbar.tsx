import * as React from 'react';
import {Nav, NavDropdown} from "react-bootstrap"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const Navbar: React.FC = () => {
  return (
	<Nav variant="underline" defaultActiveKey="/" as="ul" className="justify-content-center">
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/">Acceuil</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/le_club">Le club</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/">Galeries</Nav.Link>
      </Nav.Item>
      <NavDropdown title="Categories">
        <NavDropdown.Item as={Link} to="/expo_concours">Expo concours</NavDropdown.Item> 
        <NavDropdown.Item as={Link} to="/reunions">Réunions</NavDropdown.Item> 
        <NavDropdown.Item as={Link} to="/divers">Divers</NavDropdown.Item> 
      </NavDropdown>
    </Nav>
  )
}

export default Navbar
