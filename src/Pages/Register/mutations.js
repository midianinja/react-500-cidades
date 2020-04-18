import gql from 'graphql-tag';

export const registerUserMutation = gql`
  mutation createUser(
    $user: UserInput!
  ){
    createUser(
      user: $user
    ) {
      id
      tipology
      name
      profile_image {
        mimified
      }
      cover_image {
        mimified
      }
      biography
      skills
      email
      instagram
      facebook
      phone
      job
      site_address
      birth_date
      genre
      sexual_orientation
      race
    }
  }
`;
