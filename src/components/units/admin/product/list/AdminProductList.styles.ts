import styled from "@emotion/styled";


export const ProductListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 100px 150px 300px 150px;
    color: #f1f1f1;
`;
export const Title = styled.div`
    color: #f1f1f1;
    font-size: 28px;
    padding-bottom: 40px;
`;

export const ListItemInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ListItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    padding-top: 20px;
    padding-bottom: 20px;
`;
export const ListItemDivWrapper = styled.div`
    width: 600px;
    cursor: pointer;

`;
export const ListItemDiv = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 10px;
`;

export const ListItemTitle = styled.div`
    font-size: 16px;
    padding-right: 10px;
    color: #999;
`;

export const ListItemContents = styled.div`
    font-size: 14px;
    line-height: 20px;
    text-align: center;
`;

export const ListBottom = styled.div`
    display: flex;
`;
export const ListItemTag = styled.span`
    width: 50px;
    padding-right: 15px;
    color: #f1f1f1;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
`;

export const ListItemImage = styled.img`
    width: 200px;
    margin-right: 30px;
    cursor: pointer;
`;
export const ButtonWrapper = styled.div`
display: flex;
justify-content: flex-end;
width: 250px;
`;

export const DeleteButton = styled.button`
    width: 100px;
    height: 50px;
    margin-bottom: 10px;
`;

