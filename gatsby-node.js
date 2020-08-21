const path = require(`path`)
const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        return result
      })
    )
  })
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const getDocuments = makeRequest(
    graphql,
    `
    {
      allStrapiPost {
        nodes {
          image {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                src
              }
            }
          }
          content
          createdAt
          id
          postStatus
          publishDate
          slug
          title
          updatedAt
        }
      }
      allStrapiService {
        nodes {
          description
          name
          id
          slug
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiPost.nodes.map(node => {
      createPage({
        path: `/post/${node.slug}`,
        component: path.resolve(`src/templates/post.js`),
        context: node,
      })
    })
    // Create pages for each article.
    result.data.allStrapiService.nodes.map(node => {
      createPage({
        path: `/services/${node.slug}`,
        component: path.resolve(`src/templates/service.js`),
        context: node,
      })
    })
  })
  // Query for articles nodes to use in creating pages.
  return getDocuments
}
