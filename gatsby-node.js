const { createFilePath } = require("gatsby-source-filesystem");

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

async function bakeMarkdownNodesIntoPages({ graphql, actions }) {
  // 1. filter ☕
  //    supplies: not allMarkdownRemark.nodes 💰
  const { data } = await graphql(`
    {
      supplies: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/index.md/" } }
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);
  //  console.log(data);

  // 2. bakingsong 🎵 🙀
  const bakingSong = require.resolve("./src/templates/pageTemplate.js");
  // 3. aromaNode 🍰
  // Loop over the supplies.nodes and forEach((aromaNode and bake a page
  data.supplies.nodes.forEach((aromaNode) => {
    console.log(aromaNode.fields.slug, "💀📄");

    const aromaNodePath =
      aromaNode.fields.slug === "/index/" ? "/" : aromaNode.fields.slug;

    actions.createPage({
      // A. aromaNodePath 🍰.🍓.🐛
      path: aromaNodePath,

      // B. bakingSong 🎵 🙀
      component: bakingSong,

      // C. catsbyId 😼🆔
      context: {
        catsbyId: aromaNode.id,
      },
    });
  });
}
// console.log({ data });

exports.onCreateNode = async (gatsbyUtils) => {
  await Promise.all([slugifyMarkdownRemarkNode(gatsbyUtils)]);
};

exports.createPages = async (gatsbyUtils) => {
  // create pages dynamically from any data source like for example see below:
  // wait for all promises to be resolved before finishing this function
  await Promise.all([bakeMarkdownNodesIntoPages(gatsbyUtils)]);
};
