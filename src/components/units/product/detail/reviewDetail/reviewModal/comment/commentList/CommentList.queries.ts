import {gql} from '@apollo/client'

export const FETCH_REVIEW_COMMENTS = gql`
query fetchReviewComments($reviewId:String!){
    fetchReviewComments(reviewId:$reviewId){
        id
        commentContent
        ParentId
        createdAt
    }
}
`
