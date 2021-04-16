/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config()

module.exports = {
  /* Your site config here */
  siteMetadata: require("./site-meta-data.json"),
  plugins: [
    // Add static assets before markdown files
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/uploads`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'posts',
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    // {
    //   resolve: 'gatsby-source-google-spreadsheets',
    //   options: {
    //     spreadsheetId: '1p92aEK19ttxisfSZOux_qHJyPXyF04wybkYZdpLgEwA',
    //     // apiKey: '109415772302064996163'
    //     // Or
    //     credentials: require('./spreadsheet-bd107c22a3e1.json')
    //   }
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Familienverein Wahlen`,
        short_name: `Familienverein Wahlen`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#eb5a32`,
        display: `standalone`,
        icon: "static/uploads/icon.png",
      },
    },
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
             options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    // siteURL is a must for sitemap generation
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
