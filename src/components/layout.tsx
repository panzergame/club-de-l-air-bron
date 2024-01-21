import * as React from 'react';
import {Container, Row, Col} from "react-bootstrap"
import Navbar from "../components/navbar"
import { StaticImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from 'gatsby'

type LayoutProps = {
	pageTitle: string
}

const Layout: React.FC = (props: PropsWithChildren<FooProps>) => {
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
		<Container fluid="lg">
			<Row className="justify-content-center">
				<Col sm={4}>
					<StaticImage src="../images/logo-club.jpg" alt="A kitten" />
				</Col>
				<Col sm={8} className="d-flex flex-column justify-content-center">
					<h1>{data.site.siteMetadata.title}</h1>
					<h3>{data.site.siteMetadata.description}</h3>
				</Col>
			</Row>
			<Navbar/>
			<div>{ props.children }</div>
		</Container>
  )
}

export default Layout;
