import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PaymentWrapper = styled.div`
  width: 1240px;
  padding-top: 100px;
`;

export const PaymentText = styled.div`
  width: 100%;

  font-weight: 700;
  font-size: 32px;

  margin-bottom: 22px;
`;

export const PaymentMainWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  padding-bottom: 60px;
  border-bottom: 1px solid #c4c4c4;
`;

export const PaymentMainImage = styled.img`
  width: 640px;
  height: 556px;

  border: 1px solid #b1b1b1;
  border-radius: 10px;

  margin-right: 40px;
`;

export const PaymentPriceWrapper = styled.div`
  width: 570px;
  display: flex;
  flex-direction: column;
`;

export const PaymentSmallTitle = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: #b1b1b1;
`;

export const PaymentPriceTitle = styled.div`
  font-weight: 700;
  font-size: 32px;

  margin-bottom: 39px;
`;

export const PaymentPriceTableWrapper = styled.div`
  font-size: 24px;
`;

export const PaymentPriceTableText = styled.div`
  font-size: 18px;
  line-height: 24px;

  margin-bottom: 20px;
  color: #b1b1b1;

`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 49px;
  align-items: center;

  text-align: center;

  border-top: 0.5px solid #b1b1b1;
  border-bottom: 0.5px solid #b1b1b1;

  padding-top: 14px;
  padding-bottom: 14px;
  background: #2c2c2c;
`;

export const Row2 = styled.div`
  display: flex;
  justify-content: space-between;
  height: 61px;
  align-items: center;

  text-align: center;

  border-bottom: 0.5px solid #b1b1b1;

  padding-top: 14px;
  padding-bottom: 14px;
`;

export const ColumnTitle = styled.div`
  width: 140px;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  text-align: center;
`;

export const ColumnOption = styled.div`
  width: 200px;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  padding-left: 50px;
`;

export const ColumnOty = styled.div`
  width: 50px;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
`;

export const ColumnPrice = styled.div`
  width: 200px;
  text-align: right;
  padding-right: 50px;
  font-size: 18px;
  line-height: 24px;
`;

export const PaymentPriceTotalWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-right: 28px;

  align-items: center;
  margin-top: 19px;
`;

export const PaymentPriceTotal = styled.div`
  font-size: 18px;
  line-height: 24px;
  padding-right: 10px;
`;

export const PaymentPriceTotalNumber = styled.div`
  font-size: 28px;
  line-height: 41px;
  text-align: right;
`;

export const PaymentSubWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const PaymentSubLeftWrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;

  border-right: 1px solid #c4c4c4;

  padding: 60px 60px 250px 0;
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
  align-items: center;

  margin-bottom: 20px;
`;

export const Label = styled.div`
  width: 200px;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 30px;
`;

export const InputBox = styled.input`
  width: 379px;
  height: 50px;
  font-size: 18px;
  line-height: 24px;
  background-color: #1b1b1b;
  border-bottom: 1px solid #f1f1f1;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-bottom: 20px;
  color: #f1f1f1;
`;

export const PhoneHyphen = styled.div`
  width: 14px;
  border-bottom: 0.5px solid #c4c4c4;
  margin: 10px;
`;

export const InputBoxTextWrapper = styled.div`
  display: flex;
`;

export const ZipCodeSearchButton = styled.button`
  width: 160px;
  height: 50px;

  background-color: #1b1b1b;
  border: 1px solid #f1f1f1;
  color: #f1f1f1;

  font-size: 20px;

  margin-left: 20px;

  :hover {
    border: 1px solid #b150f2;
    color: #b150f2;
  }

`;

export const PaymentSubRightWrapper = styled.div`
  width: 500px;
  padding: 50px;
`;

export const PaymentSubResultText = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  margin-bottom: 50px;
`;

export const PaymentSubDiv = styled.div`
  width: 400px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  margin-bottom: 40px;
`;

export const OrderPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 23px;
  padding-bottom: 23px;
  border-bottom: 0.5px solid #f1f1f1;
`;

export const PriceInner = styled.div`
  padding-left: 40px;
  padding-right: 40px;
`;

export const PaymentLabel = styled.div`
  font-size: 18px;
`;

export const CouponDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
`;

export const Coupon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 30px;
  background: #b150f2;
  border-radius: 4px;
  text-align: center;

  font-size: 14px;
  line-height: 20px;

  margin-right: 10px;

  cursor: pointer;
`;

export const LabelContent = styled.div`
  font-size: 16px;
  line-height: 24px;
`;
export const LabelDetail = styled.div`
  font-weight: 700;
  font-size: 22px;
`;

export const LabelText = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 47px;
`;

export const Line = styled.div`
  font-size: 20px;
  border-bottom: 1px solid #c4c4c4; ;
`;

export const PaymentSubmitButton = styled.button`
  width: 100%;
  height: 80px;

  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  margin-bottom: 20px;
  border: none;

  background: #b150f2;
`;

export const PaymentCancelButton = styled.button`
  width: 100%;
  height: 80px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
`;

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 730px;
  border-radius: 30px;
  padding-bottom: 150px;
  overflow: hidden;
`;

export const MyCouponWrapper = styled.div`
  height: 180px;
  background: #ffffff;
`;

export const MyCoupon = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: #1b1b1b;

  margin-top: 100px;
  margin-left: 40px;
  margin-bottom: 12px;
`;

export const MyCouponDesc = styled.div`
  font-size: 14px;
  line-height: 20px;

  color: #000000;

  margin-left: 40px;
  margin-bottom: 20px;
`;

export const MyCouponListWrapper = styled.div`
  height: 558px;
  padding-top: 30px;
  padding-left: 30px;

  background-color: #dedede;
`;

export const MyCouponList = styled.div`
  display: flex;
  width: 443px;
  height: 60px;

  background-color: #ffffff;
  border: 1px solid #b1b1b1;
  border-radius: 6px;

  margin-bottom: 10px;

  color: #b1b1b1;

  cursor: pointer;

  &:hover {
    background-color: #b150f2;
    color: #ffffff;
  }
`;

export const MyCouponName = styled.div`
  font-size: 18px;
  line-height: 24px;

  margin-left: 20px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const MyCouponDisCount = styled.div`
  font-size: 14px;
  line-height: 20px;

  margin-left: 200px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const NoCouponList = styled.div`
  margin-left: 200px;
  margin-top: 200px;
`;
