import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password)
    }
`;

export const LOGIN_TEST = gql`
    mutation logintest($email: String!, $password: String!) {
        logintest(email: $email, password: $password)
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
