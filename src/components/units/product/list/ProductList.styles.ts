import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const ListBannerWrapper = styled.div`
width: 100%;
height: 360px;
`

export const ListBanner = styled.img`
width: 100%;
height: 100%;
`
export const SearchWrapper = styled.div`
    width: 100%;
    padding: 50px 340px;

    border-bottom: 1px solid #b1b1b1; ;
`;

export const SearchInputIconWrapper = styled.div`
    width: 1240px;
    height: 70px;

    padding: 20px;
    padding-left: 30px;

    font-weight: 400;
    font-size: 20px;

    background-color: transparent;
    border: 2px solid #b1b1b1;
    border-radius: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SearchInputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const SearchIcon = styled(SearchOutlined)`
    color: #b1b1b1;
    font-size: 40px;
    cursor: pointer;

    :hover {
        color: #b150f2;
    }
`;

export const SearchInput = styled.input`
    width: 1240px;
    height: 50px;
    font-weight: 400;
    font-size: 20px;

    border: none;
    background-color: transparent;

    padding-left: 20px;
    margin-left: 20px;
    color: #ffffff;
`;

export const SearchText = styled.div`
    width: 100%;
    font-weight: 400;
    font-size: 32px;
line-height: 38px;

    padding: 50px 340px;

`;

export const ProductListWrapper = styled.div`
    width: 1240px;
    padding-bottom: 460px;
    display: flex;
    flex-direction: row;
`;

export const ProductBox = styled.div`
    width: 610px;
    height: 270px;

    /* background: yellow; */
    display: flex;
    flex-direction: row;

    background-color: #c4c4c4;
    margin-bottom: 30px;
    border-radius: 10px;
`;

export const ProductImage = styled.div<{ src?: string }>`
    width: 292px;
    height: 270px;

    background-color: #ffffff;
    cursor: pointer;

    /* background-image: url("/images/keyboard-01.jpg"); */
    background-position: center;
    background-size: cover;
    border-radius: 10px 0px 0px 10px;
`;

export const ProductBoxRightWrapper = styled.div`
    width: 318px;
    height: 270px;
    display: flex;
    flex-direction: column;
    color: #fff;
    background-color: #2c2c2c;
    border-radius: 0px 10px 10px 0px;

    padding: 50px 30px 30px 40px;
`;

export const ProductTitle = styled.div`
    font-weight: 700;
    font-size: 24px;
line-height: 28px;

    margin-bottom: 40px;
`;

export const ProductPrice = styled.div`
    font-weight: 700;
    font-size: 32px;
line-height: 38px;

    margin-bottom: 24px;
`;

export const ProductContents = styled.div`
    font-weight: 400;
    font-size: 14px;
line-height: 20px;
color: #B1B1B1;

    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;
`;
