import { useQuery } from "@apollo/client";
import { FETCH_BEST_PRODUCTS, FETCH_BEST_REVIEW } from "./StoreMain.queries";
import * as S from "./StoreMain.styles";

export default function StorePresenter() {
    const { data: productData } = useQuery(FETCH_BEST_PRODUCTS);
    const { data: reviewData } = useQuery(FETCH_BEST_REVIEW);

    return (
        <S.Wrapper>
            <S.MainWrapper>
                <S.ImageWrapper>
                    <S.MainImage></S.MainImage>
                </S.ImageWrapper>

                <S.Text>베스트 상품</S.Text>
                <S.BestProductWrapper>
                    {productData?.fetchBestProduct.map((el: any) => (
                        <S.BestProductBox
                            key={productData?.fetchBestProduct.id}
                        >
                            <S.ReviewImage src={`${el.image}`}></S.ReviewImage>
                            <S.ReviewDownWrapper>
                                <S.ReviewTitleWrapper>
                                    <S.ReviewTitle>{el.name}</S.ReviewTitle>
                                    <S.ReviewScore>
                                        {el.price.toLocaleString()}
                                        <span>원</span>
                                    </S.ReviewScore>
                                </S.ReviewTitleWrapper>
                                <S.ReviewContents>
                                    {el.description}
                                </S.ReviewContents>
                            </S.ReviewDownWrapper>
                        </S.BestProductBox>
                    ))}
                </S.BestProductWrapper>

                <S.Text>베스트 리뷰</S.Text>
                <S.BestProductWrapper>
                    {reviewData?.fetchBestReview.map((el: any) => (
                        <S.BestProductBox key={reviewData?.fetchBestReview.id}>
                            <S.ReviewImage src={`${el.image}`}></S.ReviewImage>
                            <S.ReviewDownWrapper>
                                <S.ReviewTitleWrapper>
                                    <S.ReviewTitle>
                                        {el.reviewTitle}
                                    </S.ReviewTitle>
                                    <S.ReviewLikeWrapper>
                                        <S.ReviewEmoji></S.ReviewEmoji>
                                        <S.ReviewScore>{el.like}</S.ReviewScore>
                                    </S.ReviewLikeWrapper>
                                </S.ReviewTitleWrapper>
                                <S.ReviewContents>
                                    {el.reviewContent}
                                </S.ReviewContents>
                            </S.ReviewDownWrapper>
                        </S.BestProductBox>
                    ))}
                </S.BestProductWrapper>

                {/* 구분선 */}
            </S.MainWrapper>
        </S.Wrapper>
    );
}
