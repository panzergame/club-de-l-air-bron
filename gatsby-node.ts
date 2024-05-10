import { resolve } from 'path';

export const createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const allMdx: {
        errors?: any;
        data?: { allMdx: { nodes: [] } };
      } = await graphql(`
    query {
        allMdx {
            nodes {
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY",  locale:"fr")
                }
                id
                internal {
                    contentFilePath
                }
            }
        }
    }
    `);

    const postTemplate = resolve(__dirname, 'src/templates/article.tsx');

    allMdx.data?.allMdx.nodes.forEach(node => {
        createPage({
            path: '/article/' + node.id,
            component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            context: node
          });    
    });
}

