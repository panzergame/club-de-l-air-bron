import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

const Page: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h2>Réunions</h2>
      <p>Le club se retrouve régulièrement un samedi sur deux au <a href="geo:45.7473954,4.9148733">18 rue de la pagère 69500 Bron</a></p>
      <iframe className="w-100 mt-5" height="800" frameborder="0" scrolling="no"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&showPrint=0&mode=WEEK&showTz=0&showTitle=0&src=MTM3OWE4YTYyMDQ0ZmM4MDRiMzM2YjEyYzlhN2ZiZDhhY2E5Y2Y3MWY4N2RjNjNlZGRhZTA2MDkyZGVhNzVlNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnIuZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23b39ddb&color=%23009688"></iframe>
      <MapContainer style={{ height: '400px' }} center={[45.7473954,4.9148733]} zoom={25} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[45.7473954,4.9148733]}>
        </Marker>
      </MapContainer>
    </Layout>
  )
}

export default Page

export const Head: HeadFC = () => <title>Réunions</title>
