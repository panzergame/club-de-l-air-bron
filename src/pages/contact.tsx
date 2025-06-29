import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Page: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h2>Contact</h2>

      <Form method="post" action="https://formspree.io/f/xjkrjnqj">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Addresse email</Form.Label>
          <Form.Control type="email" placeholder="Entrez votre email" required name="email"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} required name="message"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    </Layout>
  )
}

export default Page

export const Head: HeadFC = () => <title>Contact</title>
