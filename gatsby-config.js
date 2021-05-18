module.exports = {
  siteMetadata: {
    title: "ryanbekhen",
    author: `@ryanbekhen`,
    image: `/images/profile.jpeg`,
    url: "https://ryanbekhen.me",
  },
  plugins: [
    `gatsby-theme-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
};
