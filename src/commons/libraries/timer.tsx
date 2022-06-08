import { useEffect, useState } from "react";
import * as S from "../../components/units/signup/Signup.styles";

interface ITimerPage {
    setTimerStart: any;
}

export default function TimerPage(props: ITimerPage) {
    const [sec, setSec] = useState(180);

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
