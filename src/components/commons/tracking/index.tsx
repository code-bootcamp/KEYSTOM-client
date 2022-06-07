import axios from "axios";
import { useState } from "react";

export default function SmartPage() {
    const [, setCode] = useState("");
    const [, setInvoice] = useState("");

    const onChangeCode = (e: any) => {
        setCode(e.target.value);
    };

    const onChangeInvoice = (e: any) => {
        setInvoice(e.target.value);
    };

    const onCilckSubmit = async () => {
        const result = await axios.get(
            `http://info.sweettracker.co.kr/api/v1/trackingInfo?t_key=SuS6FeOnk84sycPTn94CSQ&t_code=05&t_invoice=561536326293`
        );
        console.log(result);
    };

    return (
        <div>
            택배사 입력 :<input onChange={onChangeCode}></input>
            운송장 번호 입력 :<input onChange={onChangeInvoice}></input>
            <button onClick={onCilckSubmit}>택배조회</button>
            <div></div>
        </div>
    );
}
