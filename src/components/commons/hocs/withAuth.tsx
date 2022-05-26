// import { Modal } from "antd";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

// // @ts-ignore
// export const withAuth = (Component) => (props) => {
//   const router = useRouter();

//   // 권한분기 로직
//   useEffect(() => {
//     if (!localStorage.getItem("accessToken")) {
//       Modal.error({
//         content: "로그인 후 이용 가능합니다!",
//       });
//       router.push("/login");
//     }
//   }, []);

//   return <Component {...props} />;
// };

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
    accessTokenState,
    isLoadedState,
    restoreAccessTokenLoadable,
} from "../store/index";
import { Modal } from "antd";
// @ts-ignore

export const withAuth = (Component) => (props) => {
    const router = useRouter();
    const [accessToken] = useRecoilState(accessTokenState);
    const [isLoaded] = useRecoilState(isLoadedState);
    const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

    useEffect(() => {
        // 3. 글로벌 프로미스 방식(비회원 접근시 토큰 재발급 요청 방지를 위해 로딩과 함께 사용할 것)
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
