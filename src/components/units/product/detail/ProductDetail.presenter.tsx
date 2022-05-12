import * as S from './ProductDetail.styles'

export default function ProductDetailPresenter(){


    return(
        <S.Wrapper>
            <S.DetailWrapper>
                <S.Title>키보드 타이틀</S.Title>
                <S.ImageWrapper>
                    <S.ImageLeft>
                        <S.OriginKeyboard>
                            원래 키보드 이미지
                            {/* <image/> */}
                        </S.OriginKeyboard>
                        <S.ColorBoxWrapper>
                            <S.Box>박스</S.Box>
                            <div>
                            <S.ColorBox>
                                    <S.Color></S.Color>
                                    <S.Color></S.Color>
                                    <S.Color></S.Color>
                                    <S.Color></S.Color>
                                </S.ColorBox>

                                <S.ColorBox>
                                    <S.Color></S.Color>
                                    <S.Color></S.Color>
                                    <S.Color></S.Color>
                                    <S.Color></S.Color>
                                </S.ColorBox>

                                <S.ColorBox>
                                    <S.Color></S.Color>
                                    <S.Color></S.Color>
                                    <S.Color></S.Color>
                                    <S.Color></S.Color>
                                </S.ColorBox>

                                <S.ColorBox>
                                    <S.Color></S.Color>
                                    <S.Color></S.Color>
                                    <S.Color></S.Color>
                                    <S.Color></S.Color>
                                </S.ColorBox>
                            </div>
                        </S.ColorBoxWrapper>
                    </S.ImageLeft>
                    <S.ImageRight>
                        <div>
                            커스텀 키보드 이미지
                            {/* <image/> */}
                        </div>
                        <S.Box>박스</S.Box>
                    </S.ImageRight>
                </S.ImageWrapper>
            </S.DetailWrapper>

            <S.DetailWrapper>
                <div>
                    <S.Title>적용한 커스텀 옵션</S.Title>  
                <S.OptionWrapper>
                        <S.OptionLeftWrapper>
                            <S.OptionTitle>
                                <div>옵션명</div>
                                <div>수량</div>
                                <div>가격</div>
                            </S.OptionTitle>
                            <S.OptionLeft>
                        
                                <S.Option>
                                    <S.OptionText>자판 색 변경</S.OptionText>
                                    <S.OptionQty>4</S.OptionQty>
                                    <S.OptionPrice>30,000</S.OptionPrice>
                                </S.Option>
                                <S.Option>
                                    <div>스페이스바 색 변경</div>
                                    <div>1</div>
                                    <div>10,000</div>
                                </S.Option>
                                <S.Option>
                                    <div>자판 색 변경</div>
                                    <div>4</div>
                                    <div>30,000</div>
                                </S.Option>
                                <S.Option>
                                    <div>자판 색 변경</div>
                                    <div>4</div>
                                    <div>30,000</div>
                                </S.Option>
                                <S.PriceWrapper>
                                    <S.PriceAdd>합계</S.PriceAdd>
                                    <S.PriceNum>120,000원</S.PriceNum>
                                </S.PriceWrapper>
                            </S.OptionLeft>
                        </S.OptionLeftWrapper>
                        <S.OptionRight>
                            <S.ButtonWrapper>
                                <S.BasketButton>바로 결제</S.BasketButton>
                                <S.BasketButton>장바구니</S.BasketButton>
                            </S.ButtonWrapper>
                        </S.OptionRight>
                    </S.OptionWrapper>
                </div>
            </S.DetailWrapper>


                    <div>
                        <S.AllReviewsDiv>
                            <S.AllText>리뷰 수</S.AllText>
                            <S.AllNum>NN</S.AllNum>
                        </S.AllReviewsDiv>

                        <S.ReviewWrapper>
                            <S.ReviewDiv>
                                <S.ReviewImage>커스텀 키보드 이미지</S.ReviewImage>
                                <S.ReviewRight>
                                    <S.ReviewTop>
                                        <S.ReviewTopTop>
                                            <S.ReviewTitle>리뷰 제목</S.ReviewTitle>
                                            <S.TopBottom>
                                                <S.Reviewer>
                                                    <S.ReviewSmallTitle>리뷰어</S.ReviewSmallTitle>
                                                    <S.ReviewSmallText>김철수</S.ReviewSmallText>
                                                </S.Reviewer>
                                                <S.ReviewDate>
                                                    <S.ReviewSmallTitle>작성 날짜</S.ReviewSmallTitle>
                                                    <S.ReviewSmallText>2022/05/10</S.ReviewSmallText>
                                                </S.ReviewDate>
                                            </S.TopBottom>
                                        </S.ReviewTopTop>
                                    </S.ReviewTop>
                                    <S.ReviewBottom>
                                        <S.Contents>contents</S.Contents>
                                        <S.LikeDiv>
                                            <div>좋아요</div>
                                            <span>NN</span>
                                        </S.LikeDiv>
                                    </S.ReviewBottom>
                                </S.ReviewRight>

                            </S.ReviewDiv>
                        </S.ReviewWrapper>
                    </div>

            
            
        </S.Wrapper>
        
    )
}