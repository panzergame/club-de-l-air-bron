import * as React from 'react';
import {Container, Row, Col} from "react-bootstrap"
import Navbar from "../components/navbar"
import { StaticImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from 'gatsby'
import { header, footer } from './layout.module.css'
import { SocialIcon } from 'react-social-icons'

type LayoutProps = {
}

const Layout: React.FC = (props: PropsWithChildren<LayoutProps>) => {
	const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
		<Container fluid className="d-flex flex-column min-vh-100">
			<Row className={`d-flex ${header}`}>
				<Col xs={3} className="d-flex h-100 px-0 my-auto justify-content-center">
					<StaticImage src="../../resources/images/logo-club.png" alt="Club logo" objectFit="contain" placeholder="none"/>
				</Col>
				<Col xs={9} className="d-flex flex-column my-auto">
					<h1>{data.site.siteMetadata.title}</h1>
					<h6>{data.site.siteMetadata.description}</h6>
				</Col>
			</Row>
			<Container fluid="lg" className="bg-light mb-auto">
				<Navbar/>
				<div>{ props.children }</div>
			</Container>
			<Row className={`page-footer d-flex p-3 ${footer}`}>
				<SocialIcon url="https://www.facebook.com/p/Club-de-lair-Lyon-Bron-100064557737513/?locale=fr_FR" />
			</Row>
		</Container>
  )
}

export default Layout;
