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
      profile_image  {
        mimified
      }
      skills
      address{
        city
        state
        latitude
        longitude
      }
    }
  }`

