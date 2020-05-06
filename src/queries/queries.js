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
  }`
