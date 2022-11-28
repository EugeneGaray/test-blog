/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addFeedback = /* GraphQL */ `
  mutation AddFeedback(
    $input: CreateFeedbackInput!
    $condition: ModelFeedbackConditionInput
  ) {
    addFeedback(input: $input, condition: $condition) {
      id
      email
      name
      message
      createdAt
      updatedAt
    }
  }
`;
export const updateConvoLink = /* GraphQL */ `
  mutation UpdateConvoLink(
    $input: UpdateConvoLinkInput!
    $condition: ModelConvoLinkConditionInput
  ) {
    updateConvoLink(input: $input, condition: $condition) {
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
export const createHelpRequest = /* GraphQL */ `
  mutation CreateHelpRequest(
    $input: CreateHelpRequestInput!
    $condition: ModelHelpRequestConditionInput
  ) {
    createHelpRequest(input: $input, condition: $condition) {
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
export const updateHelpRequest = /* GraphQL */ `
  mutation UpdateHelpRequest(
    $input: UpdateHelpRequestInput!
    $condition: ModelHelpRequestConditionInput
  ) {
    updateHelpRequest(input: $input, condition: $condition) {
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
export const deleteHelpRequest = /* GraphQL */ `
  mutation DeleteHelpRequest(
    $input: DeleteHelpRequestInput!
    $condition: ModelHelpRequestConditionInput
  ) {
    deleteHelpRequest(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
export const createConvo = /* GraphQL */ `
  mutation CreateConvo(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConvo(input: $input, condition: $condition) {
      id
      name
      members
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
      associated {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createConvoLink = /* GraphQL */ `
  mutation CreateConvoLink(
    $input: CreateConvoLinkInput!
    $condition: ModelConvoLinkConditionInput
  ) {
    createConvoLink(input: $input, condition: $condition) {
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
export const addComment = /* GraphQL */ `
  mutation AddComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    addComment(input: $input, condition: $condition) {
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
export const addWebCrawlerPage = /* GraphQL */ `
  mutation AddWebCrawlerPage(
    $input: CreateWebCrawlerPagesInput!
    $condition: ModelWebCrawlerPagesConditionInput
  ) {
    addWebCrawlerPage(input: $input, condition: $condition) {
      id
      url
      owner
      address
      date
      description
      href
      path
      title
      createdAt
      updatedAt
    }
  }
`;
