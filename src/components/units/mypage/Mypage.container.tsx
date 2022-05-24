import MypagePresenter from "./Mypage.presenter";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            email
            name
            nickName
            profileImage
            isAdmin
        }
    }
`;

export default function MypageContainer() {
    const [baskets, setBaskets] = useState("");
    const [isBasket, setIsBasket] = useState(false);

    const router = useRouter();
    const { data } = useQuery(FETCH_USER_LOGGED_IN);

    console.log("로그인 유저", data);

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

    return (
        <MypagePresenter
            data={data}
            moveToReviewWrite={moveToReviewWrite}
            onClickDeleteBasket={onClickDeleteBasket}
            baskets={baskets}
        />
    );
}
