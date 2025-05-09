import * as React from 'react';
import MarkdownReact from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import Gallery from '@browniebroke/gatsby-image-gallery'
import {visit} from "unist-util-visit"

type MardownProps = {
  content: any
}

function make_images_group(tree) {
  console.log(tree)
  function visitor(node) {
    let new_children = []
    
    let images = []
    
    function create_gallery() {
      if (images.length === 0) {
        return
      }
      const gallery_node = {
        type: 'element',
        tagName: 'gallery',
        properties: [],
        children: [],
        __images: images
      }
      new_children.push(gallery_node)
      images = []
    }
    
    for (const child of node.children) {
      if (child.tagName == 'img') {
        images.push(child)
      }
      else if (child.value != '\n' && child.tagName != 'br') {
        create_gallery()
        new_children.push(child)
      }
      else {
        new_children.push(child)
      }
    }
    create_gallery()
    node.children = new_children
  }
  
  visit(tree, node => node.tagName === 'p', visitor)
}

const Mardown: React.FC = (props: MardownProps) => {
  const medias = props.content.medias;

  function find_image_by_src(src: String) {
    const fileIndex = medias.findIndex(file => file.src === src);
    if (fileIndex >= 0) {
      return medias[fileIndex].localFile.childImageSharp
    }
    return null
  }

  return (
    <MarkdownReact
      remarkPlugins={[remarkBreaks, remarkGfm]}
      rehypePlugins={[() => make_images_group]}
      components={{
        gallery: ({node, ...props}) => {
          const images = node.__images.map(image => find_image_by_src(image.properties.src))
          return (
              <Gallery images={images} gutter="0" mdColWidth="20"/>
          )
        }
      }}
    >
    {props.content.data.childMarkdownRemark.rawMarkdownBody}
    </MarkdownReact>
  )
}

export default Mardown
