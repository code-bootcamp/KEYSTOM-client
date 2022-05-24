import styled from "@emotion/styled";
import { HexColorPicker, HexColorInput } from "react-colorful";

export const Wrapper = styled.div`
  width: 1920px;
  display: flex;

  margin-left: auto;
  margin-right: auto;
  margin-top: 90px;
  margin-bottom: 150px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: auto;
  margin-right: auto;
  margin-left: 210px;
`;

export const ProductLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AllForDesigner = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 47px;

  color: #ffffff;

  margin-bottom: 23px;
`;

export const ProductSelectWrapper = styled.div`
  width: 1180px;
  height: 800px;
  display: flex;

  background: #c4c4c4;

  border-radius: 10px;
`;

export const TwoDColorWrapper = styled.div`
  height: 462px;
  display: flex;
  flex-direction: column;

  margin-top: auto;
`;

export const TwoDImage = styled.img`
  width: 231px;
  height: 177px;
  background-color: white;
`;

export const PickerWrapper = styled.div`
  width: 230px;
  background-color: #ffffff;
  border-radius: 0px 0px 0px 10px;
`;

export const HexColorPickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const HexColorPick = styled(HexColorPicker)`
  width: "200px";
  height: "200px";
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
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  margin-right: 10px;
  margin-top: auto;
  margin-bottom: auto;

  color: black;
`;

export const HexColorPickInput = styled(HexColorInput)`
  width: 128px;
  background-color: white;
  border-bottom: 1px solid #1b1b1b;

  color: #b150f2;
`;

export const ThreeDWrapper = styled.div`
  width: auto;
`;

export const PriceWrapper = styled.div`
  margin-top: 66px;
  margin-left: 20px;
`;

export const ApllyedOptions = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
`;

export const OptionTableWrapper = styled.div`
  width: 300px;
  height: 444px;
  border: 1px solid #ffffff;
  border-radius: 10px;

  margin-top: 24px;
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
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;

  margin-left: 20px;
`;

export const OptionCount = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;

  margin-left: 68px;
`;

export const OptionPrice = styled.div`
  font-family: "Noto Sans CJK KR";
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
  padding-top: 23px;
  padding-bottom: 23px;

  border-bottom: 1px solid #ffffff;
`;

export const Option1Name = styled.div`
  width: 70px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: #ffffff;

  margin-left: 20px;
`;

export const Option1Count = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  /* color: #ffffff; */
  color: red;
`;

export const Option1Price = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;
`;

export const Option2Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 23px;
  padding-bottom: 23px;

  border-bottom: 1px solid #ffffff;
`;

export const Option2Name = styled.div`
  width: 70px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: #ffffff;

  margin-left: 20px;
`;

export const Option2Count = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;
`;

export const Option2Price = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;
`;

export const Option3Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 23px;
  padding-bottom: 23px;

  border-bottom: 1px solid #ffffff;
`;

export const Option3Name = styled.div`
  width: 70px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: #ffffff;

  margin-left: 20px;
`;

export const Option3Count = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;
`;

export const Option3Price = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;
`;

export const Option4Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 23px;
  padding-bottom: 23px;

  border-bottom: 1px solid #ffffff;
`;

export const Option4Name = styled.div`
  width: 70px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: #ffffff;

  margin-left: 20px;
`;

export const Option4Count = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;
`;

export const Option4Price = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;
`;

export const TotalAccount = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  color: #ffffff;
`;
