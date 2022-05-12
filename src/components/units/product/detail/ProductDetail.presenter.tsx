import * as S from './ProductDetail.styles'
import ReviewDetail from './reviewDetail/ReviewDetail.container'

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
                                <S.BasketButton>장바구니</S.BasketButton>
                                <S.PaymentButton>바로 결제</S.PaymentButton>
                            </S.ButtonWrapper>
                        </S.OptionRight>
                    </S.OptionWrapper>
                </div>
            </S.DetailWrapper>
                  <ReviewDetail/>
            
        </S.Wrapper>
        
    )
}