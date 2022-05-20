import { withAuth } from "../../commons/hocs/withAuth";
import { useAuth } from "../../commons/hooks/useAuth";
import MypagePresenter from "./Mypage.presenter";

function MypageContainer() {
    return <MypagePresenter />;
}

export default withAuth(MypageContainer);
