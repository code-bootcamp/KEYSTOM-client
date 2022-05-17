import * as S from "./Signup.styles";

export default function SignUpPresenter(props: any) {
    return (
        <form onSubmit={props.handleSubmit(props.onclickSubmit)}>
            <S.Container>
                <S.SignUpContainer>
                    <S.SignUpTitle>회원가입하기</S.SignUpTitle>
                    <S.SignUpContentsWrapper>
                        <S.InfoTitle>기본 정보 입력</S.InfoTitle>

                        <S.InfoDiv>
                            <S.InfoText>이름</S.InfoText>
                            <S.NameInfoInput placeholder="홍길동" />
                        </S.InfoDiv>

                        <S.InfoDiv>
                            <S.InfoText>아이디</S.InfoText>
                            <S.IDInfoInput placeholder="HongilDong8093" />
                        </S.InfoDiv>

                        <S.InfoDiv>
                            <S.InfoText>비밀번호</S.InfoText>
                            <S.InfoInput placeholder="********" />
                            <S.PasswordWatch>
                                <S.EyeIcon src="/images/eye.png" />
                            </S.PasswordWatch>
                        </S.InfoDiv>

                        <S.InfoDiv>
                            <S.InfoText>비밀번호 확인</S.InfoText>
                            <S.InfoInput placeholder="영문 + 숫자 조합 8~16자리를 입력해주세요. " />
                            <S.PasswordWatch>
                                <S.EyeIcon src="/images/eye.png" />
                            </S.PasswordWatch>
                        </S.InfoDiv>

                        <S.InfoDiv>
                            <S.InfoText>배송 주소</S.InfoText>
                            <S.InfoInputWrapper>
                                <S.InfoDiv>
                                    <S.ZoncodeWrapper>
                                        <S.ZoncodeInput placeholder="14600" />
                                        <button>우편 번호 찾기</button>
                                    </S.ZoncodeWrapper>
                                </S.InfoDiv>
                                <S.InfoDiv>
                                    <S.InfoInput
                                        placeholder="서울시 행복구 낙원동 1004로"
                                        readOnly
                                    />
                                </S.InfoDiv>
                                <S.InfoDiv>
                                    <S.InfoInput placeholder="B동 1202호" />
                                </S.InfoDiv>
                            </S.InfoInputWrapper>
                        </S.InfoDiv>
                    </S.SignUpContentsWrapper>
                    <S.SignUpBtnWrapper>
                        <S.SignUpCancelButton onClick={props.moveToHome}>
                            취소하기
                        </S.SignUpCancelButton>
                        <S.SignUpButton onClick={props.onClickSignUp}>
                            가입하기
                        </S.SignUpButton>
                    </S.SignUpBtnWrapper>
                </S.SignUpContainer>
            </S.Container>
        </form>
    );
}
