import { Modal } from "antd";
import Head from "next/head";
import * as S from "./Payment.styles";
import DaumPostcode from "react-daum-postcode";

export default function PaymentPresenter(props: any) {
  return (
    <>
      <S.Wrapper>
        <Head>
          <script
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.12.4.min.js"
          ></script>
          <script
            type="text/javascript"
            src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
          ></script>
        </Head>
        <S.PaymentWrapper>
          <S.PaymentText>Payment</S.PaymentText>
          <S.PaymentMainWrapper>
            <S.PaymentMainImage></S.PaymentMainImage>

            <S.PaymentPriceWrapper>
              <S.PaymentSmallTitle>
                {props.data?.fetchOrders?.product?.title}
              </S.PaymentSmallTitle>
              <S.PaymentPriceTitle>
                {props.data?.fetchOrders?.product?.title}
              </S.PaymentPriceTitle>

              <S.PaymentPriceTableWrapper>
                <S.PaymentPriceTableText>Options</S.PaymentPriceTableText>
                <S.Row>
                  <S.ColumnTitle>Option</S.ColumnTitle>
                  <S.ColumnTitle>Qty</S.ColumnTitle>
                  <S.ColumnTitle>Price</S.ColumnTitle>
                </S.Row>
                <S.Row2>
                  <S.ColumnOption>Origin</S.ColumnOption>
                  <S.ColumnOty>1</S.ColumnOty>
                  <S.ColumnPrice>
                    {props.productData?.fetchProduct?.price}
                  </S.ColumnPrice>
                </S.Row2>
                <S.Row2>
                  <S.ColumnOption>Spacebar</S.ColumnOption>
                  <S.ColumnOty>
                    {props.customData?.fetchCustom?.space}
                  </S.ColumnOty>
                  <S.ColumnPrice>
                    {props.customData?.fetchCustom?.space * 8000}
                  </S.ColumnPrice>
                </S.Row2>
                <S.Row2>
                  <S.ColumnOption>Esc</S.ColumnOption>
                  <S.ColumnOty>
                    {props.customData?.fetchCustom?.esc}
                  </S.ColumnOty>
                  <S.ColumnPrice>
                    {props.customData?.fetchCustom?.esc * 7000}
                  </S.ColumnPrice>
                </S.Row2>

                <S.Row2>
                  <S.ColumnOption>Keypad</S.ColumnOption>
                  <S.ColumnOty>
                    {props.customData?.fetchCustom?.rest}
                  </S.ColumnOty>
                  <S.ColumnPrice>
                    {props.customData?.fetchCustom?.rest * 6000}
                  </S.ColumnPrice>
                </S.Row2>

                <S.Row2>
                  <S.ColumnOption>Enter</S.ColumnOption>
                  <S.ColumnOty>
                    {props.customData?.fetchCustom?.enter}
                  </S.ColumnOty>
                  <S.ColumnPrice>
                    {props.customData?.fetchCustom?.enter * 10000}
                  </S.ColumnPrice>
                </S.Row2>
              </S.PaymentPriceTableWrapper>

              <S.PaymentPriceTotalWrapper>
                <S.PaymentPriceTotal>Total</S.PaymentPriceTotal>
                <S.PaymentPriceTotalNumber>
                  {`${
                    props.productData?.fetchProduct?.price +
                    props.customData?.fetchCustom?.space * 8000 +
                    props.customData?.fetchCustom?.esc * 7000 +
                    props.customData?.fetchCustom?.rest * 6000 +
                    props.customData?.fetchCustom?.enter * 10000
                  }`}
                  {/* <span>원</span> */}
                </S.PaymentPriceTotalNumber>
              </S.PaymentPriceTotalWrapper>
            </S.PaymentPriceWrapper>
          </S.PaymentMainWrapper>

          <S.PaymentSubWrapper>
            <S.PaymentSubLeftWrapper>
              <S.PaymentSubAddressText>
                Shipping Information
              </S.PaymentSubAddressText>
              <S.PaymentSubTextWrapper>
                <S.Label>Receiver</S.Label>
                <S.InputBox
                  type="text"
                  placeholder="홍길동"
                  style={{ width: 379 }}
                  onChange={props.onChangeReceiverName}
                >
                  {props.data?.fetchOrders?.receiverName}
                </S.InputBox>
              </S.PaymentSubTextWrapper>

              <S.PaymentSubTextWrapper>
                <S.Label>Receiver Phone</S.Label>
                <S.InputBox
                  type="text"
                  placeholder="01012345678"
                  onChange={props.onChangeReceiverPhone}
                >
                  {props.data?.fetchOrders?.receiverPhone}
                </S.InputBox>
              </S.PaymentSubTextWrapper>

              <S.PaymentSubTextWrapper>
                <S.Label>Shipping Address</S.Label>
                <S.InputBox type="text" placeholder="우리집"></S.InputBox>
              </S.PaymentSubTextWrapper>

              <S.PaymentSubTextWrapper>
                <S.Label>Address</S.Label>
                {props.isOpen && (
                  <Modal
                    visible={true}
                    onOk={props.handleOk}
                    onCancel={props.handleCancel}
                    closable={false}
                  >
                    <DaumPostcode onComplete={props.handleComplete} />
                  </Modal>
                )}

                <S.InputBox
                  type="text"
                  placeholder="15338"
                  style={{ width: 116 }}
                  value={props.zipCode}
                >
                  {props.data?.fetchOrders?.address?.zipCode}
                </S.InputBox>

                <S.ZipCodeSearchButton onClick={props.showModal}>
                  Find Address
                </S.ZipCodeSearchButton>
              </S.PaymentSubTextWrapper>

              <S.PaymentSubTextWrapper>
                <S.Label>{""}</S.Label>

                <S.InputBox
                  type="text"
                  placeholder="서울시 행복구 낙원동 1004로"
                  value={props.address}
                >
                  {props.data?.fetchOrders?.address?.address}
                </S.InputBox>
              </S.PaymentSubTextWrapper>
              <S.PaymentSubTextWrapper>
                <S.Label>{""}</S.Label>

                <S.InputBox
                  type="text"
                  placeholder="B동 1202호"
                  onChange={props.onChangeAddressDetail}
                >
                  {props.data?.fetchOrders?.address?.addressDetail}
                </S.InputBox>
              </S.PaymentSubTextWrapper>
            </S.PaymentSubLeftWrapper>

            <S.PaymentSubRightWrapper>
              <S.PaymentSubResultText>Payment Details</S.PaymentSubResultText>
              <S.PaymentSubDiv>
                <S.OrderPriceWrapper
                  style={{
                    padding: "30px 40px",
                    borderBottom: "1px solid #fff",
                    background: "#2C2C2C",
                    borderRadius: "10px 10px 0 0 ",
                  }}
                >
                  <S.LabelDetail>Total Price</S.LabelDetail>
                  <S.LabelText>{`${
                    props.productData?.fetchProduct?.price +
                    props.customData?.fetchCustom?.space * 8000 +
                    props.customData?.fetchCustom?.esc * 7000 +
                    props.customData?.fetchCustom?.rest * 6000 +
                    props.customData?.fetchCustom?.enter * 10000
                  }`}</S.LabelText>
                </S.OrderPriceWrapper>

                <S.PriceInner>
                  <S.OrderPriceWrapper>
                    <S.PaymentLabel>Product price</S.PaymentLabel>
                    <S.LabelContent>
                      {props.productData?.fetchProduct?.price}
                    </S.LabelContent>
                  </S.OrderPriceWrapper>
                  <S.OrderPriceWrapper>
                    <S.PaymentLabel>Discount</S.PaymentLabel>
                    <S.CouponDiv>
                      <S.Coupon onClick={props.onClickAvailableCoupon}>
                        Available Coupon
                      </S.Coupon>
                      <S.LabelContent>0</S.LabelContent>
                    </S.CouponDiv>
                  </S.OrderPriceWrapper>
                  <S.OrderPriceWrapper style={{ border: "none" }}>
                    <S.PaymentLabel>Shipping Fee</S.PaymentLabel>
                    <S.LabelContent>Free</S.LabelContent>
                  </S.OrderPriceWrapper>
                </S.PriceInner>
              </S.PaymentSubDiv>
              {/* <S.Line></S.Line> */}
              <S.PaymentSubmitButton onClick={props.requestPayment}>
                Payment
              </S.PaymentSubmitButton>
              {props.isClickedModal ? (
                <Modal
                  visible={true}
                  centered
                  onOk={props.couponHandleOk}
                  onCancel={props.couponHandleCancel}
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
                  // zIndex={10}
                  maskClosable={true}
                  keyboard={true}
                  closable={true}
                >
                  {props.couponsData?.fetchUserHaveCoupons.length !== 0 ? (
                    <S.ModalDiv>
                      <S.MyCouponWrapper>
                        <S.MyCoupon>
                          내 쿠폰 보유함(
                          {props.couponData?.fetchUserHaveCoupons.length})
                        </S.MyCoupon>
                        <S.MyCouponDesc>
                          한 상품에 한 쿠폰만 적용할 수 있습니다.
                        </S.MyCouponDesc>
                      </S.MyCouponWrapper>
                      <S.MyCouponListWrapper>
                        {props.couponData?.fetchUserHaveCoupons.map(
                          (el: any) => (
                            <S.MyCouponList
                              key={el?.id}
                              onClick={props.onClickCoupon}
                            >
                              <S.MyCouponName id={el?.coupon?.id}>
                                {el?.coupon?.couponName}
                              </S.MyCouponName>
                              <S.MyCouponDisCount>
                                {el?.coupon?.discountPrice}원 할인쿠폰
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
                          {props.couponData?.fetchUserHaveCoupons.length})
                        </S.MyCoupon>
                        <S.MyCouponDesc>
                          한 상품에 한 쿠폰만 적용할 수 있습니다.
                        </S.MyCouponDesc>
                      </S.MyCouponWrapper>
                      <S.NoCouponList>쿠폰이 없습니다.</S.NoCouponList>
                    </S.ModalDiv>
                  )}
                </Modal>
              ) : (
                <div></div>
              )}
              <S.PaymentCancelButton>Cancel</S.PaymentCancelButton>
            </S.PaymentSubRightWrapper>
          </S.PaymentSubWrapper>
        </S.PaymentWrapper>
      </S.Wrapper>
    </>
  );
}
