/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Sam Xifaras'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Montserrat`,
                variants: [`300`, `400`, `500`],
              },
              {
                family: `Artifika`,
                variants: [`300`, `400`, `500`],
              }
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `markdown-posts`,
      },
    },
    `gatsby-transformer-remark`
  ]
}
