import { Modal, Button } from 'antd';
import * as S from "./Login.styles"


export default function LoginPresenter(){



    return (
        <S.LoginWrapper>
            <S.BodyHTML>
                <S.Wrapper>
                    <S.LoginDiv>
                        <S.LogoDiv>logo</S.LogoDiv>
                    
                        <S.LoginInput type="text"  placeholder='아이디' />
                        <S.LoginError></S.LoginError>
                        <S.LoginInput  type="password"  placeholder='비밀번호' />
                        <S.LoginError></S.LoginError>

                    </S.LoginDiv>

                    <S.BtnWrapper>
                        <S.LoginBtn>카카오 로그인하기</S.LoginBtn>
                        <S.LoginBtn>로그인</S.LoginBtn>
                    </S.BtnWrapper>

                    <S.StringDiv>
                        <span>아직 계정이 없으신가요?</span>
                        <S.ClickSpan>회원가입</S.ClickSpan>
                    </S.StringDiv>
        
                </S.Wrapper>
            </S.BodyHTML>
    </S.LoginWrapper>
    )
}