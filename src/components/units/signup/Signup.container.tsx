import SignUpPresenter from "./Signup.presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useRef, ChangeEvent } from "react";
import {
    CREATE_USER,
    CHECK_EMAIL,
    SEND_TOKEN,
    CHECK_TOKEN,
} from "./Signup.queries";
import { Modal } from "antd";
import { IFormValues } from "./Signup.types";

const schema = yup.object({
    name: yup
        .string()
        .max(8, "이름은 8글자 이내여야 합니다.")
        .required("이름은 필수 입력 사항입니다."),

    email: yup
        .string()
        .email("이메일 형식에 맞지 않습니다.")
        .required("이메일은 필수 입력 사항입니다."),

    nickName: yup
        .string()
        .max(8, "닉네임은 8글자 이내여야 합니다.")
        .required("닉네임은 필수 입력 사항입니다."),

    password: yup
        .string()
        .matches(
            /^[A-Za-z\d$@$!%*#?&]{8,20}$/,
            "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이상, 16자리 이내 문자열이어야 합니다"
        )
        .required("비밀번호는 필수 입력 사항입니다."),
    passwordCheck: yup
        .string()
        .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
        .required("비밀번호는 필수 입력 사항입니다."),
});

export default function SignUpContainer() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [token, setToken] = useState("");

    const [isWritePassword, setIsWritePassword] = useState(false);
    const [isWritePasswordCheck, setIsWritePasswordCheck] = useState(false);
    const [isWriteEmail, setIsWriteEmail] = useState(false);
    const [isWritePhone, setIsWritePhone] = useState(false);
    const [isWriteToken, setIsWriteToken] = useState(false);
    const [timerStart, setTimerStart] = useState(false);
    const [, setTokenStatus] = useState(false);

    const [passwordType, setPasswordType] = useState("password");
    const [passwordCheckType, setPasswordCheckType] = useState("password");
    const router = useRouter();
    const [createUser] = useMutation(CREATE_USER);
    const [checkEmail] = useMutation(CHECK_EMAIL);
    const [sendToken] = useMutation(SEND_TOKEN);
    const [checkToken] = useMutation(CHECK_TOKEN);

    const [isOpen, setIsOpen] = useState(false);
    const [zipCode, setZipCode] = useState("");
    const [address, setAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    const tokenInputRef = useRef<HTMLInputElement>();

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value) {
            setIsWriteEmail(true);
        } else {
            setIsWriteEmail(false);
        }
        setEmail(event.target.value);
    };

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value) {
            setIsWritePassword(true);
        } else {
            setIsWritePassword(false);
        }
    };
    const onChangePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value) {
            setIsWritePasswordCheck(true);
        } else {
            setIsWritePasswordCheck(false);
        }
    };

    const onChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
        if (event.target.value) {
            setIsWritePhone(true);
        } else {
            setIsWritePhone(false);
        }
    };

    const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
        setAddressDetail(event.target.value);
    };

    const onChangeToken = (event: ChangeEvent<HTMLInputElement>) => {
        setToken(String(event.target.value));
        if (event.target.value) {
            setIsWriteToken(true);
        } else {
            setIsWriteToken(false);
        }
    };

    const onClickSignUp = async (data: IFormValues) => {
        try {
            await createUser({
                variables: {
                    createUserInput: {
                        email: data?.email,
                        password: data?.password,
                        name: data?.name,
                        nickName: data?.nickName,
                        address: {
                            address,
                            addressDetail,
                            zipCode,
                        },
                    },
                },
            });

            Modal.success({ content: "회원가입에 성공하였습니다." });
            router.push("/");
        } catch (error) {
            if (error instanceof Error)
                Modal.error({ content: "회원가입에 실패하였습니다." });
        }
    };

    const onClickCheckEmail = async () => {
        try {
            await checkEmail({ variables: { email } });

            Modal.success({ content: "사용가능한 이메일입니다." });
        } catch (error) {
            if (error instanceof Error)
                Modal.error({ content: "사용할 수 없는 이메일입니다." });
        }
    };

    const onClickSendToken = async () => {
        try {
            await sendToken({ variables: { phone } });
            Modal.success({ content: "인증번호를 전송하였습니다." });
            if (tokenInputRef.current) tokenInputRef.current.disabled = false;
            if (tokenInputRef.current) tokenInputRef.current.focus();
            setTimerStart(true);
        } catch (error) {
            if (error instanceof Error)
                Modal.error({ content: "인증번호 전송에 실패하였습니다." });
        }
    };

    const onClickCheckToken = async () => {
        try {
            await checkToken({ variables: { token } });
            Modal.success({ content: "인증을 성공하였습니다." });
            if (tokenInputRef.current) tokenInputRef.current.disabled = true;
            setTokenStatus(true);
            setIsDisabled(false);
            clearInterval();
        } catch (error) {
            if (error instanceof Error)
                Modal.error({ content: "인증에 실패하였습니다." });
        }
    };

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    };

    const togglePasswordCheck = () => {
        if (passwordCheckType === "password") {
            setPasswordCheckType("text");
            return;
        }
        setPasswordCheckType("password");
    };

    const showModal = () => {
        setIsOpen(true);
    };

    const handleOk = () => {
        setIsOpen(false);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    const handleComplete = (data: any) => {
        setZipCode(data.zonecode);
        setAddress(data.address);
        setIsOpen(false);
    };

    const moveToHome = () => {
        router.push("/");
    };

    return (
        <SignUpPresenter
            onClickSignUp={onClickSignUp}
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            moveToHome={moveToHome}
            onChangePassword={onChangePassword}
            onChangePasswordCheck={onChangePasswordCheck}
            isWritePassword={isWritePassword}
            isWritePasswordCheck={isWritePasswordCheck}
            isWriteEmail={isWriteEmail}
            isWritePhone={isWritePhone}
            isWriteToken={isWriteToken}
            passwordType={passwordType}
            passwordCheckType={passwordCheckType}
            togglePassword={togglePassword}
            togglePasswordCheck={togglePasswordCheck}
            onChangeEmail={onChangeEmail}
            onClickCheckEmail={onClickCheckEmail}
            onChangePhone={onChangePhone}
            onClickSendToken={onClickSendToken}
            onChangeAddressDetail={onChangeAddressDetail}
            handleOk={handleOk}
            handleCancel={handleCancel}
            handleComplete={handleComplete}
            showModal={showModal}
            isOpen={isOpen}
            zipCode={zipCode}
            address={address}
            addressDetail={addressDetail}
            onChangeToken={onChangeToken}
            onClickCheckToken={onClickCheckToken}
            isDisabled={isDisabled}
            tokenInputRef={tokenInputRef}
            timerStart={timerStart}
            setTimerStart={setTimerStart}
        />
    );
}
