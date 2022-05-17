import SignUpPresenter from "./Signup.presenter";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import axios from "axios";

const CREATE_USER = gql`
    mutation createUser($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
            id
            email
            name
            nickName
            profileImage
            isAdmin
            address
        }
    }
`;

export default function SignUpContainer() {
    const router = useRouter();
    const [createUser] = useMutation(CREATE_USER);

    const moveToHome = () => {
        router.push("/");
    };

    const onClickSignUp = async () => {
        try {
            const result = await createUser({
                variables: {
                    createUserInput: {
                        address: "한국어디인가?",
                        email: "dooin@dooin.com",
                        isAdmin: false,
                        name: "Dooin",
                        nickName: "Dooin",
                        password: "123123123",
                        profileImage: "123123123.jpg",
                    },
                },
            });
            console.log(result);
            alert("성공");
        } catch (error: any) {
            alert("실패");
            console.log(JSON.stringify(error, null, 2));
        }
    };

    return (
        <SignUpPresenter
            moveToHome={moveToHome}
            onClickSignUp={onClickSignUp}
        />
    );
}
