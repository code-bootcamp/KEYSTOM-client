import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PaymentWrapper = styled.div`
    width: 1500px;

    padding-top: 100px;
`;

export const PaymentText = styled.div`
    width: 100%;

    font-weight: 700;
    font-size: 32px;

    margin-bottom: 28px;
`;

export const PaymentMainWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;

    padding-bottom: 60px;
    border-bottom: 2px solid #c4c4c4;
`;

export const PaymentMainImage = styled.img`
    width: 900px;
    height: 556px;
    background-image: url("/images/purchasepage.png");
    background-position: center;
    background-size: cover;

    margin-right: 40px;
`;

export const PaymentPriceWrapper = styled.div`
    width: 560px;
    display: flex;
    flex-direction: column;
`;

export const PaymentPriceTitle = styled.div`
    font-weight: 700;
    font-size: 32px;

    margin-bottom: 74px;
`;

export const PaymentPriceTableWrapper = styled.div`
    /* height: 300px; */

    font-weight: 400;
    font-size: 24px;
`;

export const PaymentPriceTableText = styled.div`
    font-weight: 400;
    font-size: 24px;

    margin-bottom: 20px;

    /* border-bottom: 2px solid #c4c4c4; */
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    text-align: center;

    border-top: 2px solid #c4c4c4;
    border-bottom: 2px solid #c4c4c4;

    padding-top: 14px;
    padding-bottom: 14px;
`;

export const Row2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    text-align: center;

    border-bottom: 2px solid #c4c4c4;

    padding-top: 14px;
    padding-bottom: 14px;
`;

export const ColumnTitle = styled.div`
    width: 50%;

    text-align: left;
    padding-left: 30px;

    font-weight: 400;
    font-size: 18px;
`;

export const ColumnNumber = styled.div`
    width: 20%;

    font-weight: 400;
    font-size: 18px;
`;

export const ColumnPrice = styled.div`
    width: 20%;

    font-weight: 400;
    font-size: 18px;
`;

export const PaymentPriceTotalWrapper = styled.div`
    /* width: 100%; */

    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    margin-right: 28px;

    align-items: center;
    margin-top: 19px;
`;

export const PaymentPriceTotal = styled.div`
    font-weight: 400;
    font-size: 24px;
    margin-right: 31px;
`;

export const PaymentPriceTotalNumber = styled.div`
    font-weight: 700;
    font-size: 32px;
`;

export const PaymentSubWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;

    /* padding-top: 60px;
  padding-bottom: 60px; */
    border-bottom: 2px solid #c4c4c4;
`;

export const PaymentSubLeftWrapper = styled.div`
    width: 1000px;

    /* height: 665px; */

    display: flex;
    flex-direction: column;

    border-right: 2px solid #c4c4c4;

    padding-top: 60px;
    padding-bottom: 60px;
`;

export const PaymentSubAddressText = styled.div`
    width: 100%;

    font-weight: 700;
    font-size: 32px;

    margin-bottom: 50px;
`;

export const PaymentSubTextWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;

    align-items: center;

    margin-bottom: 20px;
`;

export const Label = styled.div`
    width: 130px;

    font-weight: 700;
    font-size: 20px;
`;

export const InputBox = styled.input`
    /* width: 379px; */
    height: 60px;

    font-weight: 700;
    font-size: 20px;

    padding-left: 20px;

    background-color: #676767;
    border: none;

    color: #000000;

    /* ::placeholder {
    color: red;
  } */
`;

export const InputBoxTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ZipCodeSearchButton = styled.button`
    width: 201px;
    height: 60px;

    background-color: #c4c4c4;
    border: none;

    font-weight: 700;
    font-size: 20px;

    margin-left: 20px;

    color: #ffffff;

    :hover {
        background-color: #b150f2;
    }

    cursor: pointer;
`;

export const PaymentSubRightWrapper = styled.div`
    width: 500px;

    padding: 60px;
`;

export const PaymentSubResultText = styled.div`
    width: 100%;

    font-weight: 700;
    font-size: 32px;

    margin-bottom: 56px;
`;

export const OrderPriceWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* padding-left: 30px; */
    margin-bottom: 28px;
`;

export const LabelText = styled.div`
    font-weight: 400;
    font-size: 20px;
`;

export const Line = styled.div`
    font-weight: 400;
    font-size: 20px;

    /* margin-top: 30px; */
    border-bottom: 2px solid #c4c4c4; ;
`;

export const PaymentSubmitButton = styled.button`
    width: 378px;
    height: 120px;

    margin-top: 40px;

    font-weight: 700;
    font-size: 32px;

    border: none;

    background-color: #c4c4c4;

    cursor: pointer;

    :hover {
        background-color: #b150f2;
    }
`;
