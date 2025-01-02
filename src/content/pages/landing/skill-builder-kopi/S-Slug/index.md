---
title: POW!
author: "@OlaHolstVea"
date: 2022-05-08
---

```js
// POW!-site/gatsby-node.js
async function slugifyMarkdownRemarkNode({ actions, node, getNode }) {
  // 🔨💰🍓
  con
  // my md type of node ... internal
  if ( ) {
    // 🐛 = 🔨 + 📁 + 🎢 ({ node, getNode })
  con
    // 🔨💰🍓 ({ 🐛, 💰, 🐛 })
    cre
      na
      no
      va
    })
  }
};

```

Timestamp: 31:\_ \_

```js
// POW!-site / src / pages / {MarkdownRemark.fields__slug}.js
import React from "react";
import { graphql } from "gatsby";
const ComponentName = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { title, sections } = frontmatter;
  return <h1>{title}</h1>;
};

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
export default ComponentName;
```

```js
const ComponentName = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, sections } = frontmatter;
  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
export default ComponentName;
// POW!-site / src /
// pages / {MarkdownRemark.fields__slug}.js 32: _ _
```

Timestamp: 33:\_ \_
Minus <PageLayout>

```js
<PageLayout>
```

34: \_ \_

```js
const ComponentName = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, sections } = frontmatter;
  return (
    <>
    <div className="container">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
  };

export const query = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {        title      }    }  }`;
export default ComponentName;
// POW!-site / src /
// pages / {MarkdownRemark.fields__slug}.js

34:_ _
OLAVEA
.COM/S
-SKILL


```

37: \_ \_

```js
export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        sections {
          title
          body {
            childMarkdownRemark {
              html
            }
          }
          cta {
            path
            label
          }
        }
      }
    }
  }
`;
```

38: \_ \_

```js
import React from "react";
import { graphql } from "gatsby";

const ComponentName = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, sections } = frontmatter;
  return (
    <>
      <div className="container">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {(sections || []).map((section) => {
          const { title } = section;
          const { html } = section.body.childMarkdownRemark;
          return (
            <section>
              <h2>{title}</h2>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </section>
          );
        })}
      </div>
    </>
  );
};
```

37: \_ \_

```js

```

37: \_ \_

```js

```

37: \_ \_

```js

```

37: \_ \_

```js

```

37: \_ \_

```js

```

37: \_ \_

```js

```

// import React from "react";
// import { graphql } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

// import { PageLayout } from "../ui-elements/page-layout/PageLayout"
// 13 <PageLayout title={title}>
// import { Claim } from "../ui-elements/claim/Claim"
// 31 {custom === "claim" && <Claim />}
// const ComponentName = ({ data }) => {
// const { frontmatter } = data.markdownRemark;
// const { title, sections } = frontmatter;

// return (
// <>
// {(sections || []).map((section, index) => {
// const { title, plain, custom, img } = section;
// const { html } = section.md?.childMarkdownRemark || {};
// const image = getImage(img?.file);

// console.log(img);

// return (
// <section key={index} className="container">
// {title && <h2>{title}</h2>}
// {image && (
// <GatsbyImage
// class="border border-warning mb-4"
// image={image}
// alt={img?.alt}
// />
// )}

// {plain && (
// <div>
// <p class="lead">{plain}</p>
// </div>
// )}
// {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
// </section>
// );
// })}
// </>
// );
// };

// export const query = graphql`//   query($id: String) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title
//         sections {
//           custom
//           plain
//           title
//           img {
//             file {
//               childImageSharp {
//                 gatsbyImageData(width: 1200)
//               }
//             }
//             alt
//           }
//           md {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//       }
//     }
//   }
//`;

// export default ComponentName;

```js

```
