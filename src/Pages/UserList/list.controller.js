import apollo from '../../service/apollo';
import { searchUserQuery } from '../../queries/queries';

export const getUsers = async (e, keyWord, setUsers, setWordFetch) => {
  e.preventDefault();
  const users = await apollo.query({
    query: searchUserQuery,
    variables: {
      key_word: keyWord,
    }
  });
  setUsers(users.data.searchUser);
  setWordFetch(keyWord);
}