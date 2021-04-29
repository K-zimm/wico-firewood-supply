module.exports = {
  siteMetadata: {
    title: `Wisco Firewood Supply`,
    author: `Shane Peche`,
    description: `Premium firewood supplier in the Green Bay, WI area. Professionaly split and seasoned, guaranteed to burn great! Place your order today.`,
    siteUrl: `https://wiscofirewood.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
