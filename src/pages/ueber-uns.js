import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Über uns — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div class="container">
        <h1>Über uns</h1>
        <div>
          <p>
            Wir sind eine bunt gemischte Gruppe von Mami’s, die gerne Aktivitäten speziell für Familien in Wahlen organisieren möchten.
          </p>
          <p>
            Unser Plan ist es, einmal im Monat ein Angebot für Familien in Wahlen anzubieten, um andere Familien kennenzulernen, sich auszutauschen und Kontakte zu pflegen. Auch Grosseltern sind herzlich willkommen. 
          </p>
          <p>
            Soweit es die Situation um Covid-19 zulässt, planen wir die Anlässe drinnen oder draussen eher kurzfristig und bitten um Anmeldung wie beim Event ausgeschrieben.
          </p>
          <p>
            Die Mitgliedschaft pro Familie kostet CHF 20.– und wird für dieses ohnehin schon spezielle Jahr bis Ende 2022 gültig sein. Je nach Materialien und organisatorischem Aufwand sind die Aktivitäten für Mitglieder kostenlos oder vergünstigt – auch ohne Mitgliedschaft ist die Teilnahme möglich (Unkostenbeitrag wie publiziert).
          </p>
          <p>
            Über unsere Anlässe informieren wir Euch gerne über unsere Homepage … oder dem Infoblatt.
          </p>
          <p>
            Wir freuen uns sehr auf Alle, die mit uns im Dorf unterwegs sein möchten!
          </p>
        </div>
      </div>
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query AboutPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`