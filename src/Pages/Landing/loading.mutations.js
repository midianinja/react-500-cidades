import gql from 'graphql-tag';

export const newsLetterMutation = gql`
  mutation createNewsLetter(
    $user: NewsLetterInput!
  ) {
    createNewsLetter(
      user: $user
    ) {
      email
    }
  }
`;

export const todelete = '';
