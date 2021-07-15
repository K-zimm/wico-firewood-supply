require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Wisco Firewood Supply`,
    author: `Shane Peche`,
    description: `Premium firewood supplier in the Green Bay, WI area. Professionaly split and seasoned, guaranteed to burn great! Place your order today.`,
    siteUrl: `https://wiscofirewood.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wisco Firewood Supply`,
        short_name: `Wisco Firewood`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ef442d`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: process.env.DATOCMS_API,

        // The project environment to read from. Defaults to the primary environment:
        environment: `main`,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    'gatsby-transformer-remark',
    'gatsby-plugin-smoothscroll',
  ],
};
