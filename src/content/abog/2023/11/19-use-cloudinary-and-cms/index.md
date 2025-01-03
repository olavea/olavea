---
title: Customizing the GraphQL Schema in Gatsby JS
author: "@OlaHolstVea"
date: 2023-11-19
---

## Creating type definitions

## Fixing field types

To ensure that the field will always be of Date type, you can provide explicit type definitions to Gatsby with the createTypes action. It accepts type definitions in GraphQL Schema Definition Language:

```js
// gatsby-node,js

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type AuthorJson implements Node {
      joinedAt: Date
    }
  `
  createTypes(typeDefs)
}
```

```js
```


## I moved  to the bottom of gatsby-config.js



I moved `function createCoverNode` almost to the  bottom of gatsby-node


I moved `exports.onCreateNode` below `exports.sourceNodes`


I moved `exports.createSchemaCustomization` above all the other `exports` `

## GraphQL API

A great Gatsby advantage is the built-in data layer that combines all data sources you configure. Data is collected at [build time](https://www.gatsbyjs.com/docs/glossary#build) and automatically assembled into a [schema](https://www.gatsbyjs.com/docs/glossary#schema) that defines how data can be queried throughout your site.

## Advanced customizations
You can customize sourced data in the GraphQL layer and create relationships between nodes with the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/).

The GraphQL schema can be customized for more advanced use cases: read more about it in the [schema customization API docs](https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/).