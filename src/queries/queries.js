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
        state
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