import { gql } from "@apollo/client";

export const FETCH_BEST_PRODUCTS = gql`
    query fetchBestProduct {
        fetchBestProduct {
            id
            name
            description
            price
            like
            image
            thumbnailImage
            createdAt
        }
    }
`;

export const FETCH_BEST_REVIEW = gql`
    query fetchBestReview {
        fetchBestReview {
            id
            reviewTitle
            reviewContent
            like
            createdAt
        }
    }
`;
