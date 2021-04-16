import React from "react"
import JSONData from "../../homepage-data.json"

import * as style from './heroHeader.module.css' 

const heroHeader = () => (
  <div className={style.hero_header}>
    <h1>{JSONData.title}</h1>
    <div 
      className={style.content} 
      dangerouslySetInnerHTML={{ __html: JSONData.description}}
    />
  </div>
)

export default heroHeader;