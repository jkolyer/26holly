import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `26 Holly Home Guide`,
    siteUrl: `https://jkolyer.github.io/26holly`
  },
  pathPrefix: "26holly",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-theme-ui", "gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-plugin-theme-ui',
    options: {
      "prismPreset": "night-owl",
      "preset": "@theme-ui/preset-funk"
    },
    __key: "pages"
  }]
};

export default config;
