import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SmartPage() {
    const router = useRouter();
    const [code, setCode] = useState("");
    const [invoice, setInvoice] = useState("");

    // useEffect(() => {
    //     const aaa = async () => {

    //     aaa();
    // }, []);

    const onChangeCode = (e:any) => {
        setCode(e.target.value);
    };

    const onChangeInvoice = (e:any) => {
        setInvoice(e.target.value);
    };

    const onCilckSubmit = async () => {
        // const url = `http://info.sweettracker.co.kr/tracking/5?t_key=SuS6FeOnk84sycPTn94CSQ&t_code=05&t_invoice=561536326293`;
        const result = await axios.get(
            `http://info.sweettracker.co.kr/api/v1/trackingInfo?t_key=SuS6FeOnk84sycPTn94CSQ&t_code=05&t_invoice=561536326293`
            // `http://info.sweettracker.co.kr/tracking/5?t_key=SuS6FeOnk84sycPTn94CSQ&t_code=${code}&t_invoice=${invoice}`
            // `http://info.sweettracker.co.kr/tracking/5?t_key=SuS6FeOnk84sycPTn94CSQ&t_code=05&t_invoice=561536326293`
        );
        console.log(result);
        // router.push(url);
    };

    return (
        <div>
            택배사 입력 :<input onChange={onChangeCode}></input>
            운송장 번호 입력 :<input onChange={onChangeInvoice}></input>
            <button onClick={onCilckSubmit}>택배조회</button>
            <div></div>
        </div>

        // {/* <div>

        //         <form action="http://info.sweettracker.co.kr/tracking/5" method="post">

        // <div class="form-group">
        //     <label for="t_key">API key</label>
        //     <input type="text" class="form-control" id="t_key" name="t_key" placeholder="제공받은 APIKEY">
        // </div>

        // <div class="form-group">
        //     <label for="t_code">택배사 코드</label>
        //     <input type="text" class="form-control" name="t_code" id="t_code" placeholder="택배사 코드">
        // </div>

        // <div class="form-group">
        //     <label for="t_invoice">운송장 번호</label>
        //     <input type="text" class="form-control" name="t_invoice" id="t_invoice" placeholder="운송장 번호">
        // </div>

        // <button type="submit" class="btn btn-default">조회하기</button>
        // </form>

        // </div> */}
    );
}
