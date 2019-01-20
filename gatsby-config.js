module.exports = {
  siteMetadata: {
    title: "Mitchell McKenzie",
    author: "Mitchell McKenzie",
    description: "A perosnal site for Mitchell McKenzie. Edited from a Gatsby.js V2 Starter based on Dimension by HTML5 UP.",
    email: `mitchell.mckenzie95@gmail.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}