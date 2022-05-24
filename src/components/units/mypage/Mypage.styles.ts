import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 120px;
    margin-bottom: 500px;
`;

export const WrapperContainer = styled.div`
    width: 1240px;
`;

export const TopWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TopLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProfileImage = styled.div`
    width: 200px;
    height: 200px;

    border-radius: 30px;

    background: #d9d9d9;
    background-image: url("images/mypage/profilePic.png");
    border-radius: 10px;
`;

export const TopRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-left: 60px;
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Name = styled.div`
    font-family: "NanumGothicCoding";
    font-style: normal;

    width: 100px;
    font-weight: 700;
    font-size: 20px;
`;

export const VerticalLine = styled.img``;

export const UserName = styled.div`
    font-family: "NanumGothicCoding";
    font-style: normal;

    font-weight: 400;
    font-size: 20px;

    margin-left: 20px;
`;

export const IdContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Id = styled.div`
    font-family: "NanumGothicCoding";
    font-style: normal;
    width: 100px;
    font-weight: 700;
    font-size: 20px;
`;

export const UserId = styled.div`
    font-family: "NanumGothicCoding";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

    margin-left: 20px;
`;

export const PointWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Point = styled.div`
    font-family: "NanumGothicCoding";
    font-style: normal;
    width: 100px;
    font-weight: 700;
    font-size: 20px;
`;

export const UserPoint = styled.div`
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

    margin-left: 20px;
`;

export const DeliverWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const DeliveryAddress = styled.div`
    font-family: "NanumGothicCoding";
    font-style: normal;
    width: 100px;
    font-weight: 700;
    font-size: 20px;
`;

export const UserDeliveryAddress = styled.div`
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

    margin-left: 20px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 290px;
    margin-top: 76px;
`;

export const PointCharge = styled.button`
    width: 360px;
    height: 80px;
    background: #c4c4c4;

    font-family: "NanumGothicCoding";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #000000;

    margin-right: 30px;
    border: none;

    cursor: pointer;
`;

export const PasswordFind = styled.button`
    width: 360px;
    height: 80px;
    background: #c4c4c4;

    font-family: "NanumGothicCoding";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #000000;
    border: none;

    cursor: pointer;
`;

export const Line = styled.div`
    width: 100%;
    border: none;
    border-top: 1px solid #b1b1b1;

    margin-top: 60px;
    margin-bottom: 60px;
`;

export const MiddleWrapper = styled.div``;

export const BoughtList = styled.div`
    font-family: "NanumGothicCoding";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;

    color: #ffffff;

    margin-bottom: 20px;
`;

export const BoughtListInfo = styled.div`
    width: 1240px;
    height: 104px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    background-color: #2c2c2c;
    margin-bottom: 30px;
    border-radius: 10px;
`;

export const BoughtImage = styled.img`
    width: 104px;
    height: 104px;
    background-color: white;
    border-radius: 10px 0px 0px 10px;
`;

export const BoughtName = styled.div`
    font-family: "NanumGothicCoding";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

    margin-top: auto;
    margin-left: 30px;

    margin-bottom: auto;

    color: #ffffff;
`;

export const BoughtDateWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: auto;
    margin-bottom: auto;
`;

export const BoughtDateText = styled.div`
    font-family: "NanumGothicCoding";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    color: #b1b1b1;

    margin-bottom: 2px;
`;

export const BoughtDateNum = styled.div`
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;

    color: #ffffff; ;
`;

export const BoughtPriceWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: auto;
    margin-bottom: auto;
`;

export const BoughtPriceText = styled.div`
    font-family: "NanumGothicCoding";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    color: #b1b1b1;

    margin-bottom: 2px;
`;

export const BoughtPriceNum = styled.div`
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;

    color: #ffffff; ;
`;

export const BoughtStatusWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: auto;
    margin-bottom: auto;
`;

export const BoughtStatusText = styled.div`
    font-family: "NanumGothicCoding";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    color: #b1b1b1;

    margin-bottom: 2px;
`;

export const BoughtStatus = styled.div`
    height: 36px;

    display: flex;
    align-items: center;

    font-family: "NanumGothicCoding";
    font-style: normal;

    font-weight: 400;
    font-size: 24px;
    line-height: 36px;

    color: #ffffff; ;
`;

export const BoughtReviewWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: auto;
    margin-bottom: auto;
`;

export const BoughtReviewText = styled.div`
    font-family: "NanumGothicCoding";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    color: #b1b1b1;

    margin-bottom: 2px;
`;

export const BoughtReviewStatus = styled.div`
    height: 36px;

    display: flex;
    align-items: center;

    font-family: "NanumGothicCoding";
    font-style: normal;

    font-weight: 400;
    font-size: 24px;
    line-height: 36px;

    color: #ffffff; ;
`;

export const BoughtReviewIcon = styled.button`
    width: 140px;
    height: 44px;

    background-color: transparent;

    margin-top: auto;
    margin-bottom: auto;

    font-weight: 700;
    font-size: 14px;

    border: 1px solid #ffffff;
    border-radius: 6px;

    cursor: pointer;

    :hover {
        background-color: #b150f2;
        border: none;
    }
`;

export const BottomMapWrapper = styled.div`
    width: 1500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const BottomWrapper = styled.div`
    width: 730px;
    margin-bottom: 40px;
`;

export const BasketList = styled.div`
    font-family: "NanumGothicCoding";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;

    color: #ffffff;

    margin-bottom: 20px;
`;

export const BasketProductImageWrapper = styled.div``;

export const BasketProductImage = styled.img`
    width: 730px;
    height: 366px;
`;

export const BasketProductInfoWrapper = styled.div`
    width: 730px;
    height: 326px;

    background-color: #f1f1f1;
    border-radius: 0px 0px 30px 30px;
`;

export const BasketProductInfoWrapper2 = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ProductInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProductName = styled.div`
    font-family: "NanumGothicCoding";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;

    color: #000000;

    margin-top: 50px;
    margin-left: 40px;
`;

export const ProductContents = styled.div`
    font-family: "NanumGothicCoding";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #000000;

    margin-top: 30px;
    margin-left: 40px;
`;

export const ProductDelete = styled.img`
    width: 54px;
    height: 54px;

    margin-top: 60px;
    margin-left: auto;
    margin-right: 40px;

    cursor: pointer;
`;

export const ProductBuyButton = styled.button`
    width: 378px;
    height: 80px;
    background-color: #c4c4c4;

    font-family: "NanumGothicCoding";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    background-color: #b150f2;

    margin-top: 82px;
    margin-left: 312px;
`;
