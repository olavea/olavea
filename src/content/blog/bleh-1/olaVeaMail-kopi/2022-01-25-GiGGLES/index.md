---
title: Coding
author: "@OlaHolstVea"
date: 2022-05-08
---

```js
// gatsby-node.js
// //              G. Get data later
// //              I. id 🌐 and internal 🐐
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;
  const ID = "UGq8cnNTbwI";
  createNode({
    id: createNodeId(`you-tube-${ID}`),
    internal: {
      type: `powTubeOemBed`,
      contentDigest: createContentDigest(ID),
    },
  });
};
// //              G. Get data
// //              G. Got data
const axios = require("axios");
// //              G. Get the axios-river to get data for us
const fetchEmbed = async (id) => {
  const ytUrl = `https://youtu.be/${id}`;
  const { data } = await axios.get("https://www.youtube.com/oembed", {
    params: {
      url: ytUrl,
    },
  });
  //console.log('⛵💀 Yo-Ho Yo-Ho a PiRATEs-node-', data, 'ID!💰');
  return data;
};
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;
  const ID = "UGq8cnNTbwI";
  const embedData = await fetchEmbed(id);
  // //              G. Got the embedData from axios-river
  createNode({
    id: createNodeId(`you-tube-${id}`),
    ...embedData,
    internal: {
      type: `powTubeOemBed`,
      contentDigest: createContentDigest(embedData),
    },
  });
};
// //              L. Loop (tales from the Loop
const YOUTUBE_ID_TREASURE = ["Bk1jonYPFD4", "TzJfepDjpzM", "UGq8cnNTbwI"];
const prepYouTubeNode = async (
  id,
  { actions: { createNode }, createNodeId, createContentDigest }
) => {
  const embedData = await fetchEmbed(id);
  createNode({
    id: createNodeId(`you-tube-${id}`),
    oembed: embedData,
    internal: {
      type: `powTubeOemBed`,
      contentDigest: createContentDigest(embedData),
    },
  });
};

exports.sourceNodes = async (params) => {
  await Promise.all(
    YOUTUBE_ID_TREASURE.map((id) => prepYouTubeNode(id, params))
  );
};
```

```js
const ID_GiGGLES = `UGq8cnNTbwI`;

const prepNode = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  // //              G. Get embedData later with axios-river g
  const unEmbedData = `video with GiGGLES`;
  // //              I.
  createNode({
    id: createNodeId(`pug-node-${ID_GiGGLES}`),
    ...unEmbedData,
    internal: {
      type: `unOemBed`,
      contentDigest: createContentDigest(ID_GiGGLES),
    },
  });
};

exports.sourceNodes = async (params) => {
  await Promise.all([
    prepNode(params),
    YOUTUBE_IDS.map((id) => prepYouTubeNode(id, params)),
  ]);
};
```

```js
// const fetchEmbed = async (id) => {
//   const ytUrl = `https://youtu.be/${id}`;
// // //              G.

//   const { data } = await axios.get("https://www.youtube.com/oembed", {
//     params: {
//       url: ytUrl,
//     },
//   });
//   return data;
// };
//const prepYouTubeNode = async (
//   id,
//   { actions: { createNode }, createNodeId, createContentDigest }
// ) => {
//  const embedData = await fetchEmbed(id);
//  createNode({
// //              I. id 🌐

// id: createNodeId(`you-tube-${id}`),
// oEmbed: embedData,
// internal: {
//   type: `YouTube`,
//   contentDigest: createContentDigest(embedData),
//     },
//   });
// };
// //              L. Loop (tales from the Loop
//   await Promise.all(
//     prepYouTubeNode(params)
//      // YOUTUBE_IDS.map((id) => prepYouTubeNode(id, params))
//   );

// YOUTUBE_IDS_TREASURE
// oembedData
// const axios = require("axios")
// // const POW_TUBE_ID = "UGq8cnNTbwI"
// const POW_TUBE_IDS_RED_STRING = ["UGq8cnNTbwI", "eRTJPIa39a4"]
// async function bakeOneNodeGetOneVideo({actions, createContentDigest}) {
//     for (PinkyPinksbyPiratyParrot of POW_TUBE_IDS_RED_STRING) {
//         const oembedVideo = await axios.get("https://www.youtube.com/oembed",
//         {params: {
//             url: `https://youtu.be/${PinkyPinksbyPiratyParrot}`,
//             maxwidth: 1554
//         }})

//         actions.createNode({
//         ...oembedVideo,
//         id: PinkyPinksbyPiratyParrot,
//         internal: {
//             contentDigest: createContentDigest(PinkyPinksbyPiratyParrot),
//             type: "powTubeOemBed"
//         }
//         })
//     }
// };

// exports.sourceNodes = async (params) => {
//     // Get 1 video ready to be sourced into our GraphQL-Gatsby-data river without sinking
//     await Promise.all([bakeOneNodeGetOneVideo(params)]);
// };
```

```js
// G
// GE
// GO
// R return
// GO
// embedData

// //              G. Get data later

// const fetchEmbed = async (id) => {
//   const ytUrl = `https://youtu.be/${id}`;
// // //              G.

