import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductDetailPresenter from "../detail/ProductDetail.presenter";
import { paymentProductId } from "../../../commons/store";
import { useRecoilState } from "recoil";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: String!) {
    fetchProduct(productId: $productId) {
      id
      title
      description
      price
      createdAt
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

export default function ProductDetailContainer() {
    const router = useRouter();
    const [isBasket, setIsBasket] = useState(false);
    const [productId, setProductId] = useRecoilState(paymentProductId);

    const [getCoupon] = useMutation(CREATE_EVENT_COUPON);

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
        console.log(isBasket);
        console.log(el);
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
        console.log(el);

        const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

        const newBaskets = baskets.filter(
            (basketEl: any) => basketEl.id !== el.id
        );
        localStorage.setItem("baskets", JSON.stringify(newBaskets));
        setIsBasket((prev) => !prev);
    };

    // 쿠폰 적용
    const onClickCouponApply = () => {};

    // 결제하기
    const onClickPayNow = (e) => {
        setProductId(e.target.id);
        router.push("/payment");
    };

    const onClickGetCoupon = async () => {
        try {
            const result = await getCoupon({});
            console.log("쿠폰리절트", result);
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
