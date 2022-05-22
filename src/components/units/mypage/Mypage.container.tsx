import { withAuth } from "../../commons/hocs/withAuth";
import { useAuth } from "../../commons/hooks/useAuth";
import MypagePresenter from "./Mypage.presenter";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            nickName
            email
            name
            profileImage
            address
        }
    }
`;

export default function MypageContainer() {
    const router = useRouter();
    const { data } = useQuery(FETCH_USER_LOGGED_IN);
    console.log(data);

    const moveToReviewWrite = () => {
        router.push("/review");
    };

    return (
        <MypagePresenter data={data} moveToReviewWrite={moveToReviewWrite} />
    );
}
