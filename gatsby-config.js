/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require(`dotenv`).config();

module.exports = {
  /* Your site config here */
  siteMetadata: require(`./site-meta-data.json`),
  siteMetadata: {
    siteUrl: `https://familienverein-wahlen.ch`
  },
  plugins: [
    // Add static assets before markdown files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/uploads`,
        name: `uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-source-google-spreadsheets`,
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        credentials: {
          type: `service_account`,
          project_id: process.env.PROJECT_ID,
          private_key_id: process.env.PRIVATE_KEY_ID,
          private_key: process.env.PRIVATE_KEY.replace(/(\\r)|(\\n)/g, `\n`),
          client_email: process.env.CLIENT_EMAIL,
          client_id: `109415772302064996163`,
          auth_uri: `https://accounts.google.com/o/oauth2/auth`,
          token_uri: `https://oauth2.googleapis.com/token`,
          auth_provider_x509_cert_url: `https://www.googleapis.com/oauth2/v1/certs`,
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.PROJECT_ID}%40appspot.gserviceaccount.com`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Familienverein Wahlen`,
        short_name: `Familienverein Wahlen`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#eb5a32`,
        display: `standalone`,
        icon: `static/uploads/icon.svg`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `uploads`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1080,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Familienverein Wahlen RSS Feed",
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '6',
        matomoUrl: 'https://stats.pixelstrol.ch',
        siteUrl: 'https://accessible-pdf.info'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
          name: `Familienverein Wahlen`,
          short_name: `Familienverein Wahlen`,
          start_url: `/`,
          lang: `de`,
          icon: `static/uploads/icon.svg`,
          background_color: `#f8f9fa`,
          theme_color: `#eb5b33`,
          display: `standalone`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    // siteURL is a must for sitemap generation
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
};
