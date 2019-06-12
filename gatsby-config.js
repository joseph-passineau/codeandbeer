module.exports = {
  siteMetadata: {
    title: `Code & Beer`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ['gatsby-remark-copy-linked-files', 'gatsby-remark-images']
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ]
}
