module.exports = {
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
    `gatsby-plugin-sass`,
  ],
};
