import styled from "@emotion/styled";

export const ProductWriteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 100px 200px;
    color: #f1f1f1;
`;
export const Title = styled.div`
    color: #f1f1f1;
    font-size: 26px;
    padding-bottom: 40px;
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const Inputs = styled.input`
    border-radius: 10px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    padding-left: 20px;
    background-color: #1b1b1b;
    ::placeholder {
        color: #666;
    }
`;
export const SmallTitle = styled.div`
    color: #f1f1f1;
    font-size: 20px;
    padding-bottom: 20px;
`;
export const TagDivWrapper = styled.div`
    width: 100%;
    padding-left: 20px;
    margin-bottom: 30px;
    display: flex;
`;

export const TagWrapper = styled.div`
    /* width: 100px; */
    margin-right: 10px;
    color: #f1f1f1;
    border-radius: 10px;
    border: 1px solid #b150f2;
    text-align: center;
    font-size: 15px;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
`;

export const TagInputWrapper = styled.div`
    padding-bottom: 20px;
`;

export const Tag = styled.span`
    letter-spacing: 2px;
`;

export const SmallInput = styled.input`
    width: 200px;
    height: 50px;
    border-radius: 10px;
    line-height: 30px;
    padding: 10px;
    margin-bottom: 20px;
    background-color: #1b1b1b;
    color: #f1f1f1;
`;


export const SubmitButton = styled.button`
    width: 250px;
    height: 80px;
    padding: 10px;
    margin: 80px 20px;
    text-align: center;
    font-size: 20px;
    :hover {
        border: 1px solid #b150f2;
        color: #b150f2;
    }
`;
