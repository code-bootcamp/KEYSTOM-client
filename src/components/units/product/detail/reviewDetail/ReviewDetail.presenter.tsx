import * as A from "./ReviewDetail.styles";
import { useRouter } from "next/router";
import { useState } from "react";
import ReviewModalContainer from "./reviewModal/ReviewModal.container";

export default function ReviewDetailPresenter(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const [selectedId, setSelectedId] = useState("");

  // 리뷰 모달
  const showModal = (event: any) => {
    setIsOpen(true);
    setSelectedId(event.target.id);
  };

  const handleOK = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onClickCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <A.Wrapper>
        <A.AllReviewsDiv>
          <A.AllText>리뷰 수</A.AllText>
          <A.AllNum>NN</A.AllNum>
        </A.AllReviewsDiv>

        <A.ReviewWrapper>
          {props.data?.fetchReviews.map((el: any) => (
            <A.ReviewDiv key={el.id}>
              <A.ReviewImage
                src="/images/reviewimg.png"
                onClick={showModal}
                id={el.id}
              />
              <A.ReviewRight>
                <A.ReviewTop>
                  <A.ReviewTopTop>
                    <A.ReviewTitle>{el.title}</A.ReviewTitle>
                  </A.ReviewTopTop>
                </A.ReviewTop>
                <A.ReviewBottom>
                  <A.Contents>{el.description}</A.Contents>
                  <A.BottomDiv>
                    <A.BottomText>
                      <A.Reviewer>
                        <A.ReviewSmallTitle>리뷰어</A.ReviewSmallTitle>
                        <A.ReviewSmallText>{el.user.name}</A.ReviewSmallText>
                      </A.Reviewer>
                      <A.ReviewDate>
                        <A.ReviewSmallTitle>작성날짜</A.ReviewSmallTitle>
                        <A.ReviewSmallText>
                          {el.createdAt.slice(0, 10)}
                        </A.ReviewSmallText>
                      </A.ReviewDate>
                    </A.BottomText>
                    <A.LikeDiv>
                      <A.ReviewLikeImage src="/images/review-like.png" />
                      <A.ReviewLikeNum>{el.like}</A.ReviewLikeNum>
                    </A.LikeDiv>
                  </A.BottomDiv>
                </A.ReviewBottom>
              </A.ReviewRight>
              {isOpen && (
                <ReviewModalContainer
                  showModal={showModal}
                  handleOK={handleOK}
                  handleCancel={handleCancel}
                  onClickCloseModal={onClickCloseModal}
                  el={el}
                  selectedId={selectedId}
                  commentData={props.commentData}
                  // id={selectedId}
                />
              )}
            </A.ReviewDiv>
          ))}
        </A.ReviewWrapper>
      </A.Wrapper>
    </>
  );
}
