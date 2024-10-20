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
				<Col xs={3} className="d-flex h-100 px-0 my-auto justify-content-center" md={{ span: 2, offset: 2}}>
					<StaticImage src="../../resources/images/logo-club-clair.png" alt="Club logo" objectFit="contain" placeholder="none"/>
				</Col>
				<Col xs={7} className="d-flex flex-column my-auto" md={7}>
					<h1>{data.site.siteMetadata.title}</h1>
					<h6>{data.site.siteMetadata.description}</h6>
				</Col>
				<Col xs={2} md={12} className="d-flex flex-column my-auto">
					<Navbar className="mx-auto"/>
				</Col>
			</Row>
			<Container className="flex-grow-1 bg-light">
				<div className="my-3">{ props.children }</div>
			</Container>
			<Row className={`page-footer d-flex p-3 ${footer}`}>
				<SocialIcon url="https://www.facebook.com/p/Club-de-lair-Lyon-Bron-100064557737513/?locale=fr_FR" />
			</Row>
		</Container>
  )
}

export default Layout;
