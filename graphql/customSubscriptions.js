export const onManageMessage = /* GraphQL */ `
  subscription OnManageMessage($messageConversationId: ID!) {
    onManageMessage(messageConversationId: $messageConversationId) {
      id
      authorId
      content
      messageConversationId
      createdAt
      updatedAt
    }
  }
`;

export const onCreateDirectMessage = /* GraphQL */ `
  subscription OnCreateDirectMessage($recipientId: ID!) {
    onCreateDirectMessage(recipientId: $recipientId) {
      id
      content
      messageConversationId
      recipientId
      createdAt
      author {
        id
        email
        name
        profilePicture {
          bucket
          region
          key
        }
      }
    }
  }
`;