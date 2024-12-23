import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import {Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const Page: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col>
            <h2>À propos</h2>
            <p>
            Le Club de l'Air, est une association crée à Voiron (Isère) en 1968, et qui est installée à Bron depuis 1972. Il regroupe toutes les personnes s'intéressant à l'aviation au sens large : historiens, photographes, spotters et/ou maquettistes 
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <StaticImage src="../../resources/images/club/membre-club.jpg" objectFit="contain" className="h-100" placeholder="none"/>
          </Col>
        </Row>
        <Row class="mt-5">
          <Col>
            <h3>Activités du club</h3>
            <p>Le club se réunis regulièrement dans ses locaux à Bron, voir <Link to="/reunions">nos réunions</Link>,
            dans un atelier permanent avec aerographe et autre petit matériel.</p>

            <p>Tout au long de long de l'année les membres du clubs participes à de nombreuses <Link to="/expositions">expositions</Link> en france et à l'international (angleterre, hongrie...).</p>

            <p>Enfin, le club à pour objectif d'organiser une exposition à Bron, pour plus d'infos voir <Link to="/notre_exposition">notre exposition</Link>.</p>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <StaticImage src="../../resources/images/club/club01.jpg" objectFit="contain" className="h-100" placeholder="none"/>
          </Col>
          <Col sm={6}>
            <StaticImage src="../../resources/images/club/club02.jpg" objectFit="contain" className="h-100" placeholder="none"/>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Page

export const Head: HeadFC = () => <title>Le Club</title>
