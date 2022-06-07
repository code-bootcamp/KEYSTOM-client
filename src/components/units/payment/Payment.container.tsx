import PaymentPresenter from "./Payment.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  PAYMENT,
  FETCH_PRODUCT,
  FETCH_USER_HAVE_COUPONS,
  FETCH_USER_LOGGED_IN,
  FETCH_CUSTOM,
  FETCH_COUPON,
  DELTETE_COUPON,
} from "./Payment.queries";
import { Modal } from "antd";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { paymentProductId } from "../../commons/store";
import { useRouter } from "next/router";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentContainer() {
  const router = useRouter();
  const [productId, ] = useRecoilState(paymentProductId);
  const [couponId, setCouponId] = useState("");
  const [isClickedModal, setIsClickedModal] = useState(false);
  const [isClickedCoupon, setIsClickedCoupon] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");

  const [payment] = useMutation(PAYMENT);
  const [deleteCoupon] = useMutation(DELTETE_COUPON);
  const { data: couponData } = useQuery(FETCH_USER_HAVE_COUPONS);
  const { data: productData } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: String(productId),
    },
  });
  const { data: customData } = useQuery(FETCH_CUSTOM, {
    variables: {
      productId: String(productId),
    },
  });
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: couponDetailData } = useQuery(FETCH_COUPON, {
    variables: {
      couponId,
    },
  });

  const couponHandleOK = () => {
    setIsClickedModal(false);
  };

  const couponHandleCancel = () => {
    setIsClickedModal(false);
  };

  const onClickAvailableCoupon = () => {
    setIsClickedModal(true);
  };

  const onClickCoupon = (e: any) => {
    setCouponId(e.target.id);
    setIsClickedCoupon(true);
    setIsClickedModal(false);
  };

  // 주소 모달
  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data: any) => {
    setZipCode(data.zonecode);
    setAddress(data.address);
    setIsOpen(false);
  };

  const onChangeAddressDetail = (event: any) => {
    setAddressDetail(event.target.value);
  };

  const onChangeReceiverName = (event: any) => {
    setReceiverName(event.target.value);
  };

  const onChangeReceiverPhone = (event: any) => {
    setReceiverPhone(event.target.value);
  };

  const requestPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp61795344");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: productData?.fetchProduct?.title,
        amount:
          productData?.fetchProduct?.price +
          customData?.fetchCustom?.space * 8000 +
          customData?.fetchCustom?.esc * 7000 +
          customData?.fetchCustom?.rest * 6000 +
          customData?.fetchCustom?.enter * 10000 -
          couponDetailData?.fetchCoupon?.discountPrice,
        buyer_email: userData?.fetchUserLoggedIn?.user?.email,
        buyer_name: userData?.fetchUserLoggedIn?.user?.name,
        m_redirect_url: "http://localhost:3000/myPage",
      },
      (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);
          payment({
            variables: {
              price:
                productData?.fetchProduct?.price +
                customData?.fetchCustom?.space * 8000 +
                customData?.fetchCustom?.esc * 7000 +
                customData?.fetchCustom?.rest * 6000 +
                customData?.fetchCustom?.enter * 10000 -
                couponDetailData?.fetchCoupon?.discountPrice,
              impUid: rsp.imp_uid,
              createAddressInput: {
                address,
                addressDetail,
                zipCode,
              },
              createOrderInput: {
                count: 1,
                price: productData?.fetchProduct?.price,
                receiverName,
                receiverPhone,
                productId,
              },
            },
          });
          Modal.success({ content: "결제를 성공하였습니다. 감사합니다!" });
          deleteCoupon({
            variables: {
              couponId,
            },
          });
          router.push("/mypage");
        } else {
          Modal.error({ content: "결제를 실패했습니다! 다시 시도해주세요." });
        }
      }
    );
  };
  return (
    <PaymentPresenter
      requestPayment={requestPayment}
      productData={productData}
      couponData={couponData}
      couponDetailData={couponDetailData}
      customData={customData}
      userData={userData}
      couponHandleOK={couponHandleOK}
      couponHandleCancel={couponHandleCancel}
      onClickAvailableCoupon={onClickAvailableCoupon}
      onClickCoupon={onClickCoupon}
      isClickedModal={isClickedModal}
      showModal={showModal}
      handleOK={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeReceiverName={onChangeReceiverName}
      onChangeReceiverPhone={onChangeReceiverPhone}
      isOpen={isOpen}
      zipCode={zipCode}
      address={address}
      isClickedCoupon={isClickedCoupon}
    />
  );
}
