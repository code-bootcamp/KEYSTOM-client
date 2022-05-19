import {gql} from '@apollo/client'


export const FETCH_REVIEW = gql`
query fetchReview($reviewId: String! ){
    fetchReview(reviewId: $reviewId){
        id
        reviewTitle
        reviewContent
        like
        createdAt
        user{
            name
            profileImage
        }
    }
}
`