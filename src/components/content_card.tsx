import * as React from 'react';
import {Card } from "react-bootstrap"
import { Link } from 'gatsby'
import { getImage, GatsbyImage, ImageDataLike } from "gatsby-plugin-image"
import { card_footer } from './card.module.css'

type ContentCardProps = {
    title: string
    url: string
    image: ImageDataLike
}

const ContentCard: React.FC = (props: ContentCardProps) => {
  const image = getImage(props.image)

  return (
    <Card key={props.id} as={Link} to={props.url}>
      <GatsbyImage image={image} alt={props.title}/>
      <Card.ImgOverlay className='d-flex flex-column p-0'>
        <Card.Footer as="h3" className={`text-center py-2 mt-auto ${card_footer}`}>{props.title}</Card.Footer>
      </Card.ImgOverlay>
    </Card>
  )
}

export default ContentCard
