import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState} from "../../store";
import * as S from "../../../units/login/Login.styles";
import * as yup from "yup";
import { LOGIN} from "../../../units/login/Login.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import Link from "next/link";

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
    height: 80px;
    width: 100%;
    background-color: transparent;
    padding: 25px 340px;
    color: #fff;
    z-index: 10;
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
    color: #f1f1f1;

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
    color: #f1f1f1;
    padding-left: 50px;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;
    :hover {
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
    width: 24px;
    height: 24px;
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

export default function LayoutHeader() {
    const [nowLogin, ] = useRecoilState(accessTokenState);
    const [logout] = useMutation(LOG_OUT);

    const [, setAccessToken] = useRecoilState(accessTokenState);
    const [login] = useMutation(LOGIN);

    const { register, formState, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

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

            Modal.success({ content: "로그인 성공하였습니다." });
            location.reload();
        } catch (error: any) {
            Modal.error({ content: error.message });
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
                        <S.Wrapper>
                            <S.LoginDiv>
                                <S.CancelWrapper></S.CancelWrapper>

                                <S.LogoDiv>
                                    <S.Logo src="/images/header/keystom.png" />
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
                                <S.LoginBtn>Login</S.LoginBtn>
                                <S.SocialLogin>
                                    <Link href="https://delifarm.site/login/kakao">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <S.SocialLoginImg src="/images/login/social-login-kakao.png" />
                                        </a>
                                    </Link>

                                    <Link href="https://delifarm.site/login/naver">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <S.SocialLoginImg src="/images/login/social-login-naver.png" />
                                        </a>
                                    </Link>

                                    <Link href="https://delifarm.site/login/google">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <S.SocialLoginImg src="/images/login/social-login-google.png" />
                                        </a>
                                    </Link>
                                </S.SocialLogin>
                            </S.BtnWrapper>

                            <S.StringWrapper>
                                <S.StringDiv>Forgot Password?</S.StringDiv>
                                <S.FindPassBtn>Find Password</S.FindPassBtn>
                            </S.StringWrapper>

                            <S.StringWrapper>
                                <S.StringDiv>Not a member yet?</S.StringDiv>
                                <S.SignUpBtn
                                    onClick={moveToSignup}
                                    type="button"
                                >
                                    Sign Up
                                </S.SignUpBtn>
                            </S.StringWrapper>
                        </S.Wrapper>
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
                        <Menu onClick={moveToStore}>Store</Menu>
                        <Menu onClick={moveToEventPage}>Event</Menu>
                        <Menu onClick={moveToMyPage}>My Page</Menu>
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
                                    src="/images/header/logout.png"
                                    onClick={onClickLogout}
                                />
                            </IconWrapper>
                        )}

                        <BasketWrapper>
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
