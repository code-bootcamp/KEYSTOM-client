import * as S from "./Mypage.styles";

export default function MypagePresenter() {
  return (
    <S.Wrapper>
      <S.WrapperContainer>
        <S.TopWrapper>
          <S.TopLeftContainer>
            <S.ProfileImage src="" />
          </S.TopLeftContainer>

          <S.TopRightContainer>
            <S.NameContainer>
              <S.Name>이름</S.Name> | <S.UserName>홍길동</S.UserName>
            </S.NameContainer>
            <S.IdContainer>
              <S.Id>아이디</S.Id> | <S.UserId>Hongildong@naver.com</S.UserId>
            </S.IdContainer>
            <S.PointWrapper>
              <S.Point>내 포인트</S.Point> | <S.UserPoint>56,000</S.UserPoint>
            </S.PointWrapper>
            <S.DeliverWrapper>
              <S.DeliveryAddress>배송 주소</S.DeliveryAddress> |{" "}
              <S.UserDeliveryAddress>
                서울시 서울구 서울동 서울로 123
              </S.UserDeliveryAddress>
            </S.DeliverWrapper>

            {/* 버튼 */}
            <S.ButtonWrapper>
              <S.PointCharge>포인트 충전하기</S.PointCharge>
              <S.PasswordFind>비밀번호 찾기</S.PasswordFind>
            </S.ButtonWrapper>
          </S.TopRightContainer>
        </S.TopWrapper>

        {/* Line */}
        <S.Line />

        <S.MiddleWrapper>
          <S.BoughtList>내 구매 이력</S.BoughtList>
          {[0, 1, 2].map((el) => (
            <S.BoughtListInfo>
              <S.BoughtImage src="" />
              <S.BoughtName>구매한 상품 이름</S.BoughtName>
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
                <S.BoughtReviewStatus>작성 안함</S.BoughtReviewStatus>
              </S.BoughtReviewWrapper>
              <S.BoughtReviewIcon src="" />
            </S.BoughtListInfo>
          ))}
        </S.MiddleWrapper>

        {/* Line */}
        <S.Line />

        <S.BasketList>장바구니</S.BasketList>
        <S.BottomWrapper>
          <S.BasketProductImageWrapper>
            <S.BasketProductImage src="" />
          </S.BasketProductImageWrapper>
          <S.BasketProductInfoWrapper>
            <S.BasketProductInfoWrapper2>
              <S.ProductInfoWrapper>
                <S.ProductName>상품명</S.ProductName>
                <S.ProductContents>
                  상품 정보, 1줄 이상은 생략하게 (...)
                </S.ProductContents>
              </S.ProductInfoWrapper>
              <S.ProductDelete>삭제</S.ProductDelete>
            </S.BasketProductInfoWrapper2>
            <S.ProductBuyButton>결제하기</S.ProductBuyButton>
          </S.BasketProductInfoWrapper>
        </S.BottomWrapper>
      </S.WrapperContainer>
    </S.Wrapper>
  );
}
