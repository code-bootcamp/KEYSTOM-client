import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const EventWrapper = styled.div`
    width: 1240px;
`;

export const TextWrapper = styled.div`
    font-weight: 700;
    font-size: 32px;

    margin-bottom: 38px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ChattingWrapper = styled.div`
    width: 100%;
    height: 640px;

    border-radius: 10px;

    display: flex;
    flex-direction: row;
`;

export const Player = styled.div`
    width: 880px;
    height: 640px;

    background-color: gray;

    border: 1px solid #ffffff;
    border-radius: 10px 0px 0px 10px;
`;

export const RightWrapper = styled.div`
    width: 360px;

    border: 1px solid #ffffff;
    border-radius: 0px 10px 10px 0px;
`;

export const ChattingText = styled.div`
    width: 100%;
    height: 80px;
    padding: 28px 0 28px 24px;

    font-weight: 700;
    font-size: 20px;

    border-bottom: 1px solid #ffffff;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Span = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #b1b1b1;
    margin-left: 8px;
`;

export const ChattingMain = styled.div`
    width: 100%;
    height: 510px;
`;

export const ChattingInputWrapper = styled.div`
    width: 100%;
    height: 40px;

    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: space-around;
    padding-left: 10px;
    padding-right: 10px;
`;

export const ChattingInput = styled.input`
    width: 285px;
    height: 30px;
    background-color: transparent;

    border: 1px solid #b150f2;
    border-radius: 4px;

    padding-left: 5px;
`;

export const ChattingButton = styled.div`
    width: 50px;
    text-align: center;

    cursor: pointer;
    :hover {
        color: #b150f2;
    }
`;

export const ProductWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding-top: 30px;
    padding-bottom: 500px;
`;

export const ProductImage = styled.div`
    width: 265px;
    height: 180px;

    background-color: gray;

    background-image: url("/images/event/keyboard.png");
    background-position: center;
    background-size: cover;

    border-radius: 10px;
`;

export const ProductInfoWrapper = styled.div`
    width: 270px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ProductInfoTitle = styled.div`
    font-weight: 700;
    font-size: 20px;

    margin-bottom: 20px;
`;

export const ProductInfoName = styled.div`
    font-weight: 400;
    font-size: 18px;
    color: #b1b1b1;
`;

export const ProductDescription = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #b1b1b1;
`;

export const PriceWrapper = styled.div`
    width: 246px;

    display: flex;
    flex-direction: column;
`;

export const PriceSale = styled.div`
    font-weight: 700;
    font-size: 20px;

    color: #ffffff;
    margin-bottom: 17px;
`;

export const PriceBox = styled.div`
    width: 246px;
    height: 139px;

    background-color: #2c2c2c;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const PriceBefore = styled.div`
    font-weight: 400;
    font-size: 14px;

    color: #b1b1b1;
`;

export const PriceAfter = styled.div`
    font-weight: 700;
    font-size: 20px;

    color: #ffffff;
`;

export const ProductPaymentWrapper = styled.div`
    padding-top: 50px;
`;

export const ProductPaymentTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-left: 20px;
    padding-bottom: 20px;
`;

export const ProductPaymentText = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #b1b1b1;
`;

export const ProductPaymentTime = styled.div`
    font-weight: 700;
    font-size: 24px;
    color: #ffffff;

    margin-left: 10px;
`;

export const ProductPaymentBtn = styled.button`
    width: 361px;
    height: 80px;

    font-weight: 700;
    font-size: 24px;

    background-color: #b150f2;
    border-radius: 10px;

    cursor: pointer;
`;
