import LoginPresenter from "./Login.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { accessTokenState, userInfoState } from "../../commons/store";
import { useApolloClient, useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { LOGIN, LOGIN_TEST } from "./Login.queries";
import { ILogin } from "./Login.types";
import { Modal } from "antd";

const schema = yup.object({
    email: yup.string().required("아이디를 입력해주세요."),
    password: yup
        .string()
        .required("비밀번호는 필수 입력 사항입니다."),
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
            router.push("/");
            Modal.success({content:"로그인 성공하였습니다."})
        } catch (error:any) {
            Modal.error({content:error.message})
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
