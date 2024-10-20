import { resolve } from 'path';

export const createExpositions = async ({createPage, graphql}) => {
    const allStrapiExposition: {
        errors?: any;
        data?: { allMdx: { nodes: [] } };
      } = await graphql(`
    query {
        allStrapiExposition {
            nodes {
                titre
                date(formatString: "DD MMMM, YYYY",  locale:"fr")
                id
                lieu
                organisateur
                content {
                    data {
                        childMarkdownRemark {
                            rawMarkdownBody
                        }
                    }
                    medias {
                        src
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: FULL_WIDTH,
                                    transformOptions: {
                                        fit: INSIDE
                                    },
                                    placeholder: NONE
                                )
                            }
                        }
                        url
                        alternativeText
                    }
                }
                couverture {
                    localFile {
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
            }
        }
    }
    `);

    const postTemplate = resolve(__dirname, '..', 'src/templates/exposition.tsx');

    allStrapiExposition.data.allStrapiExposition.nodes.forEach(node => {
        createPage({
            path: '/exposition/' + node.id,
            component: postTemplate, //`${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            context: node
          });    
    });

    const expositionSummary = allStrapiExposition.data.allStrapiExposition.nodes.map(node =>
        {
            return {
                id: node.id,
                title: node.titre,
                image: node.couverture[0].localFile.childImageSharp.gatsbyImageData
            }
        })

    createPage({
        path: '/expositions',
        component: resolve(__dirname, '..', 'src/templates/expositions.tsx'),
        context: {expositions: expositionSummary}
      }); 
}