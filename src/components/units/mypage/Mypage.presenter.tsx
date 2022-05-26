import { useRouter } from "next/router";
import * as S from "./Mypage.styles";
import Modal from "antd/lib/modal/Modal";

export default function MypagePresenter(props: any) {
  const router = useRouter();
  const onClickMoveToPayment = () => {
    router.push("/payment");
  };

  return (
    <>
      {props.isModalOpen ? (
        <Modal
          visible={true}
          centered
          onOk={props.handleOk}
          onCancel={props.handleCancel}
          width={"auto"}
          bodyStyle={{
            width: "503px",
            padding: "0px",
            borderRadius: "30px",
            overflow: "hidden",
          }}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
          style={{
            width: "900px",
            marginBottom: "100px",
            overflow: "auto",
            borderRadius: "30px",
          }}
          maskStyle={{ height: "100%", background: "#000", opacity: 0.15 }}
          footer={null}
          // zIndex={10}
          maskClosable={true}
          keyboard={true}
          closable={true}
        >
          {props.couponsData?.fetchCoupons ? (
            <S.ModalDiv>
              <S.MyCouponWrapper>
                <S.MyCoupon>
                  내 쿠폰 보유함({props.couponsData?.fetchCoupons.length})
                </S.MyCoupon>
                <S.MyCouponDesc>
                  한 상품에 한 쿠폰만 적용할 수 있습니다.
                </S.MyCouponDesc>
              </S.MyCouponWrapper>
              <S.MyCouponListWrapper>
                {props.couponsData?.fetchCoupons.map((el) => (
                  <S.MyCouponList>
                    <S.MyCouponName>{el.couponName}</S.MyCouponName>
                    <S.MyCouponDisCount>
                      {el.discountPrice}원 할인쿠폰
                    </S.MyCouponDisCount>
                  </S.MyCouponList>
                ))}
              </S.MyCouponListWrapper>
            </S.ModalDiv>
          ) : (
            <S.ModalDiv>
              <S.MyCouponWrapper>
                <S.MyCoupon>
                  내 쿠폰 보유함({props.couponsData?.fetchCoupons.length})
                </S.MyCoupon>
                <S.MyCouponDesc>
                  한 상품에 한 쿠폰만 적용할 수 있습니다.
                </S.MyCouponDesc>
              </S.MyCouponWrapper>
              <S.MyCouponList>쿠폰이 없습니다.</S.MyCouponList>
            </S.ModalDiv>
          )}
        </Modal>
      ) : (
        <div></div>
      )}
      <S.Wrapper>
        <S.WrapperContainer>
          <S.BoughtList>My Profile</S.BoughtList>
          <S.TopWrapper>
            <S.TopLeftContainer>
              <S.ProfileImage />
            </S.TopLeftContainer>

            <S.TopRightContainer>
              <S.NameContainer>
                <S.Name>Name</S.Name>
                <S.VerticalLine src="./images/Rectangle97.png" />
                <S.UserName>
                  {props.data?.fetchUserLoggedIn.user.name}
                </S.UserName>
              </S.NameContainer>
              <S.IdContainer>
                <S.Id>ID</S.Id>
                <S.VerticalLine src="./images/Rectangle97.png" />
                <S.UserId>{props.data?.fetchUserLoggedIn.user.email}</S.UserId>
              </S.IdContainer>
              <S.NickNameContainer>
                <S.NickName>NickName</S.NickName>
                <S.VerticalLine src="./images/Rectangle97.png" />
                <S.UserNickName>
                  {props.data?.fetchUserLoggedIn.user.nickName}
                </S.UserNickName>
              </S.NickNameContainer>
              <S.PointWrapper>
                <S.Point>Address</S.Point>
                <S.VerticalLine src="./images/Rectangle97.png" />
                <S.UserPoint>
                  {props.data?.fetchUserLoggedIn.address}{" "}
                  {props.data?.fetchUserLoggedIn.addressDetail}
                </S.UserPoint>
              </S.PointWrapper>
              <S.DeliverWrapper>
                <S.DeliveryAddress>Coupons</S.DeliveryAddress>
                <S.VerticalLine src="./images/Rectangle97.png" />
                <S.UserDeliveryAddress>
                  사용가능한 쿠폰이 {props.couponsData?.fetchCoupons.length}개
                  있습니다.
                </S.UserDeliveryAddress>
                <S.SeeCoupon onClick={props.onClickSeeCoupon}>
                  쿠폰함 보기
                </S.SeeCoupon>
              </S.DeliverWrapper>

              {/* 버튼 */}
            </S.TopRightContainer>
          </S.TopWrapper>

          {/* Line */}
          <S.Line />

          <S.MiddleWrapper>
            <S.BoughtList>My Order History</S.BoughtList>
            {props.orderData?.fetchUserOrder ? (
              props.orderData?.fetchUserOrder.map((el) => (
                <S.BoughtListInfo>
                  <S.BoughtImage src="./images/mypurchaselist_img1.png" />
                  <S.BoughtName></S.BoughtName>

                  <S.BoughtDateWrapper>
                    <S.BoughtDateText>Date</S.BoughtDateText>
                    <S.BoughtDateNum>{el.createdAt}</S.BoughtDateNum>
                  </S.BoughtDateWrapper>

                  <S.BoughtPriceWrapper>
                    <S.BoughtPriceText>Price</S.BoughtPriceText>
                    <S.BoughtPriceNum>{el.price}</S.BoughtPriceNum>
                  </S.BoughtPriceWrapper>

                  <S.BoughtStatusWrapper>
                    <S.BoughtStatusText>State</S.BoughtStatusText>
                    <S.BoughtStatus>배송 준비 중</S.BoughtStatus>
                  </S.BoughtStatusWrapper>

                  <S.BoughtReviewWrapper>
                    <S.BoughtReviewText>Review</S.BoughtReviewText>
                    <S.BoughtReviewStatus>작성 안함</S.BoughtReviewStatus>
                  </S.BoughtReviewWrapper>
                  <S.BoughtReviewIcon onClick={props.moveToReviewWrite}>
                    작성하기
                  </S.BoughtReviewIcon>
                </S.BoughtListInfo>
              ))
            ) : (
              <S.NoBouhtListInfo>구매 이력이 없습니다.</S.NoBouhtListInfo>
            )}
          </S.MiddleWrapper>

          {/* Line */}
          <S.Line />

          <S.BasketList>My Basket</S.BasketList>
          <S.BottomMapWrapper>
            {props.baskets ? (
              props.baskets.map((el: any) => (
                <S.BottomWrapper>
                  <S.BasketProductImageWrapper>
                    <S.BasketProductImage src="/images/mybasket_img1.png" />
                  </S.BasketProductImageWrapper>

                  <S.BasketProductInfoWrapper>
                    <S.BasketProductInfoWrapper2>
                      <S.ProductInfoWrapper>
                        <S.ProductName>{el.name}</S.ProductName>
                        <S.ProductContents>{el.description}</S.ProductContents>
                      </S.ProductInfoWrapper>
                      <S.ProductDelete
                        onClick={props.onClickDeleteBasket}
                        src="./images/delete.png"
                        id={el.id}
                      />
                    </S.BasketProductInfoWrapper2>
                    <S.ProductBuyButton onClick={onClickMoveToPayment}>
                      결제하기
                    </S.ProductBuyButton>
                  </S.BasketProductInfoWrapper>
                </S.BottomWrapper>
              ))
            ) : (
              <div></div>
            )}
          </S.BottomMapWrapper>
        </S.WrapperContainer>
      </S.Wrapper>
    </>
  );
}
