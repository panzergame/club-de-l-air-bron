import * as React from 'react';
import {Card, Container, Row, Col} from "react-bootstrap"
import { Link } from 'gatsby'
import { getImage, GatsbyImage, ImageDataLike } from "gatsby-plugin-image"
import { card_footer } from './card.module.css'

type DomainCardProps = {
    domaine: { title: string, tag: string, image: ImageDataLike, echelles: [ { title: string, tag: string } ]};
}

const DomainCard: React.FC = (props: DomainCardProps) => {
  console.log(props.domaine);
  const image = getImage(props.domaine.image)

  return (
    <Card key={props.domaine.tag}>
      <GatsbyImage image={image} alt={props.domaine.title}/>
      <Card.ImgOverlay as={Container} className='d-flex flex-column p-0'>
        <Card.Title as="h3" className='text-center py-2'>{props.domaine.title}</Card.Title>
        <Card.Footer as={Row} className={`mt-auto py-3 ${card_footer}`}>
          {
              props.domaine.echelles.map((echelle) => (
                  <Col xs className="text-center" key={props.domaine.tag + echelle.tag}>
                      <Link as={Col} to={"/categorie/" + props.domaine.tag + '/' + echelle.tag}>{echelle.title}</Link>
                  </Col>
              ))
          }
        </Card.Footer>
      </Card.ImgOverlay>
</Card>
  )
}

export default DomainCard
