import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import axios from "axios";
import { Modal } from "antd";
import {
  FETCH_USER_LOGGED_IN,
  FETCH_ORDERS,
  FETCH_USER_HAVE_COUPONS,
} from "./Mypage.queries";
import MypagePresenter from "./Mypage.presenter";

export default function MypageContainer() {
  const router = useRouter();

  const [code, setCode] = useState("");
  const [invoice, setInvoice] = useState("");
  const [baskets, setBaskets] = useState("");
  const [isBasket, setIsBasket] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalTracking, setIsModalTracking] = useState(false);
  const [isReview] = useState(false);
  const [, setOrderId] = useState("");

  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: orderData } = useQuery(FETCH_ORDERS);
  const { data: userHaveCouponData } = useQuery(FETCH_USER_HAVE_COUPONS);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk2 = () => {
    setIsModalTracking(false);
  };

  const handleCancel2 = () => {
    setIsModalTracking(false);
  };

  useEffect(() => {
    const basketsArr = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(basketsArr);
  }, [isBasket]);

  const moveToReviewWrite = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof Element) {
      setOrderId(event.target.id);
      router.push(`/mypage/${event.target.id}`);
    }
  };

  const moveToCancel = (event: MouseEvent<HTMLInputElement>) => {
    if (event.target instanceof Element) {
      setOrderId(event.target.id);
      Modal.error({ content: "이미 작성 완료하였습니다." });
    }
  };

  const onClickSeeCoupon = () => {
    setIsModalOpen(true);
  };

  const onClickTracking = () => {
    setIsModalTracking(true);
  };

  const moveToProductDetail = (
    event: MouseEvent<HTMLImageElement> | MouseEvent<HTMLButtonElement>
  ) => {
    if (event.target instanceof Element) {
      router.push(`/store/${event.target.id}`);
    }
  };

  const onClickDeleteBasket = (event: any) => {
    const basketsArr = JSON.parse(localStorage.getItem("baskets") || "[]");

    const newBasketsArr = basketsArr.filter(
      (basketEl: any) => basketEl.id !== event.target.id
    );
    localStorage.setItem("baskets", JSON.stringify(newBasketsArr));
    setIsBasket((prev) => !prev);
  };

  const onChangeCode = (event: ChangeEvent<HTMLSelectElement>) => {
    setCode(event.currentTarget.value);
  };
  const onChangeInvoice = (event: ChangeEvent<HTMLInputElement>) => {
    setInvoice(event.currentTarget.value);
  };

  const onClickTrackingSubmit = async () => {
    const url = `http://info.sweettracker.co.kr/tracking/3?t_key=SuS6FeOnk84sycPTn94CSQ&t_code=${code}&t_invoice=${invoice}`;
    await axios.post(url);

    window.open(url, "", "_blank");
  };

  const onClickMoveToPayment = () => {
    router.push("/payment");
  };

  return (
    <MypagePresenter
      data={data}
      orderData={orderData}
      userHaveCouponData={userHaveCouponData}
      moveToReviewWrite={moveToReviewWrite}
      onClickDeleteBasket={onClickDeleteBasket}
      baskets={baskets}
      onClickSeeCoupon={onClickSeeCoupon}
      onClickTracking={onClickTracking}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleOk2={handleOk2}
      handleCancel2={handleCancel2}
      isModalOpen={isModalOpen}
      isModalTracking={isModalTracking}
      moveToProductDetail={moveToProductDetail}
      onClickTrackingSubmit={onClickTrackingSubmit}
      onChangeCode={onChangeCode}
      onChangeInvoice={onChangeInvoice}
      isReview={isReview}
      moveToCancel={moveToCancel}
      onClickMoveToPayment={onClickMoveToPayment}
    />
  );
}
