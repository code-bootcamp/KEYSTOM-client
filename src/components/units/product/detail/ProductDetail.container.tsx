import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductDetailPresenter from "../detail/ProductDetail.presenter";
import { useRecoilState } from "recoil";
import {
    recoilLength,
    recoilSpaceLength,
    recoilEnterLength,
    recoilEscLength,
    paymentProductId,
} from "../../../commons/store";
import {
    CREATE_CUSTOM,
    CREATE_EVENT_COUPON,
    FETCH_PRODUCT,
} from "./ProductDetail.queries";

export default function ProductDetailContainer() {
    const router = useRouter();
    const [isBasket, setIsBasket] = useState(false);
    const [, setProductId] = useRecoilState(paymentProductId);
    const [recoilLength2] = useRecoilState(recoilLength);
    const [recoilSpaceLength2] = useRecoilState(recoilSpaceLength);
    const [recoilEnterLength2] = useRecoilState(recoilEnterLength);
    const [recoilEscLength2] = useRecoilState(recoilEscLength);

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

        if (a.includes(productId)) {
            setIsBasket(true);
        }
    }, [data?.fetchProduct.id]);

    const onClickBasket = (el: any) => () => {
        const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

        const temp = baskets.filter((basketEl: any) => basketEl.id === el.id);

        if (temp.length === 1) {
            Modal.error({content:"이미 장바구니에 있습니다!"});
            return;
        }

        const { __typename, ...newEl } = el;
        baskets.push(newEl);

        localStorage.setItem("baskets", JSON.stringify(baskets));

        setIsBasket(true);
    };

    const onClickDelete = (el: any) => () => {
        const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

        const newBaskets = baskets.filter(
            (basketEl: any) => basketEl.id !== el.id
        );
        localStorage.setItem("baskets", JSON.stringify(newBaskets));
        setIsBasket((prev) => !prev);
    };

    const onClickCouponApply = () => {};

    const onClickPayNow = async (event: any) => {
        try {
            await createCustom({
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
            setProductId(event.target.id);
            router.push("/payment");
        } catch (error) {
            alert(error instanceof Error);
        }
    };

    const onClickGetCoupon = async () => {
        try {
            await getCoupon({});
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
