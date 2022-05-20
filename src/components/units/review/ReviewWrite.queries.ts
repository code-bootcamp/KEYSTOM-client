import { gql } from '@apollo/client';


export const CREATE_REVIEW = gql`
mutation createReview($createReviewInput: CreateReviewInput!) {
    createReview(createReviewInput: $createReviewInput) {
        id
    reviewTitle
    reviewContent
    like
    user{
      nickName
      email
      name
      
        }
    }
}
`;

export const CREATE_REVIEW_IMAGE = gql`
mutation createReviewImage($reviewImageUrl: String! $reviewId: String!){
    createReviewImage(reviewImageUrl:$reviewImageUrl reviewId:$reviewId){
        id
        reviewImageUrl
    }
}
`