import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DetailWrapper = styled.div`
    width: 1500px;
    padding-top: 120px;
    padding-bottom: 500px;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 20px;
`;

export const TitleText = styled.div`
    font-weight: 700;
    font-size: 32px;
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Menu = styled.div`
    width: 54px;
    height: 54px;

    background-image: url("./images/etc_menu.png");
    background-position: center;
    background-size: cover;

    margin-right: 34px;
`;
export const Delete = styled.div`
    width: 54px;
    height: 54px;

    background-image: url("./images/delete_white.png");
    background-position: center;
    background-size: cover;
`;

export const ContentsWrapper = styled.div`
    width: 100%;

    border-top: 2px solid #b1b1b1;
    border-bottom: 2px solid #b1b1b1;

    padding-top: 20px;
    padding-bottom: 50px;

    display: flex;
    flex-direction: row;
`;
export const Image = styled.div`
    width: 600px;
    height: 600px;

    background-image: url("./images/market_detail.png");
    background-position: center;
    background-size: cover;

    margin-right: 40px;
`;
export const RightWrapper = styled.div`
    /* background-color: blue; */

    display: flex;
    flex-direction: column;
`;

export const ItemInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: 2px solid #b1b1b1;
    padding-bottom: 20px;
`;

export const TempWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const ItemPrice = styled.div`
    width: 380px;
    font-weight: 400;
    font-size: 24px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Span = styled.div`
    font-weight: 700;
    font-size: 32px;
    margin-left: 30px;
`;

export const VerticalLine = styled.div`
    height: 80px;
    border-right: 2px solid #b1b1b1;
`;

export const ItemSeller = styled.div`
    width: 380px;

    font-weight: 400;
    font-size: 24px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ItemTrade = styled.div`
    font-weight: 400;
    font-size: 24px;

    display: flex;
    flex-direction: row;
    align-items: center;

    padding-top: 20px;
    padding-bottom: 20px;

    border-bottom: 2px solid #b1b1b1;

    margin-bottom: 20px;
`;

export const ItemContents = styled.textarea`
    width: 865px;
    height: 100%;

    font-weight: 400;
    font-size: 18px;

    padding: 15px;
    background-color: #676767;

    /* margin-top: 20px; */
`;

export const ChatWrapper = styled.div``;
