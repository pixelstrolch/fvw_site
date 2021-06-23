import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

import * as style from "./blogTemplate.module.css";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data; // data.markdownRemark holds your post data
  const { siteMetadata } = site;
  const { frontmatter, html } = markdownRemark;
  const image = getImage(frontmatter.featuredImage.thumbnail);
  return (
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} | {siteMetadata.title}
        </title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <article className={style.post}>
        <header className={style.header}>
          <h1 className={style.title}>{frontmatter.title}</h1>
          <p className={style.meta}>
            publiziert am&nbsp;
            {new Date(frontmatter.date).toLocaleDateString("de-DE", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
          </p>

          {frontmatter.featuredImage.thumbnail && (
            <figure className={style.thumbnail}>
              <GatsbyImage image={image} alt={frontmatter.featuredImage.alt} />
            </figure>
          )}
        </header>
        <div
          className={style.content}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark( fields: { slug: { eq: $slug } } ) {
      html
      fields {
        slug
      }
      frontmatter {
        date
        title
        featuredImage {
          thumbnail {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
          alt
        }
        metaDescription
      }
    }
  }
`;
