import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderWrapper = styled.div`
    width: 1920px;

    display: flex;
    flex-direction: column;

    align-items: center;

    padding-bottom: 20px;
    border-bottom: 2px solid #c4c4c4;
`;
export const BannerImage = styled.div`
    width: 100%;
    height: 480px;

    background-image: url("./images/market_banner.png");
    background-position: center;
    background-size: cover;

    margin-bottom: 50px;
`;

export const WriteBtn = styled.button`
    width: 378px;
    height: 80px;

    background-color: #676767;
    border: none;
    border-radius: 20px;

    font-weight: 700;
    font-size: 24px;

    cursor: pointer;
    :hover {
        background-color: #b150f2;
    }

    margin-bottom: 80px;
`;

export const SearchInputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-bottom: 70px;
`;

export const SearchIcon = styled(SearchOutlined)`
    color: white;
    font-size: 50px;
    cursor: pointer;

    :hover {
        color: #b150f2;
    }
`;

export const SearchInputIconWrapper = styled.div`
    width: 1500px;
    height: 134px;

    padding: 20px;
    padding-left: 50px;

    font-weight: 400;
    font-size: 20px;

    background-color: transparent;
    border: 2px solid #ffffff;
    border-radius: 30px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SearchInput = styled.input`
    width: 1300px;
    height: 100%;
    font-weight: 400;
    font-size: 20px;

    border: none;
    background-color: transparent;

    padding-left: 20px;
    margin-left: 20px;
    color: #ffffff;
`;

export const SearchText = styled.div`
    width: 1500px;
    font-weight: 400;
    font-size: 24px;

    padding-top: 50px;
`;

export const ResultWrapper = styled.div`
    width: 1500px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ResultText = styled.div`
    /* width: 100%; */
    font-weight: 400;
    font-size: 24px;
`;

export const Span = styled.div`
    margin-left: 40px;

    font-weight: 700;
    font-size: 32px;
`;

export const ListWrapper = styled.div`
    width: 1500px;
    padding-top: 70px;
    padding-bottom: 460px;
`;

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    flex-wrap: wrap;
`;

export const ItemBox = styled.div`
    width: 480px;
    margin-bottom: 40px;
`;

export const ItemImage = styled.div<{ src: string }>`
    width: 480px;
    height: 366px;

    /* background-color: blue; */

    background-image: url("/images/keyboard-01.jpg");
    background-position: center;
    background-size: cover;

    border-radius: 30px 30px 0px 0px;
`;

export const ItemDownWrapper = styled.div`
    width: 480px;
    height: 200px;
    padding: 46px 30px;

    background-color: #f3f3f3;

    color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: flex-start; */

    border-radius: 0px 0px 30px 30px;
`;

export const ItemTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 30px;
`;

export const ItemTitle = styled.div`
    width: 55%;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-weight: 400;
    font-size: 24px;
`;

export const ItemPrice = styled.div`
    /* width: 40%; */
    font-weight: 700;
    font-size: 32px;
`;

export const ItemSellerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-weight: 400;
    font-size: 20px;
`;
export const ItemDate = styled.div``;

export const ItemSeller = styled.div`
    /* width: 420px; */
    font-weight: 400;
    font-size: 20px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
