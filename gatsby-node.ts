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

    const domainesMeta = [
        {title: 'Avions', tag: 'avion'},
        {title: 'Blindé', tag: 'blinde'},
        {title: 'Voiture', tag: 'voiture'}
    ]
    const domaines = await Promise.all(domainesMeta.map(async domaine =>
        { 
            const imageData = await graphql(`
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

            const echellesData = await graphql(`
                query {
                    allMdx (filter: {
                        frontmatter: { domaine: { eq: "${domaine.tag}" }}
                    })
                    {
                        distinct(field: { frontmatter: { echelle: SELECT } })
                    }
              }`);
            const echelles = echellesData.data.allMdx.distinct.map(data => ({ title: data, tag: data.replace('/', '_') })) 
            
            return { title: domaine.title, tag: domaine.tag, echelles: echelles, image: imageData.data.file}
        }
    ))

    createPage({
        path: '/galeries',
        component: resolve(__dirname, 'src/templates/galeries.tsx'),
        context: domaines
      }); 


    for (const domaine of domaines) {
        for (const echelle of domaine.echelles) {
            const articlesData = await graphql(`
            query {
                allMdx (filter: {
                    frontmatter: {
                        echelle: { eq: "${echelle.title}" },
                        domaine: { eq: "${domaine.tag}" }
                    }
                })
                {
                    nodes {
                        frontmatter {
                            title
                            couverture {
                                childImageSharp {
                                    gatsbyImageData(
                                        transformOptions: {
                                            fit: INSIDE
                                        },
                                        placeholder: NONE
                                    )
                                }
                            }
                        }
                        id
                    }
                }
            }`)

            const articles = articlesData.data.allMdx.nodes.map(data => {
                 return { title: data.frontmatter.title, id: data.id, image: data.frontmatter.couverture?.childImageSharp?.gatsbyImageData }
            })

            createPage({
                path: `/categorie/${domaine.tag}/${echelle.tag}`,
                component: resolve(__dirname, 'src/templates/categorie.tsx'),
                context: {domaine: domaine, echelle: echelle, articles: articles}
              }); 
        }
    }
}

