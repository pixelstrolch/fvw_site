import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"

import "../styles/reset.css"
import "../styles/accessibility.css"
import "../styles/global.module.css"
import "../styles/general.css"
import * as style from './layout.module.css' 


export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className={style.site}>
      <a className="skip-link screen-reader-text" href="#primary">
        Zum Inhalt springen
      </a>
      <header className={style.site_header} role="banner">
        <Link to="/">
          <img
            src="/uploads/Logo-FamilienvereinWahlen.svg"
            width="375"
            height="75"
            alt={data.site.siteMetadata.title}
          />
        </Link>
        <Navigation />
      </header>
      <main id="primary" className={style.site_main}>
        {children}
      </main>
      <footer className={style.site_footer}>
        <small>&copy; {new Date().getFullYear()} Familienverein Wahlen <span className={style.dot}>&middot;</span> Website realisiert mit Gatsby und Netlify (CMS) von <a href="https://www.pixelstrol.ch">pixelstrol.ch</a></small>
      </footer>
    </div>
  )
}
