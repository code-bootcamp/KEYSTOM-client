import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
    accessTokenState,
    isLoadedState,
    restoreAccessTokenLoadable,
} from "../store/index";

export const withAuth = (Component:any) => (props:any) => {
    const [accessToken] = useRecoilState(accessTokenState);
    const [isLoaded] = useRecoilState(isLoadedState);
    const loadableAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

    useEffect(() => {
        if (!accessToken) {
            loadableAccessToken.toPromise().then((newAccessToken) => {
                if (!newAccessToken) {
                    alert("로그인 후 이용 가능합니다!!!");
                    history.back();
                }
            });
        }
    }, [isLoaded]);

    return <Component {...props} />;
};
