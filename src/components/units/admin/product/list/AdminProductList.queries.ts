import { gql } from "@apollo/client";

export const FETCH_PRODUCTS = gql`
    query fetchProducts($page: Float) {
        fetchProducts(page: $page) {
            id
            title
            description
            price
            createdAt
            productTags {
                id
                tag
            }
        }
    }
`;

export const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: String!) {
        deleteProduct(productId: $productId)
    }
`;
