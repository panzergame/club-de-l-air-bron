import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const Page: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="text-center">
        <h3>Merci !</h3>
        <p>Votre message a bien été envoyé.</p>
      </div>
    </Layout>
  )
}

export default Page

export const Head: HeadFC = () => <title>Message envoyé</title>
