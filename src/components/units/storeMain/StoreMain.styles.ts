import styled from "@emotion/styled";
// import { useMediaQuery } from "react-responsive";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainWrapper = styled.div`
    width: 1500px;
    padding-top: 70px;
    padding-bottom: 300px;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    padding-bottom: 171px;
`;

export const MainImage = styled.div`
    width: 100%;
    height: 1080px;
    /* background-color: Red; */
    background-image: url("/images/keyshow.gif");
    background-position: center;
    background-size: cover;
`;

export const ReviewWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`;

export const Text = styled.div`
    width: 100%;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 35px;
`;

export const BestProductWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 191px;
`;

export const BestProductBox = styled.div`
    width: 480px;
    border-radius: 30px 30px 0px 0px;
`;

export const ReviewImage = styled.img<{ src: string }>`
    width: 480px;
    height: 366px;

    /* background-color: blue; */

    /* background-image: url(); */
    background-position: center;
    background-size: cover;

    border-radius: 10px 10px 0px 0px;
`;

export const ReviewDownWrapper = styled.div`
    width: 480px;
    height: 200px;
    padding: 30px 30px;

    background-color: #2c2c2c;

    color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: flex-start; */

    border-radius: 0px 0px 10px 10px;
`;

export const ReviewEmoji = styled.div`
    width: 24px;
    height: 24px;

    background-image: url("/images/review_like_white.png");
    background-position: center;
    background-size: cover;

    margin-right: 10px;
`;

export const ReviewScore = styled.div`
    /* width: 54px; */

    color: #ffffff;
    font-weight: 400;
    font-size: 18px;
`;

export const ProductsPrice = styled.div`
    /* width: 54px; */

    color: #ffffff;
    font-weight: 700;
    font-size: 32px;
`;

export const ReviewTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* margin-bottom: 30px; */
    color: white;
`;

export const ReviewTitle = styled.div`
    font-weight: 700;
    font-size: 24px;
`;

export const ReviewLikeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    cursor: pointer;
`;

export const ReviewContents = styled.div`
    /* width: 420px; */
    font-weight: 400;
    font-size: 18px;

    color: #b1b1b1;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
