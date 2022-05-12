import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ReviewWrapper = styled.div`
    width: 1500px;

    padding-top: 100px;

    display: flex;
    flex-direction: column;
`;

export const ReviewTextWrapper = styled.div`
    width: 100%;

    font-weight: 700;
    font-size: 32px;

    padding-bottom: 30px;
`;
export const ReviewProductWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;

    padding-bottom: 43px;
`;

export const ReviewProductImage = styled.div`
    width: 170px;
    height: 170px;

    background-color: #c4c4c4;
    background: #d9d9d9;
    border-radius: 20px;
`;
export const ReviewProductTitleOptionWrapper = styled.div`
    width: calc(100% - 170px);

    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: 30px;
`;

export const ReviewProductTitle = styled.div`
    width: 100%;

    font-weight: 700;
    font-size: 32px;
`;

export const ReviewProductOptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const VerticalLine = styled.div`
    width: 2px;
    height: 18px;
    border-right: 2px solid #c4c4c4;

    margin-left: 16px;
    margin-right: 16px;
`;

export const ReviewProductOption = styled.div`
    font-weight: 400;
    font-size: 18px;
`;

export const ReviewTitleContentsWrapper = styled.div`
    width: 100%;
    height: 800px;

    background-color: #f3f3f3;
    margin-bottom: 30px;

    border-radius: 30px;
`;

export const ReviewTitle = styled.div`
    width: 100%;

    font-weight: 400;
    font-size: 24px;

    color: #000000;
    padding: 40px 0px 40px 40px;
    border-bottom: 2px solid #c4c4c4; ;
`;

export const ReviewContents = styled.textarea`
    width: 100%;
    height: 634px;

    font-weight: 400;
    font-size: 20px;

    padding: 30px 30px 30px 40px;
    background-color: #f3f3f3;
    color: #000000;
    border: none;
`;

export const ReviewContentsMaxLength = styled.div`
    width: 100%;

    text-align: end;
    padding: 0px 20px 10px 0px;

    font-weight: 400;
    font-size: 18px;
    color: #000000;
`;

export const ReviewUploadWrapper = styled.div`
    width: 100%;

    text-align: end;
    display: flex;
    flex-direction: row;

    background-color: #f3f3f3;

    padding: 30px 0px 30px 30px;

    margin-bottom: 100px;

    background: #2c2c2c;
    border-radius: 30px;
`;

export const ReviewUploadImage = styled.button`
    width: 160px;
    height: 160px;

    background-color: #c4c4c4;
    margin-right: 30px;

    text-align: center;
    border: none;
    background: #c4c4c4;
    border-radius: 10px;

    color: #000000;
`;

export const ReviewButtonWrapper = styled.div`
    width: 100%;

    font-weight: 700;
    font-size: 32px;

    display: flex;
    flex-direction: row;

    justify-content: flex-end;
`;

export const ReviewSubmitButton = styled.button`
    width: 360px;
    height: 120px;

    background-color: #676767;
    border: none;
    border-radius: 20px;

    margin-right: 27px;

    cursor: pointer;
    :hover {
        background-color: #b150f2;
    }
`;

export const ReviewCancelButton = styled.button`
    width: 360px;
    height: 120px;

    background-color: #676767;
    border: none;
    border-radius: 20px;

    cursor: pointer;
    :hover {
        background-color: #b150f2;
    }
`;
