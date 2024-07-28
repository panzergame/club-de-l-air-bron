import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from "../components/layout"
import DomainCard from "../components/domain_card"
import {Row, Col} from "react-bootstrap"

const Page: React.FC<PageProps> = ({ pageContext }) => {
    const domaines = pageContext;

    return (
    <Layout>
        <Row xs={1} sm={2} lg={3} className="g-4">
        {
            Object.values(domaines).map((domaine) => (
              <Col key={domaine.tag}>
                <DomainCard domaine={domaine}/>
              </Col>
            ))
        }
        </Row>
	</Layout>
  )
}



export default Page

export const Head: HeadFC = () => <title>Galleries</title>
