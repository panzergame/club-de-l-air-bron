import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const Page: React.FC<PageProps> = ({ pageContext, children }) => {
  return (
    <Layout>
	    <h2>{pageContext.frontmatter.title}</h2>
	    <p>Crée le {pageContext.frontmatter.date}</p>
	    <div>
        {children}
      </div>
    </Layout>
  )
}

export default Page

export const Head: HeadFC = () => <title>Article</title>