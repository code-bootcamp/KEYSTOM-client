import { gql } from "@apollo/client";

export const FETCH_PRODUCTS = gql`
    query fetchProducts($page: Float) {
        fetchProducts(page: $page) {
            id
            title
            description
            price
            createdAt
            # thumbnail
            productTags {
                id
                tag
            }
        }
    }
`;

export const FETCH_PRODUCT_ROW_COUNT = gql`
    query fetchProductRowCount {
        fetchProductRowCount
    }
`;
