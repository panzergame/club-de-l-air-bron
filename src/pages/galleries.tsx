import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"

const Page: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
	    <h2>Galleries</h2>
        {
            data.allMdx.nodes.map((node) => (
                <Link to={"/article/" + node.id}>{node.frontmatter.title}</Link>
            ))
        }
	    
    </Layout>
  )
}

export const query = graphql`
query {
    allMdx {
        nodes {
            frontmatter {
                title
            }
            id
        }
    }
}
`;

export default Page

export const Head: HeadFC = () => <title>Galleries</title>
