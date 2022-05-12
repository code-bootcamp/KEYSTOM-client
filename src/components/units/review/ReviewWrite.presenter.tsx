import * as S from "./ReviewWrite.styles";

export default function ReviewWritePresenter() {
    return (
        <S.Wrapper>
            <S.ReviewWrapper>
                <S.ReviewTextWrapper>리뷰 쓰기</S.ReviewTextWrapper>

                <S.ReviewProductWrapper>
                    <S.ReviewProductImage></S.ReviewProductImage>
                    <S.ReviewProductTitleOptionWrapper>
                        <S.ReviewProductTitle>
                            구매한 키보드 타이틀
                        </S.ReviewProductTitle>

                        <S.ReviewProductOptionWrapper>
                            <S.ReviewProductOption>
                                적용한 커스텀 옵션
                            </S.ReviewProductOption>
                            <S.VerticalLine></S.VerticalLine>
                            <S.ReviewProductOption>
                                적용한 커스텀 옵션
                            </S.ReviewProductOption>
                            <S.VerticalLine></S.VerticalLine>
                            <S.ReviewProductOption>
                                적용한 커스텀 옵션
                            </S.ReviewProductOption>
                        </S.ReviewProductOptionWrapper>
                    </S.ReviewProductTitleOptionWrapper>
                </S.ReviewProductWrapper>

                <S.ReviewTitleContentsWrapper>
                    <S.ReviewTitle>리뷰 제목</S.ReviewTitle>
                    <S.ReviewContents placeholder="리뷰를 작성해주세요!"></S.ReviewContents>
                    <S.ReviewContentsMaxLength>
                        0/1000
                    </S.ReviewContentsMaxLength>
                </S.ReviewTitleContentsWrapper>

                <S.ReviewUploadWrapper>
                    <S.ReviewUploadImage>업로드 이미지</S.ReviewUploadImage>
                    <S.ReviewUploadImage>업로드 이미지</S.ReviewUploadImage>
                </S.ReviewUploadWrapper>

                <S.ReviewButtonWrapper>
                    <S.ReviewSubmitButton>작성하기</S.ReviewSubmitButton>
                    <S.ReviewCancelButton>작성취소</S.ReviewCancelButton>
                </S.ReviewButtonWrapper>
            </S.ReviewWrapper>
        </S.Wrapper>
    );
}
