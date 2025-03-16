import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import {Container, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const Page: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h2>L'exposition de Bron</h2>

      <Container>
        <Row>
          <Col>
            <StaticImage class="my-5" src="../../resources/images/expo/expo_panorama.jpg" objectFit="contain" className="h-100" placeholder="none"/>
          </Col>
        </Row>
        <Row>
          <Col sm={5}>
            <StaticImage src="../../resources/images/expo/expos_2025.jpg" objectFit="contain" className="h-100" placeholder="none"/>
          </Col>
          <Col class="my-auto" sm={7}>
            <p>Le club de l'air de bron est heureux de vous annoncer une exposition sur deux jours à l'espace Albert Camus de Bron</p>

            <h3>Activités</h3>
            Exposition, commerçants, concours (inscription sur place), buvettes

            <h3>Horaire</h3>
            Samedi 23 mars de 10h à 18h et dimanche 24 mars de 10h à 17h
            <h3>Lieu</h3>
            <a href="geo:50.371633,3.469681">Espace Albert Camus</a>

            <MapContainer style={{ height: '400px' }} center={[50.371633,3.469681]} zoom={25} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[50.371633,3.469681]}>
              </Marker>
            </MapContainer>

            <h3>Accès</h3>
            Adulte 5€, gratuit pour les -16ans
          </Col>
        </Row>
      </Container>


    </Layout>
  )
}

export default Page

export const Head: HeadFC = () => <title>Notre Exposition</title>
