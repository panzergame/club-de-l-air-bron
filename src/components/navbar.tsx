import * as React from 'react';
import {Nav} from "react-bootstrap"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const Navbar: React.FC = () => {
  return (
	<Nav variant="underline" defaultActiveKey="/" as="ul" className="justify-content-center">
      <Nav.Item as="li">
        <Nav.Link href="/">Acceuil</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Le club</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Galeries</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navbar
