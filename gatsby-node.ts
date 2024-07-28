import { resolve } from 'path';
import * as express from 'express';

export const onCreateDevServer = ({ app }) => {
   app.use("/admin", express.static("asset/admin"));
};

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

    const echelles = [
        {title: '1/72', 'tag': '1_72'},
        {title: '1/48', 'tag': '1_72'},
        {title: '1/35', 'tag': '1_72'},
        {title: '1/32', 'tag': '1_72'}
    ]
    const domainesMeta = [
        {title: 'Avions', tag: 'avion'},
        {title: 'Blindé', tag: 'blinde'},
        {title: 'Voiture', tag: 'voiture'}
    ]
    const domaines = await Promise.all(domainesMeta.map(async domaine =>
        { 
            let imageData = await graphql(`
                    query {
                        file(relativePath: { eq: "categories/${domaine.tag}.png" } ) {
                            childImageSharp {
                                gatsbyImageData(
                                    transformOptions: {
                                        fit: INSIDE
                                    },
                                    placeholder: NONE
                                )
                            }
                        }
                    }`
                )
            
            return { title: domaine.title, tag: domaine.tag, echelles: echelles, image: imageData.data.file}
        }
    ))

    createPage({
        path: '/galeries',
        component: resolve(__dirname, 'src/templates/galeries.tsx'),
        context: domaines
      }); 
}

