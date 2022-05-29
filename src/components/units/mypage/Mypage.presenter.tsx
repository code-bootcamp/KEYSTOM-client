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
          {props.userHaveCouponData?.fetchUserHaveCoupons ? (
            <S.ModalDiv>
              <S.MyCouponWrapper>
                <S.MyCoupon>
                  내 쿠폰 보유함(
                  {props.userHaveCouponData?.fetchUserHaveCoupons.length})
                </S.MyCoupon>
                <S.MyCouponDesc>
                  한 상품에 한 쿠폰만 적용할 수 있습니다.
                </S.MyCouponDesc>
              </S.MyCouponWrapper>
              <S.MyCouponListWrapper>
                {props.userHaveCouponData?.fetchUserHaveCoupons.map(
                  (el: any) => (
                    <S.MyCouponList>
                      <S.MyCouponName>{el.coupon?.couponName}</S.MyCouponName>
                      <S.MyCouponDisCount>
                        {el.coupon?.discountPrice}원 할인쿠폰
                      </S.MyCouponDisCount>
                    </S.MyCouponList>
                  )
                )}
              </S.MyCouponListWrapper>
            </S.ModalDiv>
          ) : (
            <S.ModalDiv>
              <S.MyCouponWrapper>
                <S.MyCoupon>
                  내 쿠폰 보유함(
                  {props.userHaveCouponData?.fetchUserHaveCoupons.length})
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
              <S.ProfileImage
                src={props.data?.fetchUserLoggedIn?.user?.profileImage}
              />
            </S.TopLeftContainer>

            <S.TopRightContainer>
              <S.NameContainer>
                <S.UserTitle>Name</S.UserTitle>
                <S.VerticalLine />
                <S.UserName>
                  {props.data?.fetchUserLoggedIn.user.name}
                </S.UserName>
              </S.NameContainer>
              <S.IdContainer>
                <S.UserTitle>ID</S.UserTitle>
                <S.VerticalLine />
                <S.UserId>{props.data?.fetchUserLoggedIn.user.email}</S.UserId>
              </S.IdContainer>
              <S.NickNameContainer>
                <S.UserTitle>NickName</S.UserTitle>
                <S.VerticalLine />
                <S.UserNickName>
                  {props.data?.fetchUserLoggedIn.user.nickName}
                </S.UserNickName>
              </S.NickNameContainer>
              <S.PointWrapper>
                <S.UserTitle>Address</S.UserTitle>
                <S.VerticalLine />
                <S.UserPoint>
                  {props.data?.fetchUserLoggedIn.address}{" "}
                  {props.data?.fetchUserLoggedIn.addressDetail}
                </S.UserPoint>
              </S.PointWrapper>
              <S.DeliverWrapper>
                <S.UserTitle>Coupons</S.UserTitle>
                <S.VerticalLine />
                <S.UserDeliveryAddress>
                  {" "}
                  {props.userHaveCouponData?.fetchUserHaveCoupons.length} coupons
                  available
                </S.UserDeliveryAddress>
                <S.SeeCoupon onClick={props.onClickSeeCoupon}>
                  View coupons
                </S.SeeCoupon>
              </S.DeliverWrapper>

              {/* 버튼 */}
            </S.TopRightContainer>
          </S.TopWrapper>

          {/* Line */}
          <S.Line />

          <S.MiddleWrapper>
            <S.BoughtList>My Order History</S.BoughtList>
            {props.orderData?.fetchOrders?.length !== 0 ? (
              props.orderData?.fetchOrders.map((el: any) => (
                <S.BoughtListInfo key={el.id}>
                  <S.BoughtImage
                    src={`https://storage.googleapis.com/${el?.product?.thumbnail}`}
                  />
                  <S.BoughtName>{el?.product?.title}</S.BoughtName>

                  <S.BoughtDateWrapper>
                    <S.BoughtDateText>Date</S.BoughtDateText>
                    <S.BoughtDateNum>
                      {el?.createdAt.slice(0, 4)}.{el?.createdAt.slice(5, 7)}.
                      {el?.createdAt.slice(8, 10)}
                    </S.BoughtDateNum>
                  </S.BoughtDateWrapper>

                  <S.BoughtPriceWrapper>
                    <S.BoughtPriceText>Price</S.BoughtPriceText>
                    <S.BoughtPriceNum>{el?.price}</S.BoughtPriceNum>
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
              <S.NoBoughtListInfo>
              No purchase history</S.NoBoughtListInfo>
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
                    <S.BasketProductImage src={`https://storage.googleapis.com/${el?.thumbnail}`} />
                  </S.BasketProductImageWrapper>

                  <S.BasketProductInfoWrapper>
                      <S.ProductInfoWrapper>
                      <S.BasketProductInfoWrapper2>
                          <S.ProductName>{el.title}</S.ProductName>
                          <S.ProductDelete
                            onClick={props.onClickDeleteBasket}
                            src="./images/delete/delete.png"
                            id={el.id}
                          />
                         </S.BasketProductInfoWrapper2>
                        <S.ProductContents>{el.description.slice(84,el.description.length)}</S.ProductContents>
                        <S.BasketProductInfoWrapper3>
                          <S.ProductPrice>{el.price}</S.ProductPrice>
                          <S.ProductBuyButton onClick={onClickMoveToPayment}>
                            Pay Now
                          </S.ProductBuyButton>
                        </S.BasketProductInfoWrapper3>
                      </S.ProductInfoWrapper>
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
