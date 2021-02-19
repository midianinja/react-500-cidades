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

export const updateAddressMutation = gql`
  mutation updateAddress(
    $address_id: ID!
    $address: AddressInput!
) {
  updateAddress(
    address_id: $address_id
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

export const updateUserMutation = gql`
  mutation updateUser(
    $user_id: ID!
    $user: UserInput!
  ) {
    updateUser(
      user_id: $user_id
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
