import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Mardown from "../components/mardown"

const Exposition: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <Layout>
	    <h2>{pageContext.titre}</h2>
	    <p>Organisé le {pageContext.date} à {pageContext.lieu} par {pageContext.organisateur}</p>
      <Mardown content={pageContext.content}/>
    </Layout>
  )
}

export default Exposition

export const Head: HeadFC = () => <title>Exposition</title>