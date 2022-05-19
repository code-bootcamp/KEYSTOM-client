import SignUpPresenter from "./Signup.presenter";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const CREATE_USER = gql`
    mutation createUser($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
            nickName
            email
            name
            profileImage
            isAdmin
            address
        }
    }
`;

const schema = yup.object({
    email: yup
        .string()
        .email("형식에 맞지 않습니다.")
        .required("이메일을 필수 입력값 입니다."),
    name: yup
        .string()
        // .matches(/^[a-zA-Z0-9]/, "형식에 맞지 않습니다.")
        .required("이름은 필수 입력값 입니다."),
    password: yup
        .string()
        .matches(/^[A-Za-z\d$@$!%*#?&]{8,20}$/, "형식에 맞지 않습니다.")
        .required("비밀번호는 필수 입력값 입니다."),
    passwordCheck: yup
        .string()
        .oneOf([yup.ref("password"), null], "형식에 맞지 않습니다.")
        .required("비밀번호는 필수 입력값 입니다."),
});

interface IFormValues {
    email: string;
    name: string;
    password: string;
    passwordCheck: string;
}

export default function SignUpContainer() {
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [isWrite, setIsWrite] = useState(false);
    const [isWrite2, setIsWrite2] = useState(false);
    const router = useRouter();
    const [createUser] = useMutation(CREATE_USER);

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const moveToHome = () => {
        router.push("/");
    };

    const onClickSignUp = async (data: IFormValues) => {
        try {
            const result = await createUser({
                variables: {
                    createUserInput: {
                        email: data?.email,
                        password: data?.password,
                        name: data?.name,
                        address: "주소 하드 코딩",
                    },
                },
            });
            console.log(result);
            alert("성공");
            router.push("/");
        } catch (error: any) {
            alert("실패");
            console.log(JSON.stringify(error, null, 2));
        }
    };

    const onChangePassword = (e: any) => {
        console.log(e.target.value);
        console.log(password);

        if (e.target.value) {
            setIsWrite(true);
        } else {
            setIsWrite(false);
        }
    };
    const onChangePasswordCheck = (e: any) => {
        console.log(e.target.value);
        console.log(passwordCheck);
        if (e.target.value) {
            setIsWrite2(true);
        } else {
            setIsWrite2(false);
        }
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
            isWrite={isWrite}
            isWrite2={isWrite2}
        />
    );
}
