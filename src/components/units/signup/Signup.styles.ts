import styled from "@emotion/styled";
import { EyeOutlined } from "@ant-design/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SignUpContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 0.1px solid #b1b1b1;
`;

export const SignUpTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  font-weight: 700;
  font-size: 32px;

  padding-top: 60px;
  padding-bottom: 60px;
  border-bottom: 0.1px solid #b1b1b1;
`;

export const SignUpContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const InfoTitle = styled.div`
  font-weight: 700;
  font-size: 32px;

  padding-top: 60px;
  padding-bottom: 37px;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-bottom: 20px;
`;

export const InfoInput = styled.input`
  width: 340px;
  height: 54px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ffffff;
  background-color: transparent;
  :focus {
    outline: none;
  }
`;

export const EmailCheckButton = styled.button<{ isWriteEmail: boolean }>`
  background-color: transparent;
  width: 150px;
  height: 54px;
  margin-left: 20px;
  border-radius: 6px;
  color: ${(props) => (props.isWriteEmail ? "#b150f2" : " #ffffff")};
  border: 1px solid ${(props) => (props.isWriteEmail ? "#b150f2" : " #ffffff")};

  cursor: pointer;
`;

export const PasswordWatch = styled.div`
  background-color: transparent;
`;

export const EyeIcon = styled(EyeOutlined)<{
  "data-is-write-password": boolean;
}>`
  font-size: 20px;

  cursor: pointer;

  color: ${(props) =>
    props["data-is-write-password"] ? "#b150f2" : " #ffffff"};
`;

export const EyeIcon2 = styled(EyeOutlined)<{
  "data-is-write-password-check": boolean;
}>`
  font-size: 20px;

  cursor: pointer;

  color: ${(props) =>
    props["data-is-write-password-check"] ? "#b150f2" : " #ffffff"};
`;

export const InfoText = styled.div`
  width: 150px;
  font-weight: 700;
  font-size: 20px;

  margin-right: 50px;
`;

export const SignUpError = styled.div`
  color: #b150f2;
  margin-bottom: 20px;
  margin-left: 200px;
`;

export const InfoInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ZoncodeWrapper = styled.div`
  display: flex;
`;

export const ZoncodeInput = styled.input`
  width: 116px;
  height: 54px;
  margin-right: 20px;

  border: none;
  border-bottom: 1px solid #ffffff;
  background-color: transparent;

  :focus {
    outline: none;
  }
`;

export const ZoncodeButton = styled.button`
  background-color: transparent;
  width: 150px;

  border: 1px solid #ffffff;
  border-radius: 6px;

  cursor: pointer;
  :hover {
    border: 1px solid #b150f2;
    color: #b150f2;
  }
`;

export const SignUpBtnWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 60px;
  padding-bottom: 300px;
`;

export const SignUpCancelButton = styled.button`
  width: 350px;
  height: 100px;
  background: #1b1b1b;
  border: 1px solid #f1f1f1;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #f1f1f1;
  margin-right: 40px;
  :hover {
    border: 1px solid #b150f2;
    color: #b150f2;
  }
`;
export const SignUpButton = styled.button`
  width: 350px;
  height: 100px;
  background: #b150f2;
  border: none;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #f1f1f1;
`;

export const PhoneCheckButton = styled.button<{ isWritePhone: boolean }>`
  background-color: transparent;
  width: 150px;
  height: 54px;
  margin-left: 20px;
  border-radius: 6px;
  color: ${(props) => (props.isWritePhone ? "#b150f2" : " #f1f1f1")};
  border: 1px solid ${(props) => (props.isWritePhone ? "#b150f2" : " #f1f1f1")};

  cursor: pointer;
`;

export const Timer = styled.div`
  width: 150px;
  font-size: 20px;

  margin-right: 50px;
`;

export const CheckTokenButton = styled.button<{ isWriteToken: boolean }>`
  background-color: transparent;
  width: 150px;
  height: 54px;
  margin-left: 20px;
  border-radius: 6px;
  color: ${(props) => (props.isWriteToken ? "#b150f2" : " #f1f1f1")};
  border: 1px solid ${(props) => (props.isWriteToken ? "#b150f2" : " #f1f1f1")};

  cursor: pointer;
`;
