import { ChangeEvent } from "react";

export interface IFormValues {
    email: string;
    name: string;
    nickName: string;
    password: string;
    passwordCheck: string;
}

export interface ISignUpPresenterProps {
    handleSubmit: any;
    onClickSignUp: any;
    register: any;
    formState: any;
    handleComplete: any;
    setTimerStart: any;
    tokenInputRef: any;

    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePasswordCheck: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePhone: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeToken: (event: ChangeEvent<HTMLInputElement>) => void;

    moveToHome: () => void;
    onClickCheckToken: () => void;
    onClickSendToken: () => void;
    onClickCheckEmail: () => void;
    togglePassword: () => void;
    togglePasswordCheck: () => void;
    handleOk: () => void;
    handleCancel: () => void;
    showModal: () => void;

    zipCode: string;
    address: string;
    addressDetail: string;
    passwordType: string;
    passwordCheckType: string;

    isWritePassword: boolean;
    isWritePasswordCheck: boolean;
    isWriteEmail: boolean;
    isWritePhone: boolean;
    isWriteToken: boolean;
    isOpen: boolean;
    isDisabled: boolean;
    timerStart: boolean;
}
