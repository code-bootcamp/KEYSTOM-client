import { Modal } from "antd";
import Head from "next/head";
import { useState } from "react";
import * as S from "./Payment.styles";
import DaumPostcode from 'react-daum-postcode';

// const arr = [
//   { optionCode: 1, optionNumber: 1, optionPrice: 100000 },
//   { optionCode: 2, optionNumber: 1, optionPrice: 10000 },
//   { optionCode: 3, optionNumber: 5, optionPrice: 10000 },
// ];

export default function PaymentPresenter(props:any) {
    const [isOpen, setIsOpen] = useState(false);
    const [zipCode, setZipCode] = useState("")
    const [address, setAddress] = useState("")
    const [addressDetail, setAddressDetail] = useState("")
    const [receiverName, setReceiverName] = useState("")
    const [receiverPhone, setReceiverPhone] = useState("")

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
        console.log(data,"address data")
        setZipCode(data.zonecode)
        setAddress(data.address)
        setIsOpen(false);
      }

      const onChangeAddressDetail = (event:any) => {
        setAddressDetail(event.target.value)
      }

      const onChangeReceiverName = (event:any) => {
        setReceiverName(event.target.value)
      }

      const onChangeReceiverPhone = (event:any) => {
        setReceiverPhone(event.target.value)
      }

    return (
        <S.Wrapper>
            <Head>
                <script
                type="text/javascript"
                src="https://code.jquery.com/jquery-1.12.4.min.js"
                ></script>
                <script
                type="text/javascript"
                src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
                ></script>
            </Head>
            <S.PaymentWrapper>
                <S.PaymentText>Payment</S.PaymentText>
                <S.PaymentMainWrapper>
                    <S.PaymentMainImage>
                    </S.PaymentMainImage>

                    <S.PaymentPriceWrapper>
                        <S.PaymentSmallTitle>Product name</S.PaymentSmallTitle>
                        <S.PaymentPriceTitle>
                            Product Title
                        </S.PaymentPriceTitle>

                        <S.PaymentPriceTableWrapper>
                            <S.PaymentPriceTableText>Options</S.PaymentPriceTableText>
                            <S.Row>
                                <S.ColumnTitle>Option</S.ColumnTitle>
                                <S.ColumnTitle>Qty</S.ColumnTitle>
                                <S.ColumnTitle>Price</S.ColumnTitle>
                            </S.Row>
                            <S.Row2>
                                <S.ColumnOption>Origin</S.ColumnOption>
                                <S.ColumnOty>1</S.ColumnOty>
                                <S.ColumnPrice>
                                    60,000
                                </S.ColumnPrice>
                            </S.Row2>
                            <S.Row2>
                                <S.ColumnOption>Spacebar</S.ColumnOption>
                                <S.ColumnOty>1</S.ColumnOty>
                                <S.ColumnPrice>
                                    10,000
                                </S.ColumnPrice>
                            </S.Row2>
                            <S.Row2>
                                <S.ColumnOption>Esc</S.ColumnOption>
                                <S.ColumnOty>1</S.ColumnOty>
                                <S.ColumnPrice>
                                    20,000
                                </S.ColumnPrice>
                            </S.Row2>

                            <S.Row2>
                                <S.ColumnOption>Keypad</S.ColumnOption>
                                <S.ColumnOty>2</S.ColumnOty>
                                <S.ColumnPrice>
                                    30,000
                                </S.ColumnPrice>
                            </S.Row2>

                            <S.Row2>
                                <S.ColumnOption>Enter</S.ColumnOption>
                                <S.ColumnOty>1</S.ColumnOty>
                                <S.ColumnPrice>
                                    20,000
                                </S.ColumnPrice>
                            </S.Row2>
                        </S.PaymentPriceTableWrapper>

                        <S.PaymentPriceTotalWrapper>
                            <S.PaymentPriceTotal>Total</S.PaymentPriceTotal>
                            <S.PaymentPriceTotalNumber>
                                180,000
                                {/* <span>원</span> */}
                            </S.PaymentPriceTotalNumber>
                        </S.PaymentPriceTotalWrapper>
                    </S.PaymentPriceWrapper>
                </S.PaymentMainWrapper>

                <S.PaymentSubWrapper>
                    <S.PaymentSubLeftWrapper>
                        <S.PaymentSubAddressText>
                            Shipping Information
                        </S.PaymentSubAddressText>
                        <S.PaymentSubTextWrapper>
                            <S.Label>Receiver</S.Label>
                            <S.InputBox
                                type="text"
                                placeholder="홍길동"
                                style={{ width: 379 }}
                                onChange={onChangeReceiverName}
                            ></S.InputBox>
                        </S.PaymentSubTextWrapper>

                        <S.PaymentSubTextWrapper>
                            <S.Label>Receiver Phone</S.Label>
                            <S.InputBox
                                type="text"
                                placeholder="01012345678"
                                onChange={onChangeReceiverPhone}
                            ></S.InputBox>
                        </S.PaymentSubTextWrapper>

                        <S.PaymentSubTextWrapper>
                            <S.Label>Shipping Address</S.Label>
                            <S.InputBox
                                type="text"
                                placeholder="우리집"
                            ></S.InputBox>
                        </S.PaymentSubTextWrapper>

                        <S.PaymentSubTextWrapper>
                            <S.Label>Address</S.Label>

                            <S.InputBox
                                type="text"
                                placeholder="15338"
                                style={{ width: 116 }}
                                value={zipCode}
                            ></S.InputBox>

                            <S.ZipCodeSearchButton
                            onClick={showModal}
                            >
                                Find Address
                            </S.ZipCodeSearchButton>
                        </S.PaymentSubTextWrapper>

                        
                        {isOpen &&
                            <Modal 
                                visible={true}     
                                onOk={handleOk} 
                                onCancel={handleCancel}
                                closable={false}
                                >

                                <DaumPostcode onComplete={handleComplete} />
                            </Modal>
                        }

                        <S.PaymentSubTextWrapper>
                            <S.Label>{""}</S.Label>

                            <S.InputBox
                                type="text"
                                placeholder="서울시 행복구 낙원동 1004로"
                                value={address}
                            ></S.InputBox>
                        </S.PaymentSubTextWrapper>
                        <S.PaymentSubTextWrapper>
                            <S.Label>{""}</S.Label>

                            <S.InputBox
                                type="text"
                                placeholder="B동 1202호"
                                defaultValue={addressDetail}
                                onChange={onChangeAddressDetail}
                            ></S.InputBox>
                        </S.PaymentSubTextWrapper>
                    </S.PaymentSubLeftWrapper>

                    <S.PaymentSubRightWrapper>
                        <S.PaymentSubResultText>
                            Payment Details
                        </S.PaymentSubResultText>
                            <S.PaymentSubDiv>
                                <S.OrderPriceWrapper
                                    style={{
                                        padding:"30px 40px",
                                        borderBottom:"1px solid #fff",
                                        background:"#2C2C2C",
                                        borderRadius:"10px 10px 0 0 "
                                    }}
                                >
                                    <S.LabelDetail>
                                        Total Price
                                    </S.LabelDetail>
                                    <S.LabelText>
                                        180,000
                                    </S.LabelText>
                                </S.OrderPriceWrapper>

                                <S.PriceInner>
                                    <S.OrderPriceWrapper>
                                        <S.PaymentLabel>
                                            Product price
                                        </S.PaymentLabel>
                                        <S.LabelContent>180,000</S.LabelContent>
                                    </S.OrderPriceWrapper>
                                    <S.OrderPriceWrapper>
                                        
                                        <S.PaymentLabel>
                                            Discount
                                        </S.PaymentLabel>
                                        <S.CouponDiv>
                                            <S.Coupon>Available Coupon</S.Coupon>
                                            <S.LabelContent>0</S.LabelContent>
                                        </S.CouponDiv>
                                    </S.OrderPriceWrapper>
                                    <S.OrderPriceWrapper style={{ border:"none" }}>
                                        <S.PaymentLabel>
                                            Shipping Fee
                                        </S.PaymentLabel>
                                        <S.LabelContent>Free</S.LabelContent>
                                    </S.OrderPriceWrapper>
                                </S.PriceInner>
                            </S.PaymentSubDiv>
                                {/* <S.Line></S.Line> */}
                        <S.PaymentSubmitButton onClick={props.requestPayment}>Payment</S.PaymentSubmitButton>
                        <S.PaymentCancelButton>Cancel</S.PaymentCancelButton>
                    
                    </S.PaymentSubRightWrapper>
                </S.PaymentSubWrapper>
            </S.PaymentWrapper>
        </S.Wrapper>
    );
}
