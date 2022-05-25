import {gql} from '@apollo/client'


export const FETCH_REVIEW = gql`
query fetchReview($reviewId: String! ){
    fetchReview(reviewId: $reviewId){
        id
        title
        description
        like
        createdAt
    }
}
`