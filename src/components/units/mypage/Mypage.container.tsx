import MypagePresenter from "./Mypage.presenter";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      address
      addressDetail
      zipCode
      user {
        email
        name
        nickName
        profileImage
      }
    }
  }
`;

const FETCH_ORDERS = gql`
  query fetchOrders {
    fetchOrders {
      id
      price
      product {
        id
        title
        thumbnail
      }
      createdAt
    }
  }
`;

const FETCH_USER_HAVE_COUPONS = gql`
  query fetchUserHaveCoupons {
    fetchUserHaveCoupons {
      id
      email {
        email
        name
        nickName
      }

      coupon {
        id
        discountPrice
        couponName
      }

      createdAt
    }
  }
`;

export default function MypageContainer() {
  const [baskets, setBaskets] = useState("");
  const [isBasket, setIsBasket] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: orderData } = useQuery(FETCH_ORDERS);
  const { data: userHaveCouponData } = useQuery(FETCH_USER_HAVE_COUPONS);

  const handleOK = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const basketsArr = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(basketsArr);
  }, [isBasket]);

  const moveToReviewWrite = (event: any) => {
    router.push(`/mypage/${event.target.id}`);
  };

  const onClickSeeCoupon = () => {
    setIsModalOpen(true);
  };

  const moveToProductDetail = (event: any) => {
    console.log("event.id", event.target.id)
    router.push(`/store/${event.target.id}`);
  };

  const onClickDeleteBasket = (e: any) => {
    const basketsArr = JSON.parse(localStorage.getItem("baskets") || "[]");
    const newBasketsArr = basketsArr.filter(
      (basketEl: any) => basketEl.id !== e.target.id
    );
    localStorage.setItem("baskets", JSON.stringify(newBasketsArr));
    setIsBasket((prev) => !prev);
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
      handleOK={handleOK}
      handleCancel={handleCancel}
      isModalOpen={isModalOpen}
      moveToProductDetail={moveToProductDetail}
    />
  );
}
