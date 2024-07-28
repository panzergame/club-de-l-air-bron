import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import CategoryCard from "../components/category_card"
import {Row, Col} from "react-bootstrap"

const Page: React.FC<PageProps> = ({ pageContext }) => {
  console.log(pageContext.articles)
  return (
    <Layout>
	    <h2>{pageContext.domaine.title} { pageContext.echelle.title }</h2>

      <Row xs={1} sm={2} lg={3} className="g-4">
        {
          pageContext.articles.map(article => (
            <Col>
              <CategoryCard title={article.title} id={article.id} image={article.image}/>
            </Col>
          ))
        }
      </Row>
    </Layout>
  )
}

export default Page

export const Head: HeadFC = () => <title>Galleries</title>
