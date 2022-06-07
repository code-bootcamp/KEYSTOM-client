import { gql } from "@apollo/client";

export const FETCH_REVIEWS = gql`
    query fetchReviews($page: Float, $productId: String!) {
        fetchReviews(page: $page, productId: $productId) {
            id
            title
            description
            like
            createdAt
            thumbnail
            user {
                nickName
            }
        }
    }
`;
