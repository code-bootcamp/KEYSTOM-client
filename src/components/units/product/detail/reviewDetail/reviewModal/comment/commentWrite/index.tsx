import styled from "@emotion/styled";
import { useMutation, gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { Modal } from "antd";
import { FETCH_REVIEW_COMMENTS } from "../commentList/CommentList.queries";

const ReviewCommentWriteWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 40px;
`;

const CommentInput = styled.input`
    width: 600px;
    height: 54px;
    padding-left: 20px;
    background: #dedede;
    border-radius: 10px;
    border: none;
`;

const CommentBtn = styled.button`
    width: 150px;
    height: 54px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    background: #b150f2;
`;

const CREATE_COMMENT = gql`
    mutation createComment($createCommentInput: CreateCommentInput!) {
        createComment(createCommentInput: $createCommentInput) {
            id
            content
            createdAt
        }
    }
`;

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        id
        address
        addressDetail
        zipCode
        user {
            email
            name
            nickName
        }
    }
`;

export default function CommentWritePage(props: any) {
    const [createComment] = useMutation(CREATE_COMMENT);
    useQuery(FETCH_USER_LOGGED_IN);

    const [content, setCommentContent] = useState("");

    const onChangeComment = (event: any) => {
        setCommentContent(event.target.value);
    };

    const onClickWriteComment = async () => {
        try {
            await createComment({
                variables: {
                    createCommentInput: {
                        content,
                        reviewId: props.selectedId,
                    },
                },
                refetchQueries: [
                    {
                        query: FETCH_REVIEW_COMMENTS,
                        variables: {
                            reviewId: props.selectedId,
                        },
                    },
                ],
            });

            Modal.success({ content: "댓글을 등록했습니다!" });
            setCommentContent("");
        } catch (error: any) {
            Modal.error({ content: error.message });
        }
    };

    return (
        <ReviewCommentWriteWrapper>
            <CommentInput
                placeholder="댓글 작성하기"
                onChange={onChangeComment}
            />
            <CommentBtn onClick={onClickWriteComment}>작성하기</CommentBtn>
        </ReviewCommentWriteWrapper>
    );
}
