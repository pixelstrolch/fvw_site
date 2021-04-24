import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import PostLink from "../components/postLink"
import HeroHeader from "../components/heroHeader"
import EventRow from "../components/events"

import * as style from "./index.module.css"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
    allGoogleEventsSheet: { nodes }
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  
  const EventRows = nodes
    .map(row => <EventRow key={row.id} event={row} />)

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader/>
      <section className={style.events}>
        <h1 id="events">Events <span role="img">🎉</span></h1>
        <table>
          <tr>
            <th>Was</th>
            <th>Wann</th>
            <th>Wo</th>
          </tr>
          {EventRows}
        </table>
      </section>
      <section className={style.blog}>
        <h1 id="beitraege">Beiträge</h1>
        <div className={style.grid}>
          {Posts}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date
            path
            title
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
    allGoogleEventsSheet {
      nodes {
        id
        wann
        was
        wo
      }
    }
  }
`