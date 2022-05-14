import SignUpPresenter from "./Signup.presenter";
import { useRouter } from 'next/router';

export default function SignUpContainer(){
const router = useRouter()

const moveToHome = () => {
    router.push("/")
}


    return <SignUpPresenter
    moveToHome={moveToHome}
    />
}