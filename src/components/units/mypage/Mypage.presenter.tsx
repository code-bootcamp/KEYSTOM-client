import * as S from "./Mypage.styles";
import Modal from "antd/lib/modal/Modal";
import { IMypagePresenter } from "./Mypage.types";

export default function MypagePresenter(props: IMypagePresenter) {
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
          maskStyle={{
            height: "100%",
            background: "#000",
            opacity: 0.15,
          }}
          footer={null}
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
                    <S.MyCouponList key={el.id}>
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
      {props.isModalTracking ? (
        <Modal
          visible={true}
          centered
          onOk={props.handleOk2}
          onCancel={props.handleCancel2}
          width={"auto"}
          bodyStyle={{
            width: "420px",
            padding: "0px",
            borderRadius: "10px",
            overflow: "hidden",
          }}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
          style={{
            marginBottom: "100px",
            overflow: "auto",
            borderRadius: "10px",
          }}
          maskStyle={{
            height: "100%",
            background: "#000",
            opacity: 0.4,
          }}
          footer={null}
          maskClosable={true}
          keyboard={true}
          closable={true}
        >
          <S.ModalDiv2>
            <S.Text>Delivery Service Company</S.Text>
            <S.Select onChange={props.onChangeCode}>
              <S.SelectOption disabled selected>
                Select your delivery service company.
              </S.SelectOption>
              <S.SelectOption value="04">CJ대한통운</S.SelectOption>
              <S.SelectOption value="01">우체국택배</S.SelectOption>
              <S.SelectOption value="05">한진택배</S.SelectOption>
              <S.SelectOption value="06">로젠택배</S.SelectOption>
              <S.SelectOption value="22">대신택배</S.SelectOption>
              <S.SelectOption value="46">CU편의점택배</S.SelectOption>
              <S.SelectOption value="08">롯데택배</S.SelectOption>
              <S.SelectOption value="23">경동택배</S.SelectOption>
            </S.Select>
            <S.Text>Billing Number</S.Text>
            <S.Input onChange={props.onChangeInvoice}></S.Input>
            <S.CheckButtonDiv>
              <S.Button onClick={props.onClickTrackingSubmit}>Check</S.Button>
            </S.CheckButtonDiv>
          </S.ModalDiv2>
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
                <S.UserTitle>Email</S.UserTitle>
                <S.VerticalLine />
                <S.UserId>
                  {props.data?.fetchUserLoggedIn?.user?.email}
                </S.UserId>
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
                  {props.userHaveCouponData?.fetchUserHaveCoupons.length ===
                  undefined
                    ? 0
                    : props.userHaveCouponData?.fetchUserHaveCoupons.length}
                  개의 쿠폰이 있습니다
                </S.UserDeliveryAddress>
                <S.SeeCoupon onClick={props.onClickSeeCoupon}>
                  쿠폰함 보기
                </S.SeeCoupon>
              </S.DeliverWrapper>
            </S.TopRightContainer>
          </S.TopWrapper>

          <S.Line />

          <S.MiddleWrapper>
            <S.BoughtList>My Order History</S.BoughtList>
            {props.orderData?.fetchOrders?.length !== 0 ? (
              props.orderData?.fetchOrders.map((el: any) => (
                <S.BoughtListInfo key={el.id}>
                  <S.BoughtImage
                    id={el.id}
                    onClick={props.moveToProductDetail}
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
                    <S.BoughtPriceNum>￦{el?.price}</S.BoughtPriceNum>
                  </S.BoughtPriceWrapper>

                  <S.BoughtStatusWrapper>
                    <S.BoughtStatusText>State</S.BoughtStatusText>
                    <S.BoughtStatus onClick={props.onClickTracking}>
                      배송확인하기
                    </S.BoughtStatus>
                  </S.BoughtStatusWrapper>

                  <S.BoughtReviewWrapper>
                    <S.BoughtReviewText>Review</S.BoughtReviewText>
                    <S.BoughtReviewStatus>
                      {el.isReview ? "작성 완료" : "작성 안함"}
                    </S.BoughtReviewStatus>
                  </S.BoughtReviewWrapper>
                  <S.BoughtReviewIcon
                    id={el.isReview ? el.product.id : el.id}
                    onClick={
                      el.isReview
                        ? props.moveToProductDetail
                        : props.moveToReviewWrite
                    }
                  >
                    {el.isReview ? "리뷰 보러가기" : "리뷰 작성하기"}
                  </S.BoughtReviewIcon>
                </S.BoughtListInfo>
              ))
            ) : (
              <S.NoBoughtListInfo>No purchase history</S.NoBoughtListInfo>
            )}
          </S.MiddleWrapper>

          <S.Line />

          <S.BasketList>My Basket</S.BasketList>
          <S.BottomMapWrapper>
            {props.baskets ? (
              props.baskets.map((el: any, idx: number) => (
                <S.BottomWrapper key={idx}>
                  <S.BasketProductImageWrapper>
                    <S.BasketProductImage
                      id={el.id}
                      onClick={props.moveToProductDetail}
                      src={`https://storage.googleapis.com/${el?.thumbnail}`}
                    />
                  </S.BasketProductImageWrapper>

                  <S.BasketProductInfoWrapper>
                    <S.ProductInfoWrapper>
                      <S.BasketProductInfoWrapper2>
                        <S.ProductName>{el.title.slice(0, 20)}</S.ProductName>
                        <S.ProductDelete
                          onClick={props.onClickDeleteBasket}
                          src="./images/delete/delete.png"
                          id={el.id}
                        />
                      </S.BasketProductInfoWrapper2>
                      <S.BasketProductInfoWrapper3>
                        <S.ProductPrice>￦{el.price}</S.ProductPrice>
                        <S.ProductBuyButton
                          onClick={props.onClickMoveToPayment}
                        >
                          결제하기
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
