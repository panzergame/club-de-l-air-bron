import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Carousel from 'react-bootstrap/Carousel';
import { StaticImage } from "gatsby-plugin-image"
import {Container, Row, Col, Image} from "react-bootstrap"

const Page: React.FC<PageProps> = () => {
  return (
    <Layout>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Row className="justify-content-center" style={{height: "50vh"}}>
          <StaticImage src="../../resources/images/expos_2024.jpg" objectFit="contain" className="h-100" placeholder="none"/>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="justify-content-center" style={{height: "50vh"}}>
          <StaticImage src="../../resources/images/bonne_annee_2024.jpg" objectFit="contain" className="h-100" placeholder="none"/>
        </Row>
      </Carousel.Item>
    </Carousel>
    </Layout>
  )
}

export default Page

export const Head: HeadFC = () => <title>Club de l'air Lyon-Bron</title>
