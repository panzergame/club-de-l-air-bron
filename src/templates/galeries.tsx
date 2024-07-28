import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from "../components/layout"
import CategoryCard from "../components/category_card"
import {Card, CardGroup, Container, Row, Col} from "react-bootstrap"
import holderjs from "holderjs"

const Page: React.FC<PageProps> = ({ pageContext }) => {
    const domaines = pageContext;

    return (
    <Layout>
        <Row xs={1} sm={2} lg={3} className="g-4">
        {
            Object.values(domaines).map((domaine) => (
              <Col key={domaine.tag}>
                <CategoryCard domaine={domaine}/>
              </Col>
            ))
        }
        </Row>
	</Layout>
  )
}



export default Page

export const Head: HeadFC = () => <title>Galleries</title>
