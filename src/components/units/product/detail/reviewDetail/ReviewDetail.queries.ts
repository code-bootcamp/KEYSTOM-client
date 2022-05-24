import { gql } from "@apollo/client";

export const FETCH_REVIEWS = gql`
  query fetchReviews($page: Float) {
    fetchReviews(page: $page) {
      id
      title
      description
      like
      createdAt

      user {
        name
      }
    }
  }
`;
