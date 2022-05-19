import {gql} from '@apollo/client'


export const FETCH_REVIEWS = gql`
    query fetchReviews($page: Float!){
        fetchReviews(page:$page){
            id
            reviewTitle
            reviewContent
            like
            createdAt
            user{
                name
            }
        }
    }
`