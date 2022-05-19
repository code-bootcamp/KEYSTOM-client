import PaymentPresenter from "./Payment.presenter";
import { useMutation } from '@apollo/client';
import { PAYMENT, FETCH_USER } from './Payment.queries';
import { Modal } from "antd";

declare const window: typeof globalThis & {
    IMP: any;
  };


export default function PaymentContainer() {

    const [payment] = useMutation(PAYMENT)


    const requestPayment = () => {
        const IMP = window.IMP;
        IMP.init("imp49910675");
        IMP.request_pay(
            {
              pg: "html5_inicis",
              pay_method: "card",
              name: "가격",
              amount: "100",
              buyer_email:" data?.fetchUserLoggedIn.email",
              buyer_name:" data?.fetchUserLoggedIn.name",
              m_redirect_url: "http://localhost:3000/myPage",
            },
            (rsp: any) => {
                if (rsp.success) {
                  console.log(rsp);
                  payment({
                    variables:{
                        createPaymentInput:{
                            price:100,
                            impUid:rsp.imp_uid,
                            order:{
                                count:1,
                                price:100,
                                recieverNAme:"123",
                                recieverPhone:"0101000",
                                email:"wjwow007@gmail.com",
                                address:"address"
                            }
                        }
                    },
                    refetchQueries:[{
                      query: FETCH_USER
                    }]
                  })
                  Modal.success({content:"결제를 성공하였습니다. 감사합니다!"})
                } else {
                  Modal.error({content: "결제를 실패했습니다! 다시 시도해주세요."})
                }
              })
    }
     return <PaymentPresenter 
     requestPayment={requestPayment}
     />;
}
