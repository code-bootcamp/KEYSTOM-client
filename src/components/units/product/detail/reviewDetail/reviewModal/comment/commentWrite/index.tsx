import styled from '@emotion/styled';
import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';
import { Modal } from 'antd';


const ReviewCommentWriteWrapper = styled.div`
display: flex;
justify-content: space-between;
padding-top: 50px;
padding-bottom: 40px;
`

const CommentInput = styled.input`
width: 600px;
height: 54px;
padding-left: 20px;
/* background-color: #dedede; */
border-radius: 10px;
/* border: 1px solid #dedede; */
`

const CommentBtn = styled.button`
width: 150px;
height: 54px;
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
`

const CREATE_COMMENT = gql`
    mutation createComment($createCommentInput:CreateCommentInput!){
        createComment(createCommentInput:$createCommentInput){
            id
            commentContent
            ParentId
        }
}
`


export default function CommentWritePage(props:any){
    const [createComment]  = useMutation(CREATE_COMMENT)
    const [commentContent, setCommentContent] = useState("")
     

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
                        ParentId:"a24c30eb-f86d-49dc-b0d7-e4de7ef9197a"

                    }
                }
            })
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