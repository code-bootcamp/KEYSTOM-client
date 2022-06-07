
import * as S from "./Login.styles";
import { useRouter } from "next/router";
import { ILoginPresenterProps } from "./Login.types";

export default function LoginPresenter(props: ILoginPresenterProps) {
    const router = useRouter();

    const moveToSignup = () => {
        router.push("/signup");
    };

    return (
        <form onSubmit={props.handleSubmit(props.onClickLogin)}>
            <S.LoginWrapper>
                <S.Wrapper>
                    <S.LoginDiv>
                        <S.CancelWrapper>
                            <S.CancelDiv>
                                <S.CancelBtn src="/images/cancel.png" />
                            </S.CancelDiv>
                        </S.CancelWrapper>

                        <S.LogoDiv>
                            <S.Logo src="/images/lg.png" />
                        </S.LogoDiv>

                        <S.LoginInput
                            type="text"
                            placeholder="아이디"
                            {...props.register("email")}
                        />
                        <S.LoginError>
                            {props.formState.errors.email?.message}
                        </S.LoginError>
                        <S.LoginInput
                            type="password"
                            placeholder="비밀번호"
                            {...props.register("password")}
                        />
                        <S.LoginError>
                            {props.formState.errors.password?.message}
                        </S.LoginError>
                    </S.LoginDiv>

                    <S.BtnWrapper>
                        <S.LoginBtn>로그인하기</S.LoginBtn>
                        <S.SocialLogin>
                            <S.SocialLoginImg src="/images//KakaoLogin_img.png" />
                            <S.SocialLoginImg src="/images/NaverLogin_img.png" />
                            <S.SocialLoginImg src="/images/GoogleLogin_img.png" />
                        </S.SocialLogin>
                    </S.BtnWrapper>

                    <S.StringWrapper>
                        <S.StringDiv>비밀번호를 잊으셨나요?</S.StringDiv>
                        <S.FindPassBtn>비밀번호 찾기</S.FindPassBtn>
                    </S.StringWrapper>

                    <S.StringWrapper>
                        <S.StringDiv>아직 회원이 아니신가요?</S.StringDiv>
                        <S.SignUpBtn onClick={moveToSignup} type="button">
                            회원가입하기
                        </S.SignUpBtn>
                    </S.StringWrapper>
                </S.Wrapper>
            </S.LoginWrapper>
        </form>
    );
}
