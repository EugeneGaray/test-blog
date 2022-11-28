/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConvoLink = /* GraphQL */ `
  subscription OnCreateConvoLink($convoLinkUserId: ID!) {
    onCreateConvoLink(convoLinkUserId: $convoLinkUserId) {
      id
      convoLinkUserId
      convoLinkConversationId
      createdAt
      updatedAt
      user {
        id
        email
        name
        bio
        location {
          lat
          lon
        }
        city
        country
        favoriteRequests
        profilePicture {
          bucket
          region
          key
        }
        emailNotifications
        locale
        createdAt
        updatedAt
        messages {
          nextToken
        }
        conversations {
          nextToken
        }
      }
      conversation {
        id
        name
        members
        createdAt
        updatedAt
        messages {
          nextToken
        }
        associated {
          nextToken
        }
      }
    }
  }
`;
export const onManageMessage = /* GraphQL */ `
  subscription OnManageMessage($messageConversationId: ID!) {
    onManageMessage(messageConversationId: $messageConversationId) {
      id
      authorId
      content
      messageConversationId
      recipientId
      createdAt
      updatedAt
      author {
        id
        email
        name
        bio
        location {
          lat
          lon
        }
        city
        country
        favoriteRequests
        profilePicture {
          bucket
          region
          key
        }
        emailNotifications
        locale
        createdAt
        updatedAt
        messages {
          nextToken
        }
        conversations {
          nextToken
        }
      }
      conversation {
        id
        name
        members
        createdAt
        updatedAt
        messages {
          nextToken
        }
        associated {
          nextToken
        }
      }
    }
  }
`;
export const onCreateDirectMessage = /* GraphQL */ `
  subscription OnCreateDirectMessage($recipientId: ID!) {
    onCreateDirectMessage(recipientId: $recipientId) {
      id
      authorId
      content
      messageConversationId
      recipientId
      createdAt
      updatedAt
      author {
        id
        email
        name
        bio
        location {
          lat
          lon
        }
        city
        country
        favoriteRequests
        profilePicture {
          bucket
          region
          key
        }
        emailNotifications
        locale
        createdAt
        updatedAt
        messages {
          nextToken
        }
        conversations {
          nextToken
        }
      }
      conversation {
        id
        name
        members
        createdAt
        updatedAt
        messages {
          nextToken
        }
        associated {
          nextToken
        }
      }
    }
  }
`;
export const onCreateHelpRequest = /* GraphQL */ `
  subscription OnCreateHelpRequest {
    onCreateHelpRequest {
      id
      title
      description
      category
      dueDate
      address
      location {
        lat
        lon
      }
      photos
      owner
      createdAt
      status
      updatedAt
    }
  }
`;
export const onUpdateHelpRequest = /* GraphQL */ `
  subscription OnUpdateHelpRequest {
    onUpdateHelpRequest {
      id
      title
      description
      category
      dueDate
      address
      location {
        lat
        lon
      }
      photos
      owner
      createdAt
      status
      updatedAt
    }
  }
`;
export const onDeleteHelpRequest = /* GraphQL */ `
  subscription OnDeleteHelpRequest {
    onDeleteHelpRequest {
      id
      title
      description
      category
      dueDate
      address
      location {
        lat
        lon
      }
      photos
      owner
      createdAt
      status
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      email
      name
      bio
      location {
        lat
        lon
      }
      city
      country
      favoriteRequests
      profilePicture {
        bucket
        region
        key
      }
      emailNotifications
      locale
      createdAt
      updatedAt
      messages {
        items {
          id
          authorId
          content
          messageConversationId
          recipientId
          createdAt
          updatedAt
        }
        nextToken
      }
      conversations {
        items {
          id
          convoLinkUserId
          convoLinkConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($owner: String!) {
    onCreateAddress(owner: $owner) {
      id
      title
      address
      location {
        lat
        lon
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($owner: String!) {
    onUpdateAddress(owner: $owner) {
      id
      title
      address
      location {
        lat
        lon
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($owner: String!) {
    onDeleteAddress(owner: $owner) {
      id
      title
      address
      location {
        lat
        lon
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      content
      helpRequest
      owner
      authorName
      authorPicture {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
