import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Kontakt — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div class="container">
        <h1>Kontakt</h1>
        <div>
          <h2>Schreibe uns eine E-Mail</h2>
          <p><a href="mailto:mail@familienverein.ch">mail@familienverein.ch</a></p>
          <h2>Vereinsadresse</h2>
          <p>
            Andrea Günter<br/>
            Selmattweg 24<br/>
            4246 Wahlen<br/>
            Schweiz <br/>
          </p>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`