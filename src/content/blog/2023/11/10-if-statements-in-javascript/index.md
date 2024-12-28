---
title: If Statements
author: "@OlaHolstVea"
date: 2023-11-10
---


## If Statements In JavaScript

(If Statement inside gatsby-node.js in JavaScript)[https://pbs.twimg.com/media/F-krR_tWcAAnI_I?format=jpg&name=large]

Ahoy 🏴‍☠️-Dev! 🥳👍
I tried out:

```js
// gatsby-node.js


async function slugifyMarkdownRemarkNode(gatsbyUtils) {
  const { actions, node, getNode } = gatsbyUtils;
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      name: "slug",
      node,
      value: slug,
    });
  }
}

```

## Day 38 of #100daysofjavascript

Check out [https://wesbos.com/javascript](https://wesbos.com/javascript/07-logic-and-flow-control/if-statements-function-returns-truthy-falsy) by
[@wesbos](https://twitter.com/wesbos)
 for more about if statements in JavaScript
Price: $0

Because #javascript will never die 💪🥳🏴‍☠️
