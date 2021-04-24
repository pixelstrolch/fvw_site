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
      <Link to="/ueber-uns">Mehr über unseren Verein erfahren</Link>
    </p>
    <figure className={style.image}>
      <StaticImage 
        src="../../static/uploads/anna-samoylova-w55spmmopge-unsplash.jpg"
        alt="Kinder spielen Seilziehen."
      />
    </figure>
  </section>
)

export default heroHeader;