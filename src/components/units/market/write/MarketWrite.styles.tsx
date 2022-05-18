import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const WriteWrapper = styled.div`
    width: 1500px;

    display: flex;
    flex-direction: column;

    padding-top: 120px;
    padding-bottom: 500px;
`;

export const WriteText = styled.div`
    font-weight: 700;
    font-size: 32px;

    margin-bottom: 70px;
`;

export const Label = styled.div`
    font-weight: 700;
    font-size: 24px;
`;

export const Span = styled.div`
    font-weight: 400;
    font-size: 24px;
    color: #b150f2;

    margin-left: 30px;
`;

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;

    margin-bottom: 20px;
`;

export const ItemInput = styled.input`
    width: 1000px;
    height: 54px;

    padding-left: 30px;

    font-weight: 400;
    font-size: 24px;

    background-color: gray;
    border: none;
`;

export const CheckIcon = styled.div`
    width: 54px;
    height: 54px;

    background-image: url("/images/check.png");
    background-position: center;
    background-size: cover;

    margin-left: 20px;
`;

export const ItemContentsInput = styled.textarea`
    width: 1500px;
    height: 637px;

    padding-left: 30px;
    padding-top: 30px;

    font-weight: 400;
    font-size: 18px;

    background-color: #676767;
    border: none;

    border-radius: 30px;
`;

export const UploadWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 30px;

    background-color: #2c2c2c;
    border-radius: 30px;

    margin-bottom: 100px;
`;

export const UploadBtn = styled.button`
    width: 160px;
    height: 160px;

    border: 2px solid #ffffff;
    border-radius: 10px;

    background-color: #2c2c2c;

    font-size: 50px;

    margin-right: 30px;
`;

export const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    align-items: center;
`;

export const WriteBtn = styled.button`
    width: 360px;
    height: 120px;

    font-weight: 700;
    font-size: 32px;

    background-color: #676767;

    cursor: pointer;
    :hover {
        background-color: #b150f2;
    }
`;

export const CancelBtn = styled.button`
    width: 360px;
    height: 120px;

    font-weight: 700;
    font-size: 32px;

    background-color: #676767;

    cursor: pointer;
    :hover {
        background-color: #b150f2;
    }

    margin-right: 27px;
`;
