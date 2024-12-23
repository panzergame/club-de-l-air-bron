import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

const Page: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h2>Réunions</h2>
      <p>Le club se retrouve régulièrement un samedi sur deux au <a href="geo:45.7473954,4.9148733">18 rue de la pagère 69500 Bron</a></p>
      <MapContainer style={{ height: '400px' }} center={[45.7473954,4.9148733]} zoom={25} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[45.7473954,4.9148733]}>
        </Marker>
      </MapContainer>
      <iframe className="w-100 mt-5" height="800"
        src="https://calendar.google.com/calendar/embed?src=1379a8a62044fc804b336b12c9a7fbd8aca9cf71f87dc63eddae06092dea75e4%40group.calendar.google.com&ctz=Europe%2FParis"></iframe>
    </Layout>
  )
}

export default Page

export const Head: HeadFC = () => <title>Réunions</title>
