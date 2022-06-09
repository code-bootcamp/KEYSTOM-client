import { gql } from "@apollo/client";

export const FETCH_PRODUCT = gql`
query fetchProduct($productId: String!) {
    fetchProduct(productId: $productId) {
        id
        title
        description
        price
        createdAt
        thumbnail
        # productTags {
        #     id
        #     tag
        # }
    }
}
`;

export const DELETE_PRODUCT = gql`
mutation deleteProduct($productId: String!) {
    deleteProduct(productId: $productId)
}
`;