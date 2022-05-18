import {gql} from '@apollo/client'


export const FETCH_COMMENTS = gql`
    query fetchComments{
        commentContent
    }
`