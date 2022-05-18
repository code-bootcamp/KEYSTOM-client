import styled from "@emotion/styled";
import { EyeOutlined } from "@ant-design/icons";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1920px;
    padding-left: 210px;
    padding-right: 210px;
    padding-bottom: 500px;
`;

export const SignUpTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    padding-top: 100px;
    padding-bottom: 60px;
    border-bottom: 2px solid #c4c4c4;
`;

export const SignUpContentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 2px solid #c4c4c4;
    margin-bottom: 60px;
`;

export const InfoTitle = styled.div`
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    padding-top: 60px;
    padding-bottom: 60px;
`;

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-bottom: 20px;
`;

export const NameInfoInput = styled.input`
    width: 380px;
    height: 60px;
    padding-left: 20px;
`;

export const InfoInput = styled.input`
    width: 400px;
    height: 60px;
    padding-left: 20px;
`;

export const PasswordWatch = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 54px;
    height: 60px;
    background-color: #676767;

    padding-top: 8px;
    /* background-color: red; */
`;

export const EyeIcon = styled(EyeOutlined)<{ isWrite: boolean }>`
    /* width: 54px; */
    /* width: 54px; */
    font-size: 40px;
    padding-top: 3px;
    cursor: pointer;

    color: ${(props) => (props.isWrite ? "#b150f2" : " #ffffff")};
`;

export const EyeIcon2 = styled(EyeOutlined)<{ isWrite2: boolean }>`
    /* width: 54px; */
    /* width: 54px; */
    font-size: 40px;
    padding-top: 3px;
    cursor: pointer;

    color: ${(props) => (props.isWrite2 ? "#b150f2" : " #ffffff")};
`;

export const IDInfoInput = styled.input`
    width: 380px;
    height: 60px;
    padding-left: 20px;
`;

export const InfoText = styled.div`
    width: 150px;
    font-weight: 700;
    font-size: 20px;
`;

export const SignUpError = styled.div`
    color: #b150f2;
    /* padding-top: 15px; */
    margin-bottom: 20px;
    margin-left: 150px;
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
    height: 60px;
    margin-right: 20px;
    padding-left: 20px;
`;

export const SignUpBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const SignUpCancelButton = styled.button`
    width: 560px;
    height: 120px;
    background: #1b1b1b;
    border: 1px solid #b150f2;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: #b150f2;
    margin-right: 40px;
`;
export const SignUpButton = styled.button`
    width: 560px;
    height: 120px;
    background: #b150f2;
    border: none;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: #f1f1f1;
`;
