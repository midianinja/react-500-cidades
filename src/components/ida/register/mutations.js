import gql from 'graphql-tag';

export const updateUserMutation = gql`
  mutation updateUser(
    $user: UserInput!
    $user_id: ID!
  ) {
    updateUser(
      user: $user
      user_id: $user_id
    ) {
      id
    }
  }
`;

export const ignore = null;
