/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const suggestLocation = /* GraphQL */ `
  query SuggestLocation($query: String) {
    suggestLocation(query: $query) {
      countryName
      countryCode
      stateName
      stateCode
      city
      location {
        lat
        lon
      }
    }
  }
`;
export const getLocationByIP = /* GraphQL */ `
  query GetLocationByIP($query: String) {
    getLocationByIP(query: $query) {
      countryName
      countryCode
      stateName
      stateCode
      city
      location {
        lat
        lon
      }
    }
  }
`;
export const searchHelpRequests = /* GraphQL */ `
  query SearchHelpRequests(
    $location: LocationInput!
    $mi: Int
    $filter: SearchableHelpRequestFilterInput
    $sort: SearchableHelpRequestSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchHelpRequests(
      location: $location
      mi: $mi
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const getHelpRequest = /* GraphQL */ `
  query GetHelpRequest($id: ID!) {
    getHelpRequest(id: $id) {
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
export const listHelpRequests = /* GraphQL */ `
  query ListHelpRequests(
    $filter: ModelHelpRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHelpRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const helpRequestsByUser = /* GraphQL */ `
  query HelpRequestsByUser(
    $owner: String
    $dueDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelHelpRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    helpRequestsByUser(
      owner: $owner
      dueDate: $dueDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSitemap = /* GraphQL */ `
  query GetSitemap($id: ID!) {
    getSitemap(id: $id) {
      id
      sitemapLinks
      sitemapData
      createdAt
      updatedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const addressesByUser = /* GraphQL */ `
  query AddressesByUser(
    $owner: String
    $sortDirection: ModelSortDirection
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    addressesByUser(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getConvo = /* GraphQL */ `
  query GetConvo($id: ID!) {
    getConvo(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const commentsByHelpRequest = /* GraphQL */ `
  query CommentsByHelpRequest(
    $helpRequest: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByHelpRequest(
      helpRequest: $helpRequest
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
