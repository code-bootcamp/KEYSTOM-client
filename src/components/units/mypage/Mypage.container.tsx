import MypagePresenter from "./Mypage.presenter";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      address
      addressDetail
      user {
        email
        name
        nickName
      }
    }
  }
`;

const FETCH_COUPONS = gql`
  query fetchCoupons {
    fetchCoupons {
      id
      discountPrice
      couponName
    }
  }
`;

const FETCH_COUPON = gql`
  query fetchCoupon($couponId: String!) {
    fetchCoupon(couponId: $couponId) {
      id
      discountPrice
      couponName
    }
  }
`;

const FETCH_USER_ORDER = gql`
  query fetchUserOrder {
    fetchUserOrder {
      id
      count
      price
      receiverName
      receiverPhone
      createdAt
    }
  }
`;

export default function MypageContainer() {
  const [baskets, setBaskets] = useState("");
  const [isBasket, setIsBasket] = useState(false);

  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: couponsData } = useQuery(FETCH_COUPONS);
  const { data: couponData } = useQuery(FETCH_COUPON);
  const { data: orderData } = useQuery(FETCH_USER_ORDER);

  //   console.log("로그인 유저", data);
  console.log("쿠폰데이터", couponsData);

  useEffect(() => {
    const basketsArr = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(basketsArr);
  }, [isBasket]);

  console.log(baskets);

  const moveToReviewWrite = () => {
    router.push("/review");
  };

  const onClickDeleteBasket = (e: any) => {
    console.log(e.target.id);

    const basketsArr = JSON.parse(localStorage.getItem("baskets") || "[]");
    const newBasketsArr = basketsArr.filter(
      (basketEl: any) => basketEl.id !== e.target.id
    );
    localStorage.setItem("baskets", JSON.stringify(newBasketsArr));
    setIsBasket((prev) => !prev);
  };

  const onClickSeeCoupon = async (e) => {
    try {
      const result = await couponData({
        variables: {
          couponId: String(e.target.id),
        },
      });

      console.log(result);
    } catch (error) {
      alert(error instanceof Error);
    }
  };

  return (
    <MypagePresenter
      data={data}
      couponsData={couponsData}
      orderData={orderData}
      moveToReviewWrite={moveToReviewWrite}
      onClickDeleteBasket={onClickDeleteBasket}
      baskets={baskets}
      onClickSeeCoupon={onClickSeeCoupon}
    />
  );
}
