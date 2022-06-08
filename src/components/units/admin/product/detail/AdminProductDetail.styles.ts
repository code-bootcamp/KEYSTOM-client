import styled from "@emotion/styled";


export const ProductWriteWrapper = styled.div`
    width: 100%;
    padding: 100px 340px;
    color: #f1f1f1;
`;
export const Title = styled.div`
    color: #f1f1f1;
    font-size: 26px;
    padding-bottom: 20px;
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
`;

export const ContentDiv = styled.div`
    border-radius: 10px;
    width: 800px;
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    padding-left: 20px;
    margin-left: 20px;
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
    width: 100px;
    margin-right: 10px;
    color: #f1f1f1;
    border-radius: 10px;
    border: 1px solid #b150f2;
    text-align: center;
    font-size: 15px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
`;

export const Tag = styled.span``;

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