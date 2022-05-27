import PaymentPresenter from "./Payment.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  PAYMENT,
  FETCH_ORDERS,
  FETCH_USER_HAVE_COUPONS,
} from "./Payment.queries";
import { Modal } from "antd";
import { useState } from "react";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentContainer() {
  const [payment] = useMutation(PAYMENT);
  const { data } = useQuery(FETCH_ORDERS);
  const { data: couponData } = useQuery(FETCH_USER_HAVE_COUPONS);
  const [isClickedModal, setIsClickedModal] = useState(false);

  console.log("쿠폰데이터2", couponData?.fetchUserHaveCoupons.length);

  const handleOK = () => {
    setIsClickedModal(false);
  };

  const handleCancel = () => {
    setIsClickedModal(false);
  };

  const onClickAvailableCoupon = () => {
    setIsClickedModal(true);
  };

  const requestPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp61795344");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: data?.fetchOrders?.product?.title,
        amount: data?.fetchOrders?.product?.price,
        buyer_email: data?.fetchOrders?.user?.email,
        buyer_name: data?.fetchOrders?.user?.name,
        m_redirect_url: "http://localhost:3000/myPage",
      },
      (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);
          payment({
            variables: {
              createPaymentInput: {
                price: data?.fetchOrders?.product?.price,
                impUid: rsp.imp_uid,
                order: {
                  count: data?.fetchOrders?.count,
                  price: data?.fetchOrders?.product?.price,
                  address: {
                    address: data?.fetchOrders?.address?.address,
                    addressDetail: data?.fetchOrders?.address?.addressDetail,
                    zipcode: data?.fetchOrders?.address?.zipCode,
                  },
                  receiverName: data?.fetchOrders?.receiverName,
                  receiverPhone: data?.fetchOrders?.receiverPhone,
                  productId: data?.fetchOrders?.product?.id,
                },
              },
            },
            // refetchQueries:[{
            //   query: FETCH_USER
            // }]
          });
          Modal.success({ content: "결제를 성공하였습니다. 감사합니다!" });
        } else {
          Modal.error({ content: "결제를 실패했습니다! 다시 시도해주세요." });
        }
      }
    );
  };
  return (
    <PaymentPresenter
      requestPayment={requestPayment}
      onClickAvailableCoupon={onClickAvailableCoupon}
      data={data}
      couponData={couponData}
      isClickedModal={isClickedModal}
      handleOK={handleOK}
      handleCancel={handleCancel}
    />
  );
}
