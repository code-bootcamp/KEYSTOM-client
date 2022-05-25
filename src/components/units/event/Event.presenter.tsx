import * as S from "./Event.styles";

export default function EventPresenter() {
    return (
        <S.Wrapper>
            <S.EventWrapper>
                <S.TextWrapper>
                    <div>Live Event</div>
                    <div>ON</div>
                </S.TextWrapper>

                <S.ChattingWrapper>
                    <S.Player></S.Player>
                    <S.RightWrapper>
                        <S.ChattingText>
                            실시간 채팅 <S.Span>N명</S.Span>
                        </S.ChattingText>

                        <S.ChattingMain></S.ChattingMain>

                        <S.ChattingInputWrapper>
                            <S.ChattingInput></S.ChattingInput>
                            <S.ChattingButton>전송</S.ChattingButton>
                        </S.ChattingInputWrapper>
                    </S.RightWrapper>
                </S.ChattingWrapper>

                <S.ProductWrapper>
                    <S.ProductImage></S.ProductImage>
                    <S.ProductInfoWrapper>
                        <S.ProductInfoTitle>프로모션 제품명</S.ProductInfoTitle>
                        <S.ProductInfoName>청축 | 텐키리스</S.ProductInfoName>
                        <S.ProductInfoName>
                            스페이스 바 색 변경 | 자판 색 변경
                        </S.ProductInfoName>
                        <S.ProductInfoName>
                            이것 변경 | 저것 변경
                        </S.ProductInfoName>
                        <S.ProductDescription>
                            키보드 설명. 이 키보드는 코드캠프에서 판매중인
                            상품으로 겁나 좋음
                        </S.ProductDescription>
                    </S.ProductInfoWrapper>

                    <S.PriceWrapper>
                        <S.PriceSale>
                            프로모션
                            <span style={{ color: "#B150F2" }}> 20% 할인</span>
                        </S.PriceSale>
                        <S.PriceBox>
                            <S.PriceBefore>
                                할인 전
                                <span style={{ fontSize: "24px" }}>
                                    {" "}
                                    100,000
                                </span>
                            </S.PriceBefore>
                            <S.PriceAfter>
                                할인 후{" "}
                                <span style={{ fontSize: "32px" }}>
                                    {" "}
                                    80,000
                                </span>
                            </S.PriceAfter>
                        </S.PriceBox>
                    </S.PriceWrapper>
                    <S.ProductPaymentWrapper>
                        <S.ProductPaymentTextWrapper>
                            <S.ProductPaymentText>
                                남은 시간
                            </S.ProductPaymentText>
                            <S.ProductPaymentTime>
                                01:22:22
                            </S.ProductPaymentTime>
                        </S.ProductPaymentTextWrapper>
                        <S.ProductPaymentBtn>바로결제</S.ProductPaymentBtn>
                    </S.ProductPaymentWrapper>
                </S.ProductWrapper>
            </S.EventWrapper>
        </S.Wrapper>
    );
}
