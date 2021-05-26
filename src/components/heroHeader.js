import React from "react"
import {Link} from "gatsby" 
import { StaticImage } from "gatsby-plugin-image"
import JSONData from "../../content/homepage-data.json"

import * as style from './heroHeader.module.css' 

const heroHeader = () => (
  <section className={style.heroHeader}>
    <h1 id="ueber-uns" className={style.title}>{JSONData.title}</h1>
    <div 
      className={style.content} 
      dangerouslySetInnerHTML={{ __html: JSONData.description}}
    />
    <p className={style.linkContainer}>
      <Link to="/ueber-uns">Mehr über unseren Verein erfahren</Link> → <Link to="/ueber-uns#mitglied-werden">Mitglied werden</Link>
    </p>
    <figure className={style.image}>
      <StaticImage 
        src="../../static/uploads/ausflug-bauernhof.jpg"
        alt="Kinder auf dem Bauernhof."
      />
    </figure>
  </section>
)

export default heroHeader;