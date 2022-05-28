import { useEffect, useRef, useState } from "react";
import * as S from "./Signup.styles";

export default function TimerPage(props: any) {
    const [sec, setSec] = useState(180);
    //     const secTime = useRef(5)
    //     const secRef = useRef();

    //     useEffect(() => {
    // secRef.current = setInterval(() =>{

    // })

    //     }

    useEffect(() => {
        const timer = setInterval(() => {
            if (sec > 0) {
                setSec((prev) => prev - 1);
            }
            if (sec === 0) {
                clearInterval(timer);
                props.setTimerStart(false);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [sec]);

    return (
        <S.Timer>
            {String(Math.floor(sec / 60)).padStart(2, "0")}:
            {String(sec % 60).padStart(2, "0")}
        </S.Timer>
    );
}
