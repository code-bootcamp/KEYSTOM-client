import { gql, useQuery } from "@apollo/client";
import MypagePresenter from "./Mypage.presenter";

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
    const { data } = useQuery(FETCH_USER_LOGGED_IN);
    console.log(data);

    return <MypagePresenter />;
}
