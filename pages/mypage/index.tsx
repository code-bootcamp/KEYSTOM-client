import { withAuth } from "../../src/components/commons/hocs/withAuth";
import MypageContainer from "../../src/components/units/mypage/Mypage.container";

function Mypage() {
    return <MypageContainer />;
}

export default withAuth(Mypage);
