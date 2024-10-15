import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Layout from "../components/layout"
import {Container, Col} from "react-bootstrap"

const Page: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <Layout>
	    <h2>{pageContext.titre}</h2>
	    <p>Crée le {pageContext.date}</p>
      <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({node, ...imgProps}) => {
              let medias = pageContext.content.medias;
              const fileIndex = medias.findIndex(file => file.src === imgProps.src);
              if (fileIndex >= 0) {
                const medium = medias[fileIndex];
                return (
                    <Col className="mx-auto" md={8} as={GatsbyImage} image={medium.localFile.childImageSharp.gatsbyImageData} alt={medium.alternativeText} />
                );
              }
              return <img alt="this is a fallback text" {...imgProps} />;
            }
          }}
      >
      {pageContext.content.data.childMarkdownRemark.rawMarkdownBody}
      </Markdown>
    </Layout>
  )
}

export default Page

export const Head: HeadFC = () => <title>Article</title>