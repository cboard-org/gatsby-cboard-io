const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const locales = require('./i18n/locales');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const name = path.basename(node.fileAbsolutePath, `.md`);
    const slug = createFilePath({ node, getNode, basePath: 'content/posts/' });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}


exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // For each page, we’re deleting it, than creating it again for each
  // language passing the locale to the page context
  return new Promise(resolve => {
    deletePage(page);

    Object.keys(locales).map(lang => {
      const isDefault = locales[lang].default || false;

      const localizedPath = isDefault
        ? page.path
        : locales[lang].path + page.path;

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
          isDefault,
        },
      });
    });

    resolve();
  });
};