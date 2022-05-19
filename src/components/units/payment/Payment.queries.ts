import {gql} from '@apollo/client'

export const PAYMENT = gql`
    mutation payment($createPaymentInput:CreatePaymentInput!){
        payment(createPaymentInput:$createPaymentInput){
            price
            impUid
        }
    }
`


export const FETCH_USER = gql`
    query fetchUser($email:String!){
        fetchUser(email:$email){
            nickName
            email
            name
            address
        }
    }
`