import * as React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"
import MarkdownReact from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Col} from "react-bootstrap"

type MardownProps = {
  content: any
}

const Mardown: React.FC = (props: MardownProps) => {
  return (
    <MarkdownReact
    remarkPlugins={[remarkGfm]}
    components={{
      img: ({node, ...imgProps}) => {
        let medias = props.content.medias;
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
    {props.content.data.childMarkdownRemark.rawMarkdownBody}
    </MarkdownReact>
  )
}

export default Mardown
