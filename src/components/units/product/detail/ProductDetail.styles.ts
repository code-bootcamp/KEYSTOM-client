import styled from "@emotion/styled";
import { HexColorPicker, HexColorInput } from "react-colorful";

export const Wrapper = styled.div`
  width: 1920px;
  display: flex;

  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 150px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: auto;
  margin-right: auto;
  margin-left: 210px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 47px;

  color: #ffffff;

  margin-bottom: 23px;
`;

export const SeeIcon = styled.img`
  width: 38px;
  height: 38px;

  margin-top: 5px;
`;

export const ProductSelectWrapper = styled.div`
  width: 1180px;
  height: 800px;
  display: flex;

  background: none;
  border: 1px solid #f1f1f1;

  border-radius: 10px;
`;

export const TwoDColorWrapper = styled.div`
  height: 320px;
  display: flex;
  flex-direction: column;

  margin-top: auto;
`;

export const TwoDImage = styled.img`
  width: 231px;
  height: 177px;
  background-color: #c4c4c4;
  margin-left: 30px;
`;

export const PickerWrapper = styled.div`
  width: 250px;
  background-color: none;
  padding-left: 20px;
  border-radius: 0px 0px 0px 10px;
`;

export const HexColorPickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const HexColorPick = styled(HexColorPicker)`
  width: 200px;
  height: 200px;
  margin: 0px auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const HexColorCodeWrapper = styled.div`
  display: flex;
  margin-left: 10px;
  margin-bottom: 20px;
`;

export const HexColorCode = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  margin-right: 10px;
  margin-top: auto;
  margin-bottom: auto;

  color: #f1f1f1;
`;

export const HexColorPickInput = styled(HexColorInput)`
  width: 128px;
  background-color: #1b1b1b;
  border: none;
  border-bottom: 1px solid #f1f1f1;
  text-align: center;
`;

export const ThreeDWrapper = styled.div`
  width: auto;
`;

export const PriceWrapper = styled.div`
  margin-top: 66px;
  margin-left: 20px;
`;

export const Options = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  padding-top: 10px;

  color: #ffffff;
`;

export const OptionTableWrapper = styled.div`
  width: 300px;
  height: 524px;
  border: 1px solid #ffffff;
  border-radius: 10px;

  margin-top: 24px;
`;

export const OptionLine = styled.div`
  padding: 0px 20px;
`;

export const OptionHeader = styled.div`
  width: 298px;
  height: 80px;
  display: flex;
  flex-direction: row;
  background: #2c2c2c;

  padding-top: 30px;

  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid #ffffff;
`;

export const OptionName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;

  margin-left: 20px;
`;

export const OptionCount = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;

  margin-left: 68px;
`;

export const OptionPrice = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;

  margin-left: 81px;
`;

export const Option1Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 23px;
  padding-bottom: 23px;

  border-bottom: 1px solid #ffffff;
`;

export const TotalPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;



export const Option1Name = styled.div`
  width: 70px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: #ffffff;

  /* margin-left: 20px; */
`;

export const Option1Count = styled.div`
  width: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;
`;

export const Option1Price = styled.div`
  width: 70px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;

  color: #ffffff;
`;

export const TotalAccount = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: right;
  color: #ffffff;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const GetCouponButton = styled.button`
  background-color: #f1f1f1;
  color: #B150F2;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 60px;
  font-size: 20px;
  padding-left: 80px;
`;

export const GetCouponImg = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 40px;
`

export const PayNowButton = styled.button`
  height: 60px;
  background: #B150F2;
  border: none;
  border-radius: 10px;
  color: #f1f1f1;
  font-size: 20px;
  margin-bottom: 10px;

`;

export const AddToCartButton = styled.button`
  height: 60px;
  font-size: 20px;
  border: 1px solid #ffffff;
  border-radius: 10px;
`;
