import { useAuth } from "../../commons/hooks/useAuth";
import MypagePresenter from "./Mypage.presenter";

export default function MypageContainer() {
    useAuth();
    return <MypagePresenter />;
}
