import { gql } from "@apollo/client";

export const CREATE_USER = gql`
    mutation createUser($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
            email
            name
            nickName
            profileImage
            isAdmin
        }
    }
`;

export const CHECK_EMAIL = gql`
    mutation checkEmail($email: String!) {
        checkEmail(email: $email)
    }
`;

export const SEND_TOKEN = gql`
    mutation sendToken($phone: String!) {
        sendToken(phone: $phone)
    }
`;

export const CHECK_TOKEN = gql`
    mutation checkToken($token: String!) {
        checkToken(token: $token)
    }
`;
