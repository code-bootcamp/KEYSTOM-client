import * as A from "./ReviewDetail.styles";

export default function ReviewDetail() {
  return (
    <A.Wrapper>
      <A.AllReviewsDiv>
        <A.AllText>리뷰 수</A.AllText>
        <A.AllNum>NN</A.AllNum>
      </A.AllReviewsDiv>

      <A.ReviewWrapper>
        {[0, 1, 2, 3].map((el) => (
          <A.ReviewDiv>
            <A.ReviewImage src="/images/reviewimg.png" />
            <A.ReviewRight>
              <A.ReviewTop>
                <A.ReviewTopTop>
                  <A.ReviewTitle>리뷰 제목</A.ReviewTitle>
                </A.ReviewTopTop>
              </A.ReviewTop>
              <A.ReviewBottom>
                <A.Contents>
                  리뷰 글이 계속 이어지게 주세요. 회색 영역 바깥으로 넘어가지
                  않게 부탁드립니다. 위로 20px, 좌우로 40px, 아래로 46px입니다!
                  넘어가면 생략되게...
                </A.Contents>
                <A.BottomDiv>
                  <A.BottomText>
                    <A.Reviewer>
                      <A.ReviewSmallTitle>리뷰어</A.ReviewSmallTitle>
                      <A.ReviewSmallText>김철수</A.ReviewSmallText>
                    </A.Reviewer>
                    <A.ReviewDate>
                      <A.ReviewSmallTitle>작성 날짜</A.ReviewSmallTitle>
                      <A.ReviewSmallText>2022/05/10</A.ReviewSmallText>
                    </A.ReviewDate>
                  </A.BottomText>
                  <A.LikeDiv>
                    <A.ReviewLikeImage src="/images/review-like.png" />
                    <A.ReviewLikeNum>12</A.ReviewLikeNum>
                  </A.LikeDiv>
                </A.BottomDiv>
              </A.ReviewBottom>
            </A.ReviewRight>
          </A.ReviewDiv>
        ))}
      </A.ReviewWrapper>
    </A.Wrapper>
  );
}
