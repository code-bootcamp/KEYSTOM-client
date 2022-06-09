import { gql } from "@apollo/client";

export const FETCH_PRODUCT = gql`
    query fetchProduct($productId: String!) {
        fetchProduct(productId: $productId) {
            id
            title
            description
            price
            createdAt
            # thumbnail
        }
    }
`;

export const CREATE_EVENT_COUPON = gql`
    mutation createEventCoupon {
        createEventCoupon {
            id
        }
    }
`;

export const CREATE_CUSTOM = gql`
    mutation createCustom($createCustomInput: CreateCustomInput!) {
        createCustom(createCustomInput: $createCustomInput) {
            id
            space
            enter
            esc
            rest
        }
    }
`;
