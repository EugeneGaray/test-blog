const PostFeaturedImage = `
  featuredImage {
    node {
      sourceUrl
      caption
      altText
    }
  }
`;

const PostCardContent = `
  title
  slug
  id
  excerpt
  ${PostFeaturedImage}
  categories {
    edges {
      node {
        id
        name
      }
    }
  }
`;

export const getAllPostsExcerpt = /* GraphQL */ `query getAllPostsExcerpt {
  posts(where: {status: PUBLISH}) {
    edges {
      node {
        ${PostCardContent}
        categories {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
  categories(where: {hideEmpty: false}) {
    edges {
      node {
        name
        id
      }
    }
  }
}
`;

export const getPostsExcerptByCategories = /* GraphQL */ `query getPostsExcerptByCategories ($categoriesList: [ID]!) {
  posts(where: {categoryIn: $categoriesList, status: PUBLISH}) {
    edges {
      node {
        ${PostCardContent}
        categories {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
}
`;

export const getPostData = /* GraphQL */ `query getPostData($id: ID!, $idType: PostIdType!) {
  post(id: $id, idType: $idType) {
    title
    content
    date
    ${PostFeaturedImage}
    author {
      node {
        firstName
        avatar {
          url
        }
        email
      }
    }
  }
}
`;

export const searchAllPosts = /* GraphQL */ `query searchAllPosts ($query: String) {
  posts(where: {search: $query, status: PUBLISH}) {
    edges {
      node {
        ${PostCardContent}
        categories {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
}
`;
