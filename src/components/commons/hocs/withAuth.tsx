import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
    accessTokenState,
    isLoadedState,
    restoreAccessTokenLoadable,
} from "../store/index";
// @ts-ignore

export const withAuth = (Component) => (props) => {
    const router = useRouter();
    const [accessToken] = useRecoilState(accessTokenState);
    const [isLoaded] = useRecoilState(isLoadedState);
    const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

    useEffect(() => {
        if (!accessToken) {
            aaa.toPromise().then((newAccessToken) => {
                if (!newAccessToken) {
                    alert("로그인 후 이용 가능합니다!!!");
                    history.back();
                }
            });
        }
    }, [isLoaded]);

    return <Component {...props} />;
};
