import gql from 'graphql-tag';

export const oneUserQuery = gql`
query($user: UserInput!){
  oneUser(user: $user) {
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
}
`;

export default oneUserQuery;
