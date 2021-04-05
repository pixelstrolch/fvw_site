import React from "react"
import { Link } from "gatsby"

import * as style from './postLink.module.css' 

const PostLink = ({ post }) => (
  <article className={style.card}>
    {!!post.frontmatter.thumbnail && (
      <Link to={post.frontmatter.path} className={style.thumbnailLink}>
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title} />
      </Link>
    )}
    <header>
      <Link to={post.frontmatter.path}>
        <h2 className={style.title}>{post.frontmatter.title}</h2>
      </Link>
      <p className={style.meta}>{post.frontmatter.date}</p>
    </header>
  </article>
)
export default PostLink
