import React from "react"
import Helmet from 'react-helmet'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import * as style from "./blogTemplate.module.css"

const Article = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title} | {post.frontmatter.title}</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
        <article className={style.post}>
          <header className={style.header}>
            <h1 className={style.title}>{post.frontmatter.title}</h1>
            <p className={style.meta}>
              publiziert am&nbsp;
              {new Date(post.frontmatter.date).toLocaleDateString("de-DE", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
            </p>

            {!!post.frontmatter.thumbnail && (
              <figure className={style.thumbnail}>
                <Img
                  fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                  alt={post.frontmatter.title}
                />
              </figure>
            )}
          </header>
          <div
            className={style.content}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
    </Layout>
  )
}

export default Article;

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        title
        path
        date
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
