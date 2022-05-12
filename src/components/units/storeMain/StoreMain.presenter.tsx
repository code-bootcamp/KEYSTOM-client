import * as S from "./StoreMain.styles";

const ProductArr = [
    {
        title: "키보드 1호",
        contents:
            "키보드 1호 상품 설명입니다. 키보드 1호 상품 설명입니다. 키보드 1호 상품 설명입니다. ",
        image: "/images/keyboard-01.jpg",
        price: 120000,
    },
    {
        title: "키보드 2호",
        contents: "키보드 2호 상품 설명입니다. 어쩌구 저쩌구 ㅇㅇㅇㅇ",
        image: "/images/keyboard-02.jpg",
        price: 60000,
    },
    {
        title: "키보드 3호",
        contents: "키보드 3호 상품 설명입니다. 어쩌구 저쩌구 ㅇㅇㅇㅇ",
        image: "/images/keyboard-03.jpg",
        price: 220000,
    },
];

const ReviewArr = [
    {
        title: "키보드 1호",
        contents: "리뷰 상세, 1줄 이상은 생략하게 해주세요.(...)",
        image: "/images/keyboard-01.jpg",
        like: 15,
    },
    {
        title: "키보드 2호",
        contents: "리뷰 상세, 1줄 이상은 생략하게 해주세요.(...)",
        image: "/images/keyboard-02.jpg",
        like: 10,
    },
    {
        title: "키보드 3호",
        contents: "리뷰 상세, 1줄 이상은 생략하게 해주세요.(...)",
        image: "/images/keyboard-03.jpg",
        like: 5,
    },
];

export default function StorePresenter() {
    return (
        <S.Wrapper>
            <S.MainWrapper>
                <S.ImageWrapper>
                    <S.MainImage></S.MainImage>
                </S.ImageWrapper>

                <S.Text>베스트 상품</S.Text>
                <S.BestProductWrapper>
                    {ProductArr.map((el) => (
                        <S.BestProductBox>
                            <S.ReviewImage src={`${el.image}`}></S.ReviewImage>
                            <S.ReviewDownWrapper>
                                <S.ReviewTitleWrapper>
                                    <S.ReviewTitle>{el.title}</S.ReviewTitle>
                                    <S.ReviewScore>
                                        {el.price.toLocaleString()}
                                        <span>원</span>
                                    </S.ReviewScore>
                                </S.ReviewTitleWrapper>
                                <S.ReviewContents>
                                    {el.contents}
                                </S.ReviewContents>
                            </S.ReviewDownWrapper>
                        </S.BestProductBox>
                    ))}
                </S.BestProductWrapper>

                <S.Text>베스트 리뷰</S.Text>
                <S.BestProductWrapper>
                    {ReviewArr.map((el) => (
                        <S.BestProductBox>
                            <S.ReviewImage src={`${el.image}`}></S.ReviewImage>
                            <S.ReviewDownWrapper>
                                <S.ReviewTitleWrapper>
                                    <S.ReviewTitle>{el.title}</S.ReviewTitle>
                                    <S.ReviewScore>👍 {el.like}</S.ReviewScore>
                                </S.ReviewTitleWrapper>
                                <S.ReviewContents>
                                    {el.contents}
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
