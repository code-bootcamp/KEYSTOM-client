import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`
  mutation createReview($createReviewInput: CreateReviewInput!) {
    createReview(createReviewInput: $createReviewInput) {
      id
      title
      description
      like
      thumbnail
      createdAt
    }
  }
`;
