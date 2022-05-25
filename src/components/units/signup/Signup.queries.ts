import { gql } from "@apollo/client";

export const CREATE_USER = gql`
    mutation createUser($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
            email
            name
            nickName
            profileImage
            isAdmin
            address
        }
    }
`;

export const CHECK_EMAIL = gql`
    mutation checkEmail($email: String!){
        checkEmail(email: $email)
    }
`