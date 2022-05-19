import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password)
    }
`;

export const MY_PAGE = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            name
            email
            _id
            userPoint {
                _id
                amount
            }
        }
    }
`;
