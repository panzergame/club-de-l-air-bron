import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
	    <h2>À propos</h2>
	    <p>
	    Le Club de l'Air, est une association crée à Voiron (Isère) en 1968, et qui est installée à Bron depuis 1972. Il regroupe toutes les personnes s'intéressant à l'aviation au sens large : historiens, photographes, spotters et/ou maquettistes 
	    </p>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Club de l'air Lyon-Bron</title>
