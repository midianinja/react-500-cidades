import gql from 'graphql-tag';

export const allUsersQuery = gql`
query 
  allUsers(
    $user: UserInput!
    $paginator: PaginatorInput
  ){
    allUsers(
      user: $user
      paginator: $paginator
    ){
      id
      name
      job
      birth_date
      sexual_orientation
      phone
      email
      biography
      cover_image  {
        mimified
      }
      profile_image  {
        mimified
      }
      skills
      address{
        city
        country
        place_id
        state
        geometry
        street
        complement
        district
        zipcode
        latitude
        longitude
      }
    }
  }`

  export const oneUserQuery = gql`
  query 
  oneUser(
    $user: UserInput!
  ){
    oneUser(
      user: $user
    ){
      id
      name
      job
      phone
      email
      instagram
      sexual_orientation
      facebook
      site_address
      birth_date
      genre
      race
      biography
      cover_image  {
        mimified
      }
      profile_image  {
        mimified
      }
      skills
      address{
        city
        country
        place_id
        state
        geometry
        street
        complement
        district
        zipcode
        latitude
        longitude
      }
    }
  }
  `
  
  export const searchUserQuery = gql`
  query 
  searchUser(
    $key_word: String!
  ){
    searchUser(
      key_word: $key_word
    ){
      id
      name
      job
      phone
      email
      biography
      profile_image  {
        mimified
      }
      skills
      address{
        city
        state
        street
        complement
        district
        zipcode
        latitude
        longitude
      }
    }
  }
  `