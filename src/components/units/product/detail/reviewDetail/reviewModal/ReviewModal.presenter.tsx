import * as B from "./ReviewModal.styles"
import Modal from 'antd/lib/modal/Modal';
import CommentListPage from "./comment/commentList/CommentList.container";
import CommentWritePage from './comment/commentWrite/index';
import { useQuery } from '@apollo/client';
import Router from "next/router";
import { useRouter } from 'next/router';

export default function ReviewModalPresenter(props:any){
    // const router = useRouter()
    // console.log("router", router)
    // console.log("reviewData", reviewData)
    return(
        <div>
            <Modal
            visible={true}
            centered
            onOk={props.handleOk}
            onCancel={props.handleCancel}
            width= {"auto"}
            bodyStyle={{width:"100%", height:"auto", borderRadius:"30px",  padding:"0px" }}
            cancelButtonProps={{style:{display:"none"}}}
            okButtonProps={{style:{display:"none"}}}
            style={{ width:"100%", height:"auto", boxShadow:"0px 4px 20px rgba(0, 0, 0,0.2)", margin:"100px", borderRadius:"30px", overflow:"hidden"}}
            maskStyle={{width:"100%", height:"100%",background:"#000", opacity:0.5}}
            footer={null}
            zIndex={10}
            maskClosable={true}
            keyboard={true}
            closable={false}
            >
            <B.ModalDiv>
              
                    <B.ReviewImageWrapper>
                        <B.ReviewImage src="/images/review-modal.png"/>
                    </B.ReviewImageWrapper>
                    <B.ModalCancelBtn src='/images/close.png' />
                    <B.PreviewWrapper>
                        <B.PreviewWrapper>
                            <B.ImagePreviewWrapper>
                                <B.ImagePreview src='/images/review-preview.png'/>
                                <B.ImagePreview src='/images/review-preview.png'/>
                                <B.ImagePreview src='/images/review-preview.png'/>
                                <B.ImagePreview src='/images/review-preview.png'/>
                                <B.ImagePreview src='/images/review-preview.png'/>
            
                            </B.ImagePreviewWrapper>
                        </B.PreviewWrapper>
                    </B.PreviewWrapper>
                

                <B.ReviewWrapper>
                    <B.ReviewTitleDiv>
                        <B.ReviewTitle>{props.reviewData?.fetchReview.reviewTitle}</B.ReviewTitle>
                        <B.ReviewTopWrapper>
                            <B.ReviewerProfile src="/images/profile.png"/>
                            <B.ReviewerText>{props.reviewData?.fetchReview.user.name}</B.ReviewerText>
                            <B.ReviewDate>{props.reviewData?.fetchReview.createdAt}</B.ReviewDate>
                            <B.ReviewLike>
                                <B.ReviewLikeIcon src='/images/review-like.png'/>
                                <B.ReviewLikeNum>{props.reviewData?.fetchReview.like}</B.ReviewLikeNum>
                            </B.ReviewLike>

                        </B.ReviewTopWrapper>

                    </B.ReviewTitleDiv>

                    <B.ReviewContentsDiv>
                        <B.ReviewContents>
                        {props.reviewData?.fetchReview.reviewContent}
                        </B.ReviewContents>
                    </B.ReviewContentsDiv>
                    <B.ReviewCommentWrapper>
                        <CommentWritePage selectedId={props.selectedId}/>
                    
                    <B.ReviewCommentListWrapper>
                        <B.CommentAllDiv>
                            <B.CommentAllText>댓글</B.CommentAllText>
                            <B.CommentAllNum>4</B.CommentAllNum>
                        </B.CommentAllDiv>

                          {props.commentData?.fetchReviewComments.map((el:any)=>(
                            <div>
                                <CommentListPage el={el}  key={el.id} commentData={props.commentData} />
                            </div>
                          ))}
                    </B.ReviewCommentListWrapper>
                    </B.ReviewCommentWrapper>
                </B.ReviewWrapper>
            </B.ModalDiv>
            </Modal>
        </div>
    )
}