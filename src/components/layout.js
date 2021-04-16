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
    <div className={style.overallContainer}>
      <header className={style.site_header}>
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
      <main className={style.site_main}>
        {children}
      </main>
      <footer className={style.site_footer}>
        <small>&copy; {new Date().getFullYear()} Familienverein Wahlen &middot; Website von <a href="https://www.pixelstrol.ch">pixelstrol.ch</a></small>
      </footer>
    </div>
  )
}
