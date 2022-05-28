import PaymentPresenter from "./Payment.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  PAYMENT,
  FETCH_PRODUCT,
  FETCH_USER_HAVE_COUPONS,
  FETCH_USER_LOGGED_IN,
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
  const [productId, setProductId] = useRecoilState(paymentProductId);
  const [isClickedModal, setIsClickedModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");

  const [payment] = useMutation(PAYMENT);
  const { data: couponData } = useQuery(FETCH_USER_HAVE_COUPONS);
  const { data: productData } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: productId,
    },
  });
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

  console.log("프로덕트데이터", productData);

  const couponHandleOK = () => {
    setIsClickedModal(false);
  };

  const couponHandleCancel = () => {
    setIsClickedModal(false);
  };

  const onClickAvailableCoupon = () => {
    setIsClickedModal(true);
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
    console.log(data, "address data");
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
  console.log("유저데이터이다", userData?.fetchUserLoggedIn);

  const requestPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp61795344");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: productData?.fetchProduct?.title,
        amount: productData?.fetchProduct?.price,
        buyer_email: userData?.fetchUserLoggedIn?.user?.email,
        buyer_name: userData?.fetchUserLoggedIn?.user?.name,
        // buyer_name: "영훈",
        m_redirect_url: "http://localhost:3000/myPage",
      },
      (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);
          payment({
            variables: {
              price: productData?.fetchProduct?.price,
              impUid: rsp.imp_uid,
              createAddressInput: {
                address: address,
                addressDetail: addressDetail,
                zipCode: zipCode,
              },
              createOrderInput: {
                count: 1,
                price: productData?.fetchProduct?.price,
                receiverName: receiverName,
                receiverPhone: receiverPhone,
                productId: productId,
              },
            },
            // refetchQueries:[{
            //   query: FETCH_USER
            // }]
          });
          Modal.success({ content: "결제를 성공하였습니다. 감사합니다!" });
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
      couponHandleOK={couponHandleOK}
      couponHandleCancel={couponHandleCancel}
      onClickAvailableCoupon={onClickAvailableCoupon}
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
    />
  );
}
