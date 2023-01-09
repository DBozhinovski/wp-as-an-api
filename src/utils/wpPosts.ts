export const fetchPosts = async ({ length = 10 }: { length?: number }) => {
  return fetch('http://localhost:8081/graphql', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      query: `
      query fetchPosts($length:Int) {
        posts (
          first: $length, 
          where:{ orderby: { field: DATE, order: DESC } }
        ) {
          nodes {
            id
            title
            date
            slug
            excerpt
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
            categories {
              edges {
                node {
                  id
                 	name
                }
              }
            }
            content
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
      `,
      variables: {
        length,
      },
    })
  });
}