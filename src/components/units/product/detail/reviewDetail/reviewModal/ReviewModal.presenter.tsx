import * as B from "./ReviewModal.styles";
import Modal from "antd/lib/modal/Modal";
import CommentListPage from "./comment/commentList/CommentList.container";
import CommentWritePage from "./comment/commentWrite/index";
import { useQuery } from "@apollo/client";
import Router from "next/router";
import { useRouter } from "next/router";
import { useState } from "react";
import { ContentsWrapper } from "../../../../storeMain/StoreMain.styles";

export default function ReviewModalPresenter(props: any) {
  // const router = useRouter()
  // console.log("router", router)
  //   console.log("reviewData", props.reviewData);

  return (
    <div>
      <Modal
        visible={true}
        centered
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        width={"auto"}
        bodyStyle={{ width: "900px", padding: "0px", borderRadius: "8px" , overflow:"auto"}}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        style={{
          width: "900px",
          marginBottom: "50px",
          overflow: "auto",
          borderRadius: "10px",
          paddingTop:"30px"
        }}
        maskStyle={{ height: "100%", background: "#000", opacity: 0.15 }}
        footer={null}
        // zIndex={10}
        maskClosable={true}
        keyboard={true}
        closable={true}
      >
        <B.ModalDiv>
          <B.ReviewImageWrapper>
            <B.ReviewImage
              src={`https://storage.googleapis.com/${props.reviewData?.fetchReview?.thumbnail}`}
            />
          </B.ReviewImageWrapper>
          <B.ModalCancelBtn
            src="/images/review/close.png"
            onClick={props.onClickCloseModal}
          />
          {/* <B.PreviewWrapper> */}
            {/* <B.ImagePreviewWrapper>
                        <B.ImagePreview src='/images/review/review-thumb.png'/>
                        <B.ImagePreview src='/images/review/Product_img.png'/>
                        <B.ImagePreview src='/images/review/Product_img.png'/>
                        <B.ImagePreview src='/images/review/Product_img.png'/>
                        <B.ImagePreview src='/images/review/Product_img.png'/>
                    </B.ImagePreviewWrapper> */}
          {/* </B.PreviewWrapper> */}

          <B.ReviewWrapper>
            <B.ReviewTitleDiv>
              <B.ReviewModalTop>
                <B.ReviewTopWrapper>
                  <B.ReviewerProfile src="/images/review/profile-review.png" />
                  <B.ReviewerText>
                    {props.reviewData?.fetchReview.user.name}
                  </B.ReviewerText>
                  |
                  <B.ReviewDate>
                    {props.reviewData?.fetchReview.createdAt.slice(0, 10)}
                  </B.ReviewDate>
                </B.ReviewTopWrapper>
                <B.ReviewLike>
                  <B.ReviewLikeIcon src="/images/review/like-p.png" />
                  <B.ReviewLikeNum>123</B.ReviewLikeNum>
                </B.ReviewLike>
              </B.ReviewModalTop>
              <B.ReviewTitle>
                {props.reviewData?.fetchReview.title}
              </B.ReviewTitle>
            </B.ReviewTitleDiv>

            <B.ReviewContentsDiv>
              <B.ReviewContents>
                {props.reviewData?.fetchReview.description}
              </B.ReviewContents>
            </B.ReviewContentsDiv>
            <B.ReviewCommentWrapper>
              <CommentWritePage selectedId={props.selectedId} />

              <B.ReviewCommentListWrapper>
                <B.CommentAllDiv>
                  <B.CommentAllText>댓글</B.CommentAllText>
                  <B.CommentAllNum>
                    {props.commentData?.fetchReviewComments.length}
                  </B.CommentAllNum>
                </B.CommentAllDiv>

                {props.commentData?.fetchReviewComments.map((el: any) => (
                  <div>
                    <CommentListPage
                      el={el}
                      key={el.id}
                      commentData={props.commentData}
                      selectedId={props.selectedId}
                    />
                  </div>
                ))}
              </B.ReviewCommentListWrapper>
            </B.ReviewCommentWrapper>
          </B.ReviewWrapper>
        </B.ModalDiv>
      </Modal>
    </div>
  );
}
