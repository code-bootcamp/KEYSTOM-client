import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductDetailPresenter from "../detail/ProductDetail.presenter";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: String!) {
    fetchProduct(productId: $productId) {
      id
      title
      description
      price
      like
      createdAt
    }
  }
`;

const FETCH_USER_COUPON = gql`
  query fetchUserCoupons($email: String!) {
    fetchUserCoupons(email: $email) {
      id
    }
  }
`;

export default function ProductDetailContainer() {
  const router = useRouter();
  const [isBasket, setIsBasket] = useState(false);

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: String(router.query.productId),
    },
  });

  useEffect(() => {
    const productId = data?.fetchProduct.id;
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    const a = baskets.map((el: any) => el.id);

    // console.log("로컬스토리지 저장 된 값", a);

    if (a.includes(productId)) {
      setIsBasket(true);
      //   console.log("값 바뀌나?,", isBasket);
    }
  }, [data?.fetchProduct.id]);

  // 담기
  const onClickBasket = (el: any) => () => {
    // 1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl: any) => basketEl.id === el.id);

    if (temp.length === 1) {
      alert("이미 장바구니에 있습니다!");
      return;
    }

    // // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    baskets.push(newEl);

    localStorage.setItem("baskets", JSON.stringify(baskets));

    setIsBasket(true);
  };

  // =================================================================

  // 담기 취소
  const onClickDelete = (el: any) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const newBaskets = baskets.filter((basketEl: any) => basketEl.id !== el.id);
    localStorage.setItem("baskets", JSON.stringify(newBaskets));
    setIsBasket((prev) => !prev);
  };

  // 쿠폰 적용
  const onClickCouponApply = () => {};

  return (
    <ProductDetailPresenter
      onClickBasket={onClickBasket}
      onClickDelete={onClickDelete}
      onClickCouponApply={onClickCouponApply}
      isBasket={isBasket}
      data={data}
    />
  );
}
