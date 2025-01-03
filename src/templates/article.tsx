import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Mardown from "../components/mardown"

const Page: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <Layout>
	    <h2>{pageContext.titre}</h2>
	    <p>Crée le {pageContext.date} par {pageContext.auteur}</p>
      <Mardown content={pageContext.content}/>
    </Layout>
  )
}

export default Page

export const Head: HeadFC = () => <title>Article</title>