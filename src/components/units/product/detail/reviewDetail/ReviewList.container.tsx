import ReviewDetailPresenter from "./ReviewList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_REVIEWS } from "./ReviewList.queries";
import { useRouter } from "next/router";

export default function ReviewDetail() {
    const router = useRouter();

    const { data } = useQuery(FETCH_REVIEWS, {
        variables: {
            page: 1,
            productId: String(router.query.productId),
        },
    });

    return <ReviewDetailPresenter data={data} />;
}
