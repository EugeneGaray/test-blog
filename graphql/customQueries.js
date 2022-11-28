export const getCustomConvo = /* GraphQL */ `
  query GetConvo(
      $id: ID!, 
      $limit: Int,
      $nextToken: String
    ) {
    getConvo(id: $id) {
      id
      name
      members
      createdAt
      updatedAt
      messages (
        sortDirection: DESC, 
        limit: $limit,
        nextToken: $nextToken
      ) {
        items {
          id
          authorId
          content
          messageConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      associated {
        items {
          id
          convoLinkUserId
          convoLinkConversationId
          createdAt
          updatedAt
          user {
            name
            id
            profilePicture {
              bucket
              key
              region
            }
           }
        }
        nextToken
      }
    }
  }
`;

export const getCustomUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      conversations {
        items {
          id
          convoLinkConversationId
          convoLinkUserId
          createdAt
          updatedAt
          conversation {
            id
            createdAt
            name
            associated {
              items {
                user {
                  id
                  name
                  profilePicture {
                    bucket
                    key
                    region
                  }
                }
              }
            }
            members
            messages(sortDirection: DESC, limit: 1) {
              items {
                id
                content
                messageConversationId
                createdAt
                updatedAt
                authorId
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;

export const getUserConvo = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      conversations {
        items {
          id
          conversation {
            id
            members
          }
        }
        nextToken
      }
    }
  }
`;