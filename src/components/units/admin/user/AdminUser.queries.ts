import { gql} from "@apollo/client";


export const FETCH_USERS = gql`
  query fetchUsers {
    fetchUsers {
      email
      name
      nickName
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($email: String!) {
    deleteUser(email: $email)
  }
`;