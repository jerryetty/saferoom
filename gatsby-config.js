module.exports = {
  siteMetadata: {
    title: `Saferoom`,
    description: `What is it that fuels you? For me, it’s SafeRoom And the desire for peace of mind. I love writing about my passions, what interests me, what interests others and sharing my thoughts with my readers.`,
    author: `@jerryetty`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "https://saferoom-cms.herokuapp.com",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "post",
          "category",
          "comment",
          "service",
          "appointment",
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Saferoom`,
        short_name: `saferoom`,
        start_url: `/`,
        background_color: `#240026`,
        theme_color: `#240026`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
