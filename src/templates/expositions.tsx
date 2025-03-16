import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import ContentCard from "../components/content_card"
import {Row, Col} from "react-bootstrap"

const Page: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <Layout>
      <Row xs={1} sm={2} lg={3} className="g-4">
        {
          pageContext.expositions?.map(exposition => (
            <Col>
              <ContentCard title={exposition.title} url={"/exposition/" + exposition.id} image={exposition.image}/>
            </Col>
          ))
        }
      </Row>
    </Layout>
  )
}

export default Page

export const Head: HeadFC = () => <title>Expositions</title>
