import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductDetailPresenter from "../detail/ProductDetail.presenter";
import { paymentProductId } from "../../../commons/store";
import { useRecoilState } from "recoil";
import {
  recoilLength,
  recoilSpaceLength,
  recoilEnterLength,
  recoilEscLength,
} from "../../../commons/store";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: String!) {
    fetchProduct(productId: $productId) {
      id
      title
      description
      price
      createdAt
      thumbnail
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

const CREATE_EVENT_COUPON = gql`
  mutation createEventCoupon {
    createEventCoupon {
      id
    }
  }
`;

const CREATE_CUSTOM = gql`
  mutation createCustom($createCustomInput: CreateCustomInput!) {
    createCustom(createCustomInput: $createCustomInput) {
      id
      space
      enter
      esc
      rest
    }
  }
`;

export default function ProductDetailContainer() {
  const router = useRouter();
  const [isBasket, setIsBasket] = useState(false);
  const [productId, setProductId] = useRecoilState(paymentProductId);
  const [recoilLength2, setRecoilLength2] = useRecoilState(recoilLength);
  const [recoilSpaceLength2, setRecoilSpaceLength2] =
    useRecoilState(recoilSpaceLength);
  const [recoilEnterLength2, setRecoilEnterLength2] =
    useRecoilState(recoilEnterLength);
  const [recoilEscLength2, setRecoilEscLength2] =
    useRecoilState(recoilEscLength);

  const [getCoupon] = useMutation(CREATE_EVENT_COUPON);
  const [createCustom] = useMutation(CREATE_CUSTOM);

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
    // console.log(isBasket);
    // console.log(el);
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
    // console.log(el);

    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const newBaskets = baskets.filter((basketEl: any) => basketEl.id !== el.id);
    localStorage.setItem("baskets", JSON.stringify(newBaskets));
    setIsBasket((prev) => !prev);
  };

  // 쿠폰 적용
  const onClickCouponApply = () => {};

  // 결제하기
  const onClickPayNow = async (e:any) => {
    try {
      const payResult = await createCustom({
        variables: {
          createCustomInput: {
            space: recoilSpaceLength2,
            enter: recoilEnterLength2,
            esc: recoilEscLength2,
            rest: recoilLength2,
            productId: String(router.query.productId),
          },
        },
      });
      // console.log(payResult);
      setProductId(e.target.id);
      router.push("/payment");
    } catch (error) {
      alert(error instanceof Error);
    }
  };

  const onClickGetCoupon = async () => {
    try {
      const result = await getCoupon({});
      // console.log("쿠폰리절트", result);
      Modal.success({ content: "쿠폰을 발급 받았습니다!" });
    } catch (error) {
      Modal.error({
        content: "이미 쿠폰을 발급받았습니다.",
      });
    }
  };

  return (
    <ProductDetailPresenter
      onClickBasket={onClickBasket}
      onClickDelete={onClickDelete}
      onClickCouponApply={onClickCouponApply}
      onClickPayNow={onClickPayNow}
      onClickGetCoupon={onClickGetCoupon}
      isBasket={isBasket}
      data={data}
    />
  );
}
