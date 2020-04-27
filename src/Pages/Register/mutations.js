import gql from 'graphql-tag';

export const registerUserMutation = gql`
  mutation createUser(
    $user: UserInput!
  ){
    createUser(
      user: $user
    ) {
      id
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

export const registerAddressMutation = gql`
  mutation createAddress(
    $address: AddressInput!
) {
    createAddress(
      address: $address
  ) {
      id
      street
      complement
      district
      city
      number
      zipcode
      state
      country
      place_id
      geometry
      latitude
      longitude
    }
  }
`;
