import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState } from "../store/index";
export function useAuth() {

    const [accessToken] = useRecoilState(accessTokenState);

    useEffect(() => {
        async function Auth() {
            if (!accessToken) {
                const newAccessToken = await getAccessToken();
                if (!newAccessToken) {
                    alert("로그인이 필요합니다.");
                }
            }
        }
        Auth();
    }, []);
}
