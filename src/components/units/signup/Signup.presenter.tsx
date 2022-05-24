import * as S from "./Signup.styles";

export default function SignUpPresenter(props: any) {
    return (
        <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
            <S.Container>
                <S.SignUpContainer>
                    <S.SignUpTitle>회원가입하기</S.SignUpTitle>
                    <S.SignUpContentsWrapper>
                        <S.InfoTitle>기본 정보 입력</S.InfoTitle>

                        <S.InfoDiv>
                            <S.InfoText>이름</S.InfoText>
                            <S.NameInfoInput
                                placeholder="홍길동"
                                {...props.register("name")}
                            ></S.NameInfoInput>
                        </S.InfoDiv>
                        <S.SignUpError>
                            {props.formState.errors.name?.message}
                        </S.SignUpError>

                        <S.InfoDiv>
                            <S.InfoText>메일</S.InfoText>
                            <S.IDInfoInput
                                placeholder="HongilDong8093"
                                {...props.register("email")}
                            />
                        </S.InfoDiv>
                        <S.SignUpError>
                            {props.formState.errors.email?.message}
                        </S.SignUpError>

                        <S.InfoDiv>
                            <S.InfoText>비밀번호</S.InfoText>
                            <S.InfoInput
                                type="password"
                                placeholder="********"
                                {...props.register("password")}
                                onChange={props.onChangePassword}
                            />
                            <S.PasswordWatch>
                                <S.EyeIcon isWrite={props.isWrite} />
                            </S.PasswordWatch>
                        </S.InfoDiv>
                        <S.SignUpError>
                            {props.formState.errors.password?.message}
                        </S.SignUpError>

                        <S.InfoDiv>
                            <S.InfoText>비밀번호 확인</S.InfoText>
                            <S.InfoInput
                                type="password"
                                placeholder="영문 + 숫자 조합 8~16자리를 입력해주세요. "
                                {...props.register("passwordCheck")}
                                onChange={props.onChangePasswordCheck}
                            />
                            <S.PasswordWatch>
                                <S.EyeIcon2 isWrite2={props.isWrite2} />
                            </S.PasswordWatch>
                        </S.InfoDiv>
                        <S.SignUpError>
                            {props.formState.errors.passwordCheck?.message}
                        </S.SignUpError>

                        <S.InfoDiv>
                            <S.InfoText>배송 주소</S.InfoText>
                            <S.InfoInputWrapper>
                                <S.InfoDiv>
                                    <S.ZoncodeWrapper>
                                        <S.ZoncodeInput placeholder="14600" />
                                        <S.ZoncodeButton>
                                            우편 번호 찾기
                                        </S.ZoncodeButton>
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

                        <S.InfoDiv>
                            <S.InfoText>휴대폰 번호</S.InfoText>
                            <S.InfoInput type="number" />
                        </S.InfoDiv>
                        <S.SignUpError>
                            {props.formState.errors.passwordCheck?.message}
                        </S.SignUpError>

                        {/* 구분선 */}
                    </S.SignUpContentsWrapper>
                </S.SignUpContainer>
                <S.SignUpBtnWrapper>
                    <S.SignUpCancelButton onClick={props.moveToHome}>
                        취소하기
                    </S.SignUpCancelButton>
                    <S.SignUpButton>가입하기</S.SignUpButton>
                </S.SignUpBtnWrapper>
            </S.Container>
        </form>
    );
}