//   const { data } = await axios.get("https://www.youtube.com/oembed", {
//     params: {
//       url: ytUrl,
//     },
//   });
//   return data;
// };
//const prepYouTubeNode = async (
//   id,
//   { actions: { createNode }, createNodeId, createContentDigest }
// ) => {
//  const embedData = await fetchEmbed(id);
//  createNode({
// //              I. id 🌐

// id: createNodeId(`you-tube-${id}`),
// oEmbed: embedData,
// internal: {
//   type: `YouTube`,
//   contentDigest: createContentDigest(embedData),
//     },
//   });
// };
// //              L. Loop (tales from the Loop
//   await Promise.all(
//     prepYouTubeNode(params)
//      // YOUTUBE_IDS.map((id) => prepYouTubeNode(id, params))
//   );

// YOUTUBE_IDS_TREASURE
// oembedData
// const axios = require("axios")
// // const POW_TUBE_ID = "UGq8cnNTbwI"
// const POW_TUBE_IDS_RED_STRING = ["UGq8cnNTbwI", "eRTJPIa39a4"]
// async function bakeOneNodeGetOneVideo({actions, createContentDigest}) {
//     for (PinkyPinksbyPiratyParrot of POW_TUBE_IDS_RED_STRING) {
//         const oembedVideo = await axios.get("https://www.youtube.com/oembed",
//         {params: {
//             url: `https://youtu.be/${PinkyPinksbyPiratyParrot}`,
//             maxwidth: 1554
//         }})

//         actions.createNode({
//         ...oembedVideo,
//         id: PinkyPinksbyPiratyParrot,
//         internal: {
//             contentDigest: createContentDigest(PinkyPinksbyPiratyParrot),
//             type: "powTubeOemBed"
//         }
//         })
//     }
// };

// exports.sourceNodes = async (params) => {
//     // Get 1 video ready to be sourced into our GraphQL-Gatsby-data river without sinking
//     await Promise.all([bakeOneNodeGetOneVideo(params)]);
// };
```

```js
const prepNode = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  // //              G. Get embedData later with axios-river g
  const unEmbedData = `video-with-GiGGLES`;
  // //              I. I prep a pug node
  createNode({
    id: createNodeId(`pug-node-${ID_GiGGLES}`),
    unEmbedData: unEmbedData,
    internal: {
      type: `pugNode`,
      contentDigest: createContentDigest(ID_GiGGLES),
    },
  });
};

//                 Ruby Catsby and Lilly Owlsby
//                 Baking pages
//                 with Cap'n Granny Sharksby's
//                 createPages hook
async function bakePugIntoGoodies({ graphql, actions }) {
  //                 console.log('Captain Granny Sharksbys createPages hook'); 💀
  //              1. bakingSong = Lilly the Bunny sings like a 🦢
  //                 the bakingSong by Cap'n Granny Sharksby 🦢
  const bakingSong = require.resolve("./src/templates/RecipeMarkdown.js");
  //                 Look for _ _ _ in http://localhost:8000/topping/Duct-Tape 👻
  //              2. supplies: data from Markdown files 🌲 in  and _ _ _ drawn
  const { data } = await graphql(`
    {
      supplies: allPugNode(sort: { order: ASC, fields: id }) {
        nodes {
          id
          strawberry: unEmbedData
        }
      }
    }
  `);
  //              3. Loop over the markdown nodes and for each create a page
  //                 turn them into pages with createPage
  data.supplies.nodes.forEach((ahoyGoodie, index) => {
    //                 console.log('Defer index:', index, ahoyGoodie);
    //              A. – B. – C. – DSG 🎩
    actions.createPage({
      //              A. «Ahoy! Goodie?!»
      //                 Cap'n Fox shouts and embarks. 🦊
      path: `${ahoyGoodie.strawberry}`,
      //              B. Owlsby sings badly
      //                 and bakes baby sharks. 🦈
      component: bakingSong,
      //              C. Catsby looks tasty
      //                 Fox gets hungry for kitten. 🐯
      context: {
        catsby: ahoyGoodie.id,
        fox: "Catsby looks tasty I getz hungry for kitten",
      },
      //              D. Don't Show Goodies to Fox
      //              and maybe get bitten. DSG–🎩
      //              catsby build and look for _ _ _ in terminal 💀
      //defer: index + 1 > 2,
      //              D. Data tree 🤖🌲
      //              E. Every node you must sort 💰
      //              F. Fields Forever `fields: ,` 🍓
      //              E. forEach index
      //              R. RRR! defer: index + 1 > 2 🎩

      //              How does Catsby help Lilly make an index of all the toppings?
      //              What is the way Lilly makes index travel from
      //              D. Data tree 🤖🌲
      //              R. RRR! defer: index + 1 > 2 🎩
    });
  });
}
exports.createPages = async (params) => {
  // create pages dynamically from any data source like for example see below:
  // wait for all promises to be resolved before finishing this function
  await Promise.all([bakePugIntoGoodies(params)]);
};
exports.sourceNodes = async (params) => {
  await Promise.all([
    prepNode(params),
    prepYouTubeNode(params),
    //iPrepNode(params),
    //        iPrepYouTubeNode(params),
    // YOUTUBE_IDS.map((id) =>
    //     prepYouTubeNode(id, params)
    // )
  ]);
};
```
