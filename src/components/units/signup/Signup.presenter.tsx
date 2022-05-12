import * as S from './Signup.styles'


export default function SignUpPresenter(){

    return (
        <S.SignUpContainer>
            <S.SignUpTitle>
                회원가입하기
            </S.SignUpTitle>
            <S.SignUpContentsWrapper>
                <S.InfoTitle>기본 정보 입력</S.InfoTitle>

                <S.InfoDiv>
                    <S.InfoText>이름</S.InfoText>
                    <S.InfoInput placeholder='홍길동'/>
                </S.InfoDiv>

                <S.InfoDiv>
                    <S.InfoText>이메일</S.InfoText>
                    <S.InfoInput placeholder='HongilDong8093'/>
                    <span>@</span>
                    <input placeholder='직접 입력'/>
                </S.InfoDiv>

                <S.InfoDiv>
                    <S.InfoText>비밀번호</S.InfoText>
                    <S.InfoInput placeholder='********'/>
                </S.InfoDiv>

                <S.InfoDiv>
                    <S.InfoText>비밀번호 확인</S.InfoText>
                    <S.InfoInput placeholder='영문+숫자 조합 8~16자리를 입력해주세요 '/>
                </S.InfoDiv>

                <S.InfoDiv>
                    <S.InfoText>배송 주소</S.InfoText>
                    <S.InfoInputWrapper>
                        <S.InfoDiv>
                            <S.ZoncodeWrapper>
                                <S.ZoncodeInput placeholder='14600' readOnly/>
                                <button>우편 번호 찾기</button>
                            </S.ZoncodeWrapper>
                        </S.InfoDiv>
                        <S.InfoDiv>
                            <S.InfoInput placeholder='서울시 행복구 낙원동 1004로' readOnly/>
                        </S.InfoDiv>
                        <S.InfoDiv>
                            <S.InfoInput placeholder='1004동 1004호'/>
                        </S.InfoDiv>
                    </S.InfoInputWrapper>
                </S.InfoDiv>
            </S.SignUpContentsWrapper>
        </S.SignUpContainer>
    )
}