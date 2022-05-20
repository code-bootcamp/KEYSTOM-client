import { withAuth } from "../../commons/hocs/withAuth";
import { useAuth } from "../../commons/hooks/useAuth";
import MypagePresenter from "./Mypage.presenter";
import { useRouter } from 'next/router';

function MypageContainer() {
    const router = useRouter()

    const moveToReviewWrite = () => {
        router.push("/review")
    }


    return <MypagePresenter 
    moveToReviewWrite={moveToReviewWrite}
    />;
}

export default withAuth(MypageContainer);
