import { resolve } from 'path';

export const createArticles = async ({createPage, graphql}) => {
    const allStrapiArticle: {
        errors?: any;
        data?: { allMdx: { nodes: [] } };
      } = await graphql(`
    query {
        allStrapiArticle {
            nodes {
                titre
                date(formatString: "DD MMMM, YYYY",  locale:"fr")
                id
                auteur
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
                                thumb: gatsbyImageData(
                                    width: 270
                                    height: 270
                                    placeholder: BLURRED
                                )
                                full: gatsbyImageData(
                                    layout: FULL_WIDTH
                                )
                            }
                        }
                        url
                        alternativeText
                    }
                }
            }
        }
    }
    `);

    const postTemplate = resolve(__dirname, '..', 'src/templates/article.tsx');

    allStrapiArticle.data?.allStrapiArticle.nodes.forEach(node => {
        createPage({
            path: '/article/' + node.id,
            component: postTemplate, //`${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
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
                    allStrapiArticle(filter: {
                        domaine: { eq: "${domaine.tag}" }
                    })
                    {
                        distinct(field: { echelle: SELECT } )
                    }
              }`);
            const echelles = echellesData.data?.allStrapiArticle.distinct.map(data => ({ title: data, tag: data.replace('/', '_') })) 
            
            return { title: domaine.title, tag: domaine.tag, echelles: echelles, image: imageData.data.file}
        }
    ))

    createPage({
        path: '/galeries',
        component: resolve(__dirname, '..', 'src/templates/galeries.tsx'),
        context: domaines
      }); 


    for (const domaine of domaines) {
        for (const echelle of domaine.echelles) {
            const articlesData = await graphql(`
                query {
                    allStrapiArticle(filter: {
                        echelle: { eq: "${echelle.title}" },
                        domaine: { eq: "${domaine.tag}" }
                    })
                    {
                        nodes {
                            id
                            echelle
                            domaine
                            titre
                            couverture {
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData(
                                            width: 270
                                            height: 270
                                            placeholder: NONE
                                        )
                                    }
                                }
                            }
                        }
                    }
                }`)

            const articles = articlesData.data.allStrapiArticle.nodes.map(data => {
                return { title: data.titre, id: data.id, image: data.couverture[0].localFile.childImageSharp.gatsbyImageData}
            })

            createPage({
                path: `/categorie/${domaine.tag}/${echelle.tag}`,
                component: resolve(__dirname, '..', 'src/templates/categorie.tsx'),
                context: {domaine: domaine, echelle: echelle, articles: articles}
              });
        }
    }
}