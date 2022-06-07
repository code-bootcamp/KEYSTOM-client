import MypagePresenter from "./Mypage.presenter";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import axios from "axios";

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
            isReview
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
    const [code, setCode] = useState("");
    const [invoice, setInvoice] = useState("");
    const [baskets, setBaskets] = useState("");
    const [isBasket, setIsBasket] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalTracking, setIsModalTracking] = useState(false);
    const [isReview,] = useState(false);
    const [orderId, setOrderId] = useState("");

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

    const handleOK2 = () => {
        setIsModalTracking(false);
    };

    const handleCancel2 = () => {
        setIsModalTracking(false);
    };

    useEffect(() => {
        const basketsArr = JSON.parse(localStorage.getItem("baskets") || "[]");
        setBaskets(basketsArr);
    }, [isBasket]);

    const moveToReviewWrite = (event: any) => {
        console.log(event.target.id);
        setOrderId(event.target.id);
        console.log(orderId);

        router.push(`/mypage/${event.target.id}`);
    };

    const moveToCancel = (event: any) => {
        console.log(event.target.id);
        setOrderId(event.target.id);
        console.log(orderId);

        alert("이미 작성 완료");
    };

    const onClickSeeCoupon = () => {
        setIsModalOpen(true);
    };

    const onClickTracking = () => {
        setIsModalTracking(true);
    };

    const moveToProductDetail = (event: any) => {
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

    const onChangeCode = (e: any) => {
        setCode(e.currentTarget.value);
        console.log(code);
    };
    const onChangeInvoice = (e: any) => {
        setInvoice(e.currentTarget.value);
        console.log(invoice);
    };

    const onClickTrackingSubmit = async () => {
        const url = `http://info.sweettracker.co.kr/tracking/3?t_key=SuS6FeOnk84sycPTn94CSQ&t_code=${code}&t_invoice=${invoice}`;
        const result = await axios.post(url);

        console.log(result);
        window.open(url, "", "_blank");
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
            handleOK={handleOK}
            handleCancel={handleCancel}
            handleOK2={handleOK2}
            handleCancel2={handleCancel2}
            isModalOpen={isModalOpen}
            isModalTracking={isModalTracking}
            moveToProductDetail={moveToProductDetail}
            onClickTrackingSubmit={onClickTrackingSubmit}
            onChangeCode={onChangeCode}
            onChangeInvoice={onChangeInvoice}
            isReview={isReview}
            moveToCancel={moveToCancel}
        />
    );
}
