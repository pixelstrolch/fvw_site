import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import * as style from './heroHeader.module.css' 

const heroHeader = () => {

  return(
    <StaticQuery

      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              home {
                title
                description
              }
            }
          }
        }
      `}
      render={data => (
        <div className={style.hero_header}>
          <h1>{data.site.siteMetadata.home.title}</h1>
          <div 
            className={style.content} 
            dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
          />
        </div>
      )}
    />
  )
}

export default heroHeader;