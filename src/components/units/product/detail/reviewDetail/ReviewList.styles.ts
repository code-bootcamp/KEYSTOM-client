import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 250px;
    margin: 0px auto;
    background-color: #2c2c2c;
`;

export const AllReviewsDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 50px 340px;
`;

export const AllText = styled.div`
    padding-right: 40px;
    font-size: 20px;
`;

export const AllNum = styled.div`
    font-weight: 700;
    font-size: 24px;
`;

export const ReviewWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 1240px;
    padding-bottom: 50px;
    color: #2c2c2c;
`;
export const ReviewDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 390px;
    height: 450px;
    background: #1b1b1b;
    margin-right: 15px;
    margin-bottom: 50px;
    border-radius: 10px;

    cursor: pointer;
`;

export const ReviewImage = styled.img`
    width: 100%;
    height: 250px;
    border-radius: 10px 10px 0 0;
`;
export const ReviewBottom = styled.div`
    width: 100%;
    padding: 25px 30px;
`;

export const ReviewTop = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;
`;

export const ReviewTopTop = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ReviewTitle = styled.div`
    font-size: 20px;
    line-height: 24px;
    padding-bottom: 20px;
    color: #fff;
`;

export const BottomDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BottomText = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Reviewer = styled.div`
    display: flex;
    align-items: center;
    color: #b1b1b1;
    font-size: 14px;
`;

export const ReviewDate = styled.div`
    display: flex;
    width: 200px;
`;

export const ReviewSmallTitle = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    padding-right: 10px;
`;

export const ReviewSmallText = styled.div`
    font-size: 12px;
    line-height: 12px;
    padding-right: 10px;
`;

export const ReviewCreatedAt = styled.div`
    font-size: 12px;
    line-height: 12px;
    padding-left: 10px;
`;

export const Contents = styled.div`
    width: 100%;
    height: 50px;
    font-size: 14px;
    line-height: 20px;
    text-overflow: ellipsis;
    color: #b1b1b1;
`;

export const LikeDiv = styled.div`
    display: flex;
`;

export const ReviewLikeImage = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

export const ReviewLikeNum = styled.div`
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    padding-left: 10px;
`;
