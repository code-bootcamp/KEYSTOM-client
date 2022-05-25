import SignUpPresenter from "./Signup.presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { CREATE_USER, CHECK_EMAIL } from './Signup.queries';
import { Modal } from "antd";

const schema = yup.object({
    name: yup
        .string()
        // .matches(/^[a-zA-Z0-9]/, "형식에 맞지 않습니다.")
        .required("이름은 필수 입력 사항입니다."),

    email: yup
        .string()
        .email("이메일 형식에 맞지 않습니다.")
        .required("이메일을 필수 입력 사항입니다."),

    nickName: yup
        .string()
        .max(8, "닉네임은 8글자 이내여야 합니다.")
        .required("닉네임은 필수 입력 사항입니다."),

    password: yup
        .string()
        .matches(/^[A-Za-z\d$@$!%*#?&]{8,20}$/, "비밀번호는 영문, 숫자, 특수문자를 포함한 16자리 이내 문자열이어야 합니다")
        .required("비밀번호는 필수 입력 사항입니다."),
    passwordCheck: yup
        .string()
        .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
        .required("비밀번호는 필수 입력 사항입니다."),

    phone: yup
        .string()
        .matches(/^\d{3}\d{3,4}\d{4}$/, "'-'를 제외한 숫자만 입력해주세요.")
        .required("전화번호는 필수 입력 사항입니다."),
});

interface IFormValues {
    email: string;
    name: string;
    nickName: string
    password: string;
    passwordCheck: string;
}

export default function SignUpContainer() {
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [email, setEmail] = useState("");
    const [isWrite, setIsWrite] = useState(false);
    const [isWrite2, setIsWrite2] = useState(false);
    const [passwordType, setPasswordType] = useState("password")
    const [passwordCheckType, setPasswordCheckType] = useState("password")
    const router = useRouter();
    const [createUser] = useMutation(CREATE_USER);
    const [checkEmail] = useMutation(CHECK_EMAIL);

    const [isOpen, setIsOpen] = useState(false);
    const [zipCode, setZipCode] = useState("")
    const [address, setAddress] = useState("")
    const [addressDetail, setAddressDetail] = useState("")

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onChangeEmail = (event:any) => {
        setEmail(event.target.value)
    } 

    const onClickSignUp = async (data: IFormValues) => {
        try {
            const result = await createUser({
                variables: {
                    createUserInput: {
                        email: data?.email,
                        password: data?.password,
                        name: data?.name,
                        nickName: data?.nickName,
                        address: {
                            address,
                            addressDetail,
                            zipCode
                        }
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
    }


    const CheckEmail = async() => {
        try{
           const result = await checkEmail({variables:{email}})
            
           console.log(result,"result check email")
            Modal.success({content:"사용가능한 이메일입니다."})
        }catch(e){
            Modal.error({content:"이미 사용중인 이메일입니다!"})
        }
    }



    const togglePassword = () => {
        if(passwordType === "password"){
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const togglePasswordCheck = () => {
        if(passwordCheckType === "password"){
            setPasswordCheckType("text")
            return;
        }
        setPasswordCheckType("password")
    }

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


    const onChangeAddressDetail = (event: any) => {
        setAddressDetail(event.target.value)
      }

    // 주소 모달
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
        setZipCode(data.zipCode)
        setAddress(data.address)
        setIsOpen(false);
      }
      
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
            isWrite={isWrite}
            isWrite2={isWrite2}
            passwordType={passwordType}
            passwordCheckType={passwordCheckType}
            togglePassword={togglePassword}
            togglePasswordCheck={togglePasswordCheck}

            onChangeEmail={onChangeEmail}
            CheckEmail={CheckEmail}

            onChangeAddressDetail={onChangeAddressDetail}
            handleOk={handleOk}
            handleCancel={handleCancel}
            handleComplete={handleComplete}
            showModal={showModal}

            isOpen={isOpen}
            zipCode={zipCode}
            address={address}
            addressDetail={addressDetail}
        />
    );
}
