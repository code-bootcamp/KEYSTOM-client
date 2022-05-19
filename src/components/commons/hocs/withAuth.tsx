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
import { accessTokenState, restoreAccessTokenLoadable } from "../store/index";
import { Modal } from "antd";
// @ts-ignore

export const withAuth = (Component) => (props) => {
    const [accessToken] = useRecoilState(accessTokenState);
    const restoreAccessToken = useRecoilValueLoadable(
        restoreAccessTokenLoadable
    );
    const router = useRouter();

    useEffect(() => {
        if (!accessToken) {
            restoreAccessToken.toPromise().then((newAccessToken) => {
                if (!newAccessToken) {
                    Modal.error({
                        content: "상품을 등록하려면 로그인이 필요합니다.",
                    });
                    router.push("/login");
                }
            });
        }
    }, []);

    return <Component {...props} />;
};
