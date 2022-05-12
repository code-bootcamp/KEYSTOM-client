import * as S from "./StoreMain.styles";

export default function StorePresenter() {
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.ImageWrapper>
          <S.MainImage></S.MainImage>
        </S.ImageWrapper>

        <S.ReviewWrapper>
          <S.Text>베스트 리뷰</S.Text>
          <S.ReviewBoxWrapper>
            {/* 리뷰박스1 */}
            <S.ReviewBox>
              <S.ReviewImage></S.ReviewImage>
              <S.ReviewDownWrapper>
                <S.ReviewDownLeftWrapper>
                  <S.ReviewTitle>커스텀 키보드 1호</S.ReviewTitle>
                  <S.ReviewContents>
                    리뷰 상세, 1줄 이상은 생략하게 해주세요.(...)
                  </S.ReviewContents>
                </S.ReviewDownLeftWrapper>
                <S.ReviewDownRightWrapper>
                  <S.ReviewScore>👍15</S.ReviewScore>
                </S.ReviewDownRightWrapper>
              </S.ReviewDownWrapper>
            </S.ReviewBox>
            {/* 리뷰박스2 */}
            <S.ReviewBox>
              <S.ReviewImage></S.ReviewImage>
              <S.ReviewDownWrapper>
                <S.ReviewDownLeftWrapper>
                  <S.ReviewTitle>커스텀 키보드 1호</S.ReviewTitle>
                  <S.ReviewContents>
                    리뷰 상세, 1줄 이상은 생략하게 해주세요.(...)
                  </S.ReviewContents>
                </S.ReviewDownLeftWrapper>
                <S.ReviewDownRightWrapper>
                  <S.ReviewScore>👍15</S.ReviewScore>
                </S.ReviewDownRightWrapper>
              </S.ReviewDownWrapper>
            </S.ReviewBox>
          </S.ReviewBoxWrapper>

          <S.ReviewBoxWrapper>
            {/* 리뷰박스3 */}
            <S.ReviewBox>
              <S.ReviewImage></S.ReviewImage>
              <S.ReviewDownWrapper>
                <S.ReviewDownLeftWrapper>
                  <S.ReviewTitle>커스텀 키보드 1호</S.ReviewTitle>
                  <S.ReviewContents>
                    리뷰 상세, 1줄 이상은 생략하게 해주세요.(...)
                  </S.ReviewContents>
                </S.ReviewDownLeftWrapper>
                <S.ReviewDownRightWrapper>
                  <S.ReviewScore>👍15</S.ReviewScore>
                </S.ReviewDownRightWrapper>
              </S.ReviewDownWrapper>
            </S.ReviewBox>
            {/* 리뷰박스4 */}
            <S.ReviewBox>
              <S.ReviewImage></S.ReviewImage>
              <S.ReviewDownWrapper>
                <S.ReviewDownLeftWrapper>
                  <S.ReviewTitle>커스텀 키보드 1호</S.ReviewTitle>
                  <S.ReviewContents>
                    리뷰 상세, 1줄 이상은 생략하게 해주세요.(...)
                  </S.ReviewContents>
                </S.ReviewDownLeftWrapper>
                <S.ReviewDownRightWrapper>
                  <S.ReviewScore>👍15</S.ReviewScore>
                </S.ReviewDownRightWrapper>
              </S.ReviewDownWrapper>
            </S.ReviewBox>
          </S.ReviewBoxWrapper>
        </S.ReviewWrapper>
      </S.MainWrapper>
    </S.Wrapper>
  );
}
