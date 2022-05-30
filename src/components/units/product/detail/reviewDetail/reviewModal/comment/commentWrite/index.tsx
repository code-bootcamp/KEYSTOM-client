import styled from '@emotion/styled';
import { useMutation, gql, useQuery, useApolloClient } from '@apollo/client';
import { useState } from 'react';
import { Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../../../../../commons/store';


const ReviewCommentWriteWrapper = styled.div`
width: 100%;

display: flex;
justify-content: space-between;
padding-top: 50px;
padding-bottom: 40px;
`

const CommentInput = styled.input`
width: 600px;
height: 54px;
padding-left: 20px;
background: #DEDEDE;
border-radius: 10px;
border: none;
`

const CommentBtn = styled.button`
width: 150px;
height: 54px;
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
background: #B150F2;
`

const CREATE_COMMENT = gql`
    mutation createComment($createCommentInput:CreateCommentInput!){
        createComment(createCommentInput:$createCommentInput){
            id
            commentContent
            # parentId
            createdAt
        }
}
`

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn{
        id
        address
        addressDetail
        zipCode
        user{
            email
            name
        }
    }
`
// const LOGIN = gql`
//     mutation login($email:String! $password:String!){
//         login(email:$email password:$password)
//     }
// `

export default function CommentWritePage(props:any){
    const [createComment]  = useMutation(CREATE_COMMENT)
    // const [login]  = useMutation(LOGIN)
    const {data}  = useQuery(FETCH_USER_LOGGED_IN)
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

    const [commentContent, setCommentContent] = useState("")
    const client = useApolloClient();
     

    const onChangeComment = (event:any) => {
        setCommentContent(event.target.value)
    }

 

    
    const onClickWriteComment = async() => {
        try{
            await createComment({
                variables:{
                    createCommentInput:{
                        commentContent,
                        reviewId:props.selectedId,
                        email:String(data?.fetchUserLoggedIn.user.email)
                        
                    }
                }
            })
            // console.log("댓글데이터",commentData)

           Modal.success({content:"댓글을 등록했습니다!"})
           setCommentContent("")
    
        }catch(error:any){
            Modal.error({content:error.message})
        }
    }
    


    return(


        <ReviewCommentWriteWrapper>
            <CommentInput placeholder="댓글 작성하기" onChange={onChangeComment}/>
            <CommentBtn onClick={onClickWriteComment}>작성하기</CommentBtn>
        </ReviewCommentWriteWrapper>
    )
}