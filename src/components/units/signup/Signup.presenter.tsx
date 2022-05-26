import { Modal } from "antd";
import * as S from "./Signup.styles";
import DaumPostcode from 'react-daum-postcode';


export default function SignUpPresenter(props: any) {
    return (
        <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
            <S.Container>
                <S.SignUpContainer>
                    <S.SignUpTitle>Sign Up</S.SignUpTitle>
                    <S.SignUpContentsWrapper>
                        {/* <S.InfoTitle>기본 정보 입력</S.InfoTitle> */}

                        <S.InfoDiv>
                            <S.InfoText>Name</S.InfoText>
                            <S.InfoInput
                                // style={{width:"200px"}}
                                placeholder="홍길동"
                                {...props.register("name")}
                            />
                        </S.InfoDiv>
                        <S.SignUpError>
                            {props.formState.errors.name?.message}
                        </S.SignUpError>

                        <S.InfoDiv>
                            <S.InfoText>Email</S.InfoText>
                            <S.InfoInput
                                placeholder="HongilDong8093@gmail.com"
                                {...props.register("email")}
                                onChange={props.onChangeEmail}
                            />

                            <S.EmailCheckButton
                             isWriteEmail={props.isWriteEmail} 
                            type="button" 
                            onClick={props.onClickCheckEmail}>Check Email</S.EmailCheckButton>
                        </S.InfoDiv>
                        <S.SignUpError>
                            {props.formState.errors.email?.message}
                        </S.SignUpError>

                        <S.InfoDiv>
                            <S.InfoText>NickName</S.InfoText>
                            <S.InfoInput
                            // style={{width:"200px"}}
                            placeholder="Gill"
                            {...props.register("nickName")}
                            />
                        </S.InfoDiv>
                        <S.SignUpError>
                            {props.formState.errors.nickName?.message}
                        </S.SignUpError>

                        <S.InfoDiv>
                            <S.InfoText>Password</S.InfoText>
                            <S.InfoInput
                                type={props.passwordType}
                                placeholder="********"
                                {...props.register("password")}
                                onChange={props.onChangePassword}
                            />
                            <S.PasswordWatch>
                                <S.EyeIcon isWrite={props.isWrite} onClick={props.togglePassword}/>
                            </S.PasswordWatch>
                        </S.InfoDiv>
                        <S.SignUpError>
                            {props.formState.errors.password?.message}
                        </S.SignUpError>

                        <S.InfoDiv>
                            <S.InfoText>Password Check</S.InfoText>
                            <S.InfoInput
                                type={props.passwordCheckType}
                                placeholder="영문 + 숫자 조합 8~16자리를 입력해주세요. "
                                {...props.register("passwordCheck")}
                                onChange={props.onChangePasswordCheck}
                            />
                            <S.PasswordWatch>
                                <S.EyeIcon2 isWrite2={props.isWrite2} onClick={props.togglePasswordCheck}/>
                            </S.PasswordWatch>
                        </S.InfoDiv>
                        <S.SignUpError>
                            {props.formState.errors.passwordCheck?.message}
                        </S.SignUpError>

                        <S.InfoDiv>
                            <S.InfoText>Address</S.InfoText>
                            <S.InfoInputWrapper>
                                <S.InfoDiv>
                                    <S.ZoncodeWrapper>
                                        <S.ZoncodeInput readOnly placeholder="14600"  type="text" id="zipCode" 
                                        value={props.zipCode || ""} />
                                        <S.ZoncodeButton onClick={props.showModal} type="button">
                                            Find Address
                                        </S.ZoncodeButton>
                                    </S.ZoncodeWrapper>
                                </S.InfoDiv>
                                <S.InfoDiv>
                                    <S.InfoInput
                                        placeholder="서울시 행복구 낙원동 1004로"
                                        readOnly
                                        value={props.address}
                                    />
                                </S.InfoDiv>
                                <S.InfoDiv>
                                    <S.InfoInput 
                                    placeholder="B동 1202호" 
                                    onChange={props.onChangeAddressDetail}/>
                                </S.InfoDiv>
                            </S.InfoInputWrapper>

                            {props.isOpen &&
                                <Modal 
                                    visible={true}     
                                    onOk={props.handleOk} 
                                    onCancel={props.handleCancel}>

                                    <DaumPostcode onComplete={props.handleComplete} />
                                </Modal>
                            }
                        </S.InfoDiv>

                        <S.InfoDiv>
                            <S.InfoText>Phone</S.InfoText>
                            <S.InfoInput type="number"
                            placeholder="숫자만 입력해주세요."
                            // style={{width:"200px"}}
                            onChange={props.onChangePhone}
                            // {...props.register("phone")} 
                            />

                            <S.PhoneCheckButton 
                            type="button" 
                            isWritePhone={props.isWritePhone}
                            onClick={props.onClickSendToken}

                            >Send Token</S.PhoneCheckButton>
                        </S.InfoDiv>
                        <S.InfoDiv>
                            <S.Timer>{props.time}</S.Timer>
                            <S.InfoInput 
                            placeholder="인증번호를 입력해주세요."
                            onChange={props.onChangeToken}
                            />
                            <S.CheckTokenButton 
                            isWriteToken={props.isWriteToken} 
                            onClick={props.onClickCheckToken}>
                            Check Token
                            </S.CheckTokenButton>
                            </S.InfoDiv>
                        <S.SignUpError>
                            {props.formState.errors.phone?.message}
                        </S.SignUpError>

                        {/* 구분선 */}
                    </S.SignUpContentsWrapper>
                </S.SignUpContainer>
                <S.SignUpBtnWrapper>
                    <S.SignUpCancelButton onClick={props.moveToHome}>
                        Cancel
                    </S.SignUpCancelButton>
                    <S.SignUpButton 
                    disabled={props.isDisabled}
                   >Sign Up</S.SignUpButton>
                </S.SignUpBtnWrapper>
            </S.Container>
        </form>
    );
}
