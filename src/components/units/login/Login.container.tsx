import LoginPresenter from "./Login.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { accessTokenState, userInfoState } from "../../commons/store";
import { useApolloClient, useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { LOGIN } from "./Login.queries";
import { ILogin } from "./Login.types";

const schema = yup.object({
    email: yup.string().required("아이디를 입력해주세요."),
    // .max(12, "아이디는 12자리 이하여야 합니다.")
    // .min(4, "아이디는 4자리 이상이어야 합니다."),
    password: yup
        .string()
        // .min(3, "비밀번호는 최소 4자리 이상 입력해 주세요.")
        // .max(15, "비밀번호는 최대 15자리로 입력해 주세요.")
        .required("비밀번호는 필수 입력 사항입니다."),
    // password2: yup
    //     .string()
    //     .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
});

export default function LoginContainer() {
    const router = useRouter();
    const [, setAccessToken] = useRecoilState(accessTokenState);
    const [, setUserInfo] = useRecoilState(userInfoState);
    const [login] = useMutation(LOGIN);
    const client = useApolloClient();

    const { register, formState, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    // 로그인 버튼
    const onClickLogin = async (data: ILogin) => {
        try {
            const result = await login({
                variables: {
                    ...data,
                },
            });
            console.log("이건 내 토큰", result.data?.login);
            const accessToken = result.data?.login;
            setAccessToken(accessToken);
            // localStorage.setItem("accessToken", accessToken);

            //   // 유저정보 받아오기
            //   const resultUserInfo = await client.query({
            //     query: MY_PAGE,
            //     context: {
            //       headers: {
            //         Authorization: `Bearer ${accessToken}`,
            //       },
            //     },
            //   });
            //   const userInfo = resultUserInfo.data.fetchUserLoggedIn;
            //   setUserInfo(userInfo);

            alert("로그인에 성공했습니다!.");
            router.push("/");
        } catch (error) {
            alert(error instanceof Error);
        }
    };

    return (
        <LoginPresenter
            onClickLogin={onClickLogin}
            register={register}
            formState={formState}
            handleSubmit={handleSubmit}
            schema={schema}
        />
    );
}
