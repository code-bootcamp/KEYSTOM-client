import * as S from "./Mypage.styles";

export default function MypagePresenter(props: any) {
    return (
        <S.Wrapper>
            <S.WrapperContainer>
                <S.TopWrapper>
                    <S.TopLeftContainer>
                        <S.ProfileImage src="./images/profilePic.png" />
                    </S.TopLeftContainer>

                    <S.TopRightContainer>
                        <S.NameContainer>
                            <S.Name>이름</S.Name>
                            <S.VerticalLine src="./images/Rectangle99.png" />
                            <S.UserName>
                                {props.data?.fetchUserLoggedIn.name}
                            </S.UserName>
                        </S.NameContainer>
                        <S.IdContainer>
                            <S.Id>아이디</S.Id>
                            <S.VerticalLine src="./images/Rectangle99.png" />
                            <S.UserId>
                                {props.data?.fetchUserLoggedIn.email}
                            </S.UserId>
                        </S.IdContainer>
                        <S.PointWrapper>
                            <S.Point>고유번호</S.Point>
                            <S.VerticalLine src="./images/Rectangle99.png" />
                            <S.UserPoint>
                                {props.data?.fetchUserLoggedIn.nickName}
                            </S.UserPoint>
                        </S.PointWrapper>
                        <S.DeliverWrapper>
                            <S.DeliveryAddress>배송 주소</S.DeliveryAddress>
                            <S.VerticalLine src="./images/Rectangle99.png" />
                            <S.UserDeliveryAddress>
                                {props.data?.fetchUserLoggedIn.address}
                            </S.UserDeliveryAddress>
                        </S.DeliverWrapper>

                        {/* 버튼 */}
                    </S.TopRightContainer>
                </S.TopWrapper>

                {/* Line */}
                <S.Line />

                <S.MiddleWrapper>
                    <S.BoughtList>내 구매 이력</S.BoughtList>
                    {[0, 1, 2].map((el) => (
                        <S.BoughtListInfo>
                            <S.BoughtImage src="./images/mypurchaselist_img1.png" />
                            <S.BoughtName>유튜버 키보드</S.BoughtName>
                            <S.BoughtDateWrapper>
                                <S.BoughtDateText>구매 날짜</S.BoughtDateText>
                                <S.BoughtDateNum>2022.05.03</S.BoughtDateNum>
                            </S.BoughtDateWrapper>
                            <S.BoughtPriceWrapper>
                                <S.BoughtPriceText>가격</S.BoughtPriceText>
                                <S.BoughtPriceNum>1,600,000</S.BoughtPriceNum>
                            </S.BoughtPriceWrapper>
                            <S.BoughtStatusWrapper>
                                <S.BoughtStatusText>상태</S.BoughtStatusText>
                                <S.BoughtStatus>배송 준비 중</S.BoughtStatus>
                            </S.BoughtStatusWrapper>
                            <S.BoughtReviewWrapper>
                                <S.BoughtReviewText>리뷰</S.BoughtReviewText>
                                <S.BoughtReviewStatus>
                                    작성 안함
                                </S.BoughtReviewStatus>
                            </S.BoughtReviewWrapper>
                            <S.BoughtReviewIcon
                                onClick={props.moveToReviewWrite}
                                src="./images/review.png"
                            />
                        </S.BoughtListInfo>
                    ))}
                </S.MiddleWrapper>

                {/* Line */}
                <S.Line />

                <S.BasketList>내 장바구니</S.BasketList>
                <S.BottomMapWrapper>
                    {[0, 1, 2, 3].map((el) => (
                        <S.BottomWrapper>
                            <S.BasketProductImageWrapper>
                                <S.BasketProductImage src="/images/mybasket_img1.png" />
                            </S.BasketProductImageWrapper>

                            <S.BasketProductInfoWrapper>
                                <S.BasketProductInfoWrapper2>
                                    <S.ProductInfoWrapper>
                                        <S.ProductName>
                                            스카이 블루 키보드
                                        </S.ProductName>
                                        <S.ProductContents>
                                            먁북을 위해 커스텀된 키보드, 저렴한
                                            가격으로(⋯)
                                        </S.ProductContents>
                                    </S.ProductInfoWrapper>
                                    <S.ProductDelete src="./images/delete.png" />
                                </S.BasketProductInfoWrapper2>
                                <S.ProductBuyButton>
                                    결제하기
                                </S.ProductBuyButton>
                            </S.BasketProductInfoWrapper>
                        </S.BottomWrapper>
                    ))}
                </S.BottomMapWrapper>
            </S.WrapperContainer>
        </S.Wrapper>
    );
}
