// 헤더 페이지
import { gql, useApolloClient, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../store";
import * as S from "../../../units/login/Login.styles";
import * as yup from "yup";
import { LOGIN, LOGIN_TEST } from "../../../units/login/Login.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Modal } from "antd";

export const LOG_OUT = gql`
    mutation logout {
        logout
    }
`;

const schema = yup.object({
    email: yup.string().required("아이디를 입력해주세요."),

    password: yup.string().required("비밀번호는 필수 입력 사항입니다."),
});

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: transparent;
    padding: 25px 340px;
    color: #fff;
`;

const LogoDiv = styled.div`
    width: 140px;
    margin-right: 60px;
`;

const Logo = styled.div`
    font-family: "Orbitron-bold";
    font-size: 24px;
    line-height: 100%;
    width: 100%;
    text-align: center;
    cursor: pointer;
`;
const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const MenuDiv = styled.div`
    display: flex;
    align-items: center;
    margin-right: 60px;
`;
const Menu = styled.div`
    /* color: #B150F2; */
    color: #fff;
    padding-left: 50px;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;
    :hover {
        font-weight: 600;
        color: #b150f2;
    }

    transition: 400ms;
    border-bottom: 2px solid transparent;

    &::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background: #b150f2;
        transition: width 0.3s;
    }

    &:hover::after {
        width: 100%;
        transition: width 0.3s;
    }
`;
const MenuIconDiv = styled.div`
    display: flex;
    width: 68px;
    height: 100%;
`;

const IconWrapper = styled.div`
    display: flex;
    width: 24px;
    height: 24px;
    margin-right: 20px;
`;

const UserIcon = styled.img`
    width: 100%;
    cursor: pointer;
`;
const BasketWrapper = styled.div`
    width: 24px;
    height: 24px;
`;

const BasketIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

// const BasketNum = styled.div`
// width: 20px;
// height: 20px;
// border-radius: 20px;
// padding-left: 6px;
// background-color:#B150F2  ;
// position: relative;
// left: 35px;
// top:23px;
// `

export default function LayoutHeader() {
    const [nowLogin, setNowLogin] = useRecoilState(accessTokenState);
    const [logout] = useMutation(LOG_OUT);

    const [, setAccessToken] = useRecoilState(accessTokenState);
    const [, setUserInfo] = useRecoilState(userInfoState);
    const [login] = useMutation(LOGIN);
    const [logintest] = useMutation(LOGIN_TEST);
    const client = useApolloClient();

    const { register, formState, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    // 로그인 버튼
    const onClickLogin = async (data: any) => {
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
            location.reload();
        } catch (error) {
            alert(error instanceof Error);
        }
    };

    console.log("현재 로그인 상태?", nowLogin);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOK = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const router = useRouter();

    const moveToHome = () => {
        router.push("/");
    };

    const moveToStore = () => {
        router.push("/store");
    };

    const moveToMyPage = () => {
        router.push("/mypage");
    };

    const moveToLogin = () => {
        setIsModalOpen(true);
    };

    const moveToEventPage = () => {
        router.push("/event");
    };

    const onClickLogout = async () => {
        try {
            await logout({});
            location.reload();
            router.push("/");
        } catch (error) {
            alert("로그아웃 실패");
        }
    };

    const moveToSignup = () => {
        router.push("/signup");
        setIsModalOpen(false);
    };

    return (
        <>
            {isModalOpen ? (
                <Modal
                    visible={true}
                    centered
                    onOk={handleOK}
                    onCancel={handleCancel}
                    okButtonProps={{ style: { display: "none" } }}
                    cancelButtonProps={{ style: { display: "none" } }}
                    footer={null}
                    style={{
                        borderRadius: "30px",
                        overflow: "auto",
                    }}
                >
                    <form onSubmit={handleSubmit(onClickLogin)}>
                        {/* <S.LoginWrapper> */}
                        <S.Wrapper>
                            <S.LoginDiv>
                                <S.CancelWrapper>
                                    {/* <S.CancelDiv>
                                        <S.CancelBtn src="/images/cancel.png" />
                                    </S.CancelDiv> */}
                                </S.CancelWrapper>

                                <S.LogoDiv>
                                    <S.Logo src="/images/lg.png" />
                                </S.LogoDiv>

                                <S.LoginInput
                                    type="text"
                                    placeholder="아이디"
                                    {...register("email")}
                                />
                                <S.LoginError>
                                    {formState.errors.email?.message}
                                </S.LoginError>
                                <S.LoginInput
                                    type="password"
                                    placeholder="비밀번호"
                                    {...register("password")}
                                />
                                <S.LoginError>
                                    {formState.errors.password?.message}
                                </S.LoginError>
                            </S.LoginDiv>

                            <S.BtnWrapper>
                                <S.LoginBtn>로그인하기</S.LoginBtn>
                                <S.SocialLogin>
                                    <S.SocialLoginBtn src="/images//KakaoLogin_img.png" />
                                    <S.SocialLoginBtn src="/images/NaverLogin_img.png" />
                                    <S.SocialLoginBtn src="/images/GoogleLogin_img.png" />
                                </S.SocialLogin>
                            </S.BtnWrapper>

                            <S.StringWrapper>
                                <S.StringDiv>
                                    비밀번호를 잊으셨나요?
                                </S.StringDiv>
                                <S.FindPassBtn>비밀번호 찾기</S.FindPassBtn>
                            </S.StringWrapper>

                            <S.StringWrapper>
                                <S.StringDiv>
                                    아직 회원이 아니신가요?
                                </S.StringDiv>
                                <S.SignUpBtn
                                    onClick={moveToSignup}
                                    type="button"
                                >
                                    회원가입하기
                                </S.SignUpBtn>
                            </S.StringWrapper>
                        </S.Wrapper>
                        {/* </S.LoginWrapper> */}
                    </form>
                </Modal>
            ) : (
                <div></div>
            )}
            <Wrapper>
                <LogoDiv>
                    <Logo onClick={moveToHome}>KEYSTOM</Logo>
                </LogoDiv>
                <MenuWrapper>
                    <MenuDiv>
                        <Menu onClick={moveToStore}>STORE</Menu>
                        <Menu onClick={moveToEventPage}>EVENT</Menu>
                        <Menu onClick={moveToMyPage}>MY PAGE</Menu>
                    </MenuDiv>
                    <MenuIconDiv>
                        {nowLogin === undefined ? (
                            <IconWrapper>
                                <UserIcon
                                    src="/images/header/account.png"
                                    onClick={moveToLogin}
                                />
                            </IconWrapper>
                        ) : (
                            <IconWrapper>
                                <UserIcon
                                    src="/images/header/delete.png"
                                    onClick={onClickLogout}
                                />
                            </IconWrapper>
                        )}

                        <BasketWrapper>
                            {/* <BasketNum>0</BasketNum> */}
                            <BasketIcon
                                src="/images/header/on.png"
                                onClick={moveToMyPage}
                            />
                        </BasketWrapper>
                    </MenuIconDiv>
                </MenuWrapper>
            </Wrapper>
        </>
    );
}
