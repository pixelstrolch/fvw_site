import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as style from "./postLink.module.css";

const Posts = ({ post }) => (
  <article className={style.card}>
    {post.frontmatter.featuredImage.thumbnail && (
      <Link to={post.frontmatter.path} className={style.thumbnailLink}>
        <GatsbyImage
          image={getImage(post.frontmatter.featuredImage.thumbnail)}
          aspectRatio={16 / 9}
          alt={post.frontmatter.title}
        />
      </Link>
    )}
    <header>
      <Link to={post.frontmatter.path}>
        <h2 className={style.title}>{post.frontmatter.title}</h2>
      </Link>
      <p className={style.meta}>
        {new Date(post.frontmatter.date).toLocaleDateString("de-DE", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}{" "}
      </p>
    </header>
  </article>
);

export default Posts;
