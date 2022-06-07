import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 120px;
    margin-bottom: 200px;
`;

export const WrapperContainer = styled.div`
    width: 1240px;
`;

export const TopWrapper = styled.div`
    display: flex;
`;

export const TopLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProfileImage = styled.img`
    width: 200px;
    height: 200px;

    border-radius: 30px;

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
    align-items: center;
`;

export const UserTitle = styled.div`
    display: flex;
    align-items: center;

    width: 100px;
    font-weight: 700;
    font-size: 18px;
`;

export const VerticalLine = styled.img`
    height: 23px;
    border-right: 1px solid #666;
    margin-left: 20px;
    margin-right: 20px;
`;

export const UserName = styled.div`
    font-size: 20px;

    margin-left: 20px;
`;

export const IdContainer = styled.div`
    display: flex;
`;

export const NickNameContainer = styled.div`
    display: flex;
`;

export const NickName = styled.div`
    width: 100px;
    font-weight: 700;
    font-size: 20px;
`;

export const UserNickName = styled.div`
    font-size: 20px;

    margin-left: 20px;
`;

export const Id = styled.div`
    width: 100px;
    font-weight: 700;
    font-size: 20px;
`;

export const UserId = styled.div`
    font-size: 20px;

    margin-left: 20px;
`;

export const PointWrapper = styled.div`
    display: flex;
`;

export const Point = styled.div`
    width: 100px;
    font-weight: 700;
    font-size: 20px;
`;

export const UserPoint = styled.div`
    font-size: 20px;
    margin-left: 20px;
`;

export const DeliverWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const DeliveryAddress = styled.div`
    width: 100px;
    font-weight: 700;
    font-size: 20px;
`;

export const UserDeliveryAddress = styled.div`
    font-size: 18px;
    margin-left: 20px;
`;

export const SeeCoupon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
    width: 150px;
    height: 35px;
    border: 1px solid #b150f2;
    border-radius: 4px;

    font-size: 14px;
    line-height: 20px;

    color: #b150f2;

    cursor: pointer;
    :hover {
        font-weight: 700;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    margin-left: 290px;
    margin-top: 76px;
`;

export const PointCharge = styled.button`
    width: 360px;
    height: 80px;
    background: #c4c4c4;

    font-weight: 700;
    font-size: 24px;
    color: #000000;

    margin-right: 30px;
    border: none;
`;

export const PasswordFind = styled.button`
    width: 360px;
    height: 80px;
    background: #c4c4c4;

    font-weight: 700;
    font-size: 24px;
    color: #000000;
    border: none;
`;

export const Line = styled.div`
    width: 100%;
    border: none;
    border-top: 0.5px solid #666;

    margin-top: 60px;
    margin-bottom: 60px;
`;

export const MiddleWrapper = styled.div``;

export const BoughtList = styled.div`
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

    background-color: #2c2c2c;
    margin-bottom: 30px;
    border-radius: 10px;
`;

export const NoBoughtListInfo = styled.div`
    width: 1240px;
    height: 104px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #2c2c2c;
    border-radius: 10px;

    font-size: 20px;
    line-height: 24px;

    color: #ffffff;
`;

export const BoughtImage = styled.img`
    width: 104px;
    height: 104px;
    background-color: #494949;
    border-radius: 10px 0px 0px 10px;
    cursor: pointer;
`;

export const BoughtName = styled.div`
    width: 300px;
    font-size: 18px;

    margin-top: auto;
    margin-left: 30px;

    margin-bottom: auto;

    text-align: center;
    color: #ffffff;
`;

export const BoughtDateWrapper = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;

    margin-top: auto;
    margin-bottom: auto;
    margin-left: 40px;
`;

export const BoughtDateText = styled.div`
    font-size: 14px;
    line-height: 22px;

    color: #b1b1b1;

    margin-bottom: 2px;
`;

export const BoughtDateNum = styled.div`
    font-size: 20px;
    line-height: 36px;

    color: #ffffff; ;
`;

export const BoughtPriceWrapper = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;

    margin-top: auto;
    margin-bottom: auto;
    margin-left: 60px;
`;

export const BoughtPriceText = styled.div`
    font-size: 14px;
    line-height: 22px;

    color: #b1b1b1;

    margin-bottom: 2px;
`;

export const BoughtPriceNum = styled.div`
    font-size: 20px;
    line-height: 36px;

    color: #ffffff; ;
`;

export const BoughtStatusWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: auto;
    margin-bottom: auto;
    margin-left: 40px;
`;

export const BoughtStatusText = styled.div`
    font-size: 14px;
    line-height: 22px;

    color: #b1b1b1;

    margin-bottom: 2px;
`;

export const BoughtStatus = styled.button`
    height: 35px;

    display: flex;
    align-items: center;

    color: #ffffff;
    background-color: transparent;
    padding: 0 10px;
    font-size: 12px;
    border: 1px solid #ffffff;

    :hover {
        border: 1px solid #b150f2;
        color: #b150f2;
    }
`;

export const BoughtReviewWrapper = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;

    margin-top: auto;
    margin-bottom: auto;
    margin-left: 40px;
`;

export const BoughtReviewText = styled.div`
    font-size: 14px;
    line-height: 22px;

    color: #b1b1b1;

    margin-bottom: 2px;
`;

export const BoughtReviewStatus = styled.div`
    height: 36px;

    display: flex;
    align-items: center;

    font-size: 16px;
    line-height: 36px;

    color: #ffffff; ;
`;

export const BoughtReviewIcon = styled.button`
    width: 140px;
    height: 44px;

    background-color: transparent;

    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: 40px;

    font-weight: 700;
    font-size: 14px;

    border: 1px solid #ffffff;
    border-radius: 6px;

    :hover {
        background-color: #b150f2;
        border: none;
    }
`;

export const BottomMapWrapper = styled.div`
    width: 1240px;
    display: flex;
    flex-wrap: wrap;
`;

export const BottomWrapper = styled.div``;

export const BasketList = styled.div`
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;

    color: #ffffff;

    margin-bottom: 20px;
`;

export const BasketProductImageWrapper = styled.div`
    margin-right: 33px;
`;

export const BasketProductImage = styled.img`
    width: 380px;
    height: 350px;
    border-radius: 10px 10px 0 0;
    background-color: #494949;
    cursor: pointer;
`;

export const BasketProductInfoWrapper = styled.div`
    padding: 30px 30px;

    width: 380px;
    height: 170px;

    background-color: #2c2c2c;
    border-radius: 0px 0px 10px 10px;
`;

export const BasketProductInfoWrapper2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
`;

export const BasketProductInfoWrapper3 = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;
export const ProductInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: #f1f1f1;
`;

export const ProductName = styled.div`
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;

    color: #f1f1f1;
`;

export const ProductContents = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: #b1b1b1;

    margin-top: 20px;
    margin-bottom: 37px;
`;

export const ProductPrice = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
`;

export const ProductDelete = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-right: -5px;
`;

export const ProductBuyButton = styled.button`
    width: 140px;
    height: 44px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    border: 1px solid #f1f1f1;
    background-color: #2c2c2c;

    margin-left: auto;
    :hover {
        border: none;
        background-color: #b150f2;
    }
`;

export const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f3f3f3;
    width: 900px;
    border-radius: 30px;
    padding-bottom: 150px;
    overflow: hidden;
`;

export const MyCouponWrapper = styled.div`
    height: 180px;
    background: #ffffff;
`;

export const MyCoupon = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;

    color: #1b1b1b;

    margin-top: 100px;
    margin-left: 40px;
    margin-bottom: 12px;
`;

export const MyCouponDesc = styled.div`
    font-size: 14px;
    line-height: 20px;

    color: #000000;

    margin-left: 40px;
    margin-bottom: 20px;
`;

export const MyCouponListWrapper = styled.div`
    height: 558px;
    margin-top: 30px;
`;

export const MyCouponList = styled.div`
    display: flex;
    width: 443px;
    height: 60px;

    background: #ffffff;
    border: 1px solid #b1b1b1;
    border-radius: 6px;

    margin-left: 30px;
    margin-bottom: 10px;
`;

export const MyCouponName = styled.div`
    font-size: 18px;
    line-height: 24px;

    color: #b1b1b1;

    margin-left: 20px;
    margin-top: auto;
    margin-bottom: auto;
`;

export const MyCouponDisCount = styled.div`
    font-size: 14px;
    line-height: 20px;

    color: #b1b1b1;

    margin-left: 148px;
    margin-top: auto;
    margin-bottom: auto;
`;

export const ModalDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f3f3f3;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;

    padding: 50px;
`;

export const Text = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;

    color: #1b1b1b;
`;

export const Select = styled.select`
    border: none;
    border-bottom: 1px solid #1b1b1b;
    width: 300px;
    height: 40px;
    background-color: #f3f3f3;
`;

export const SelectOption = styled.option`
    color: #1b1b1b;
    padding: 20px;
    border: none;
    border-bottom: 1px solid #1b1b1b;
`;

export const Input = styled.input`
    width: 300px;
    height: 40px;
    background-color: #f3f3f3;
    padding: 20px;
    border: none;
    border-bottom: 2px solid #1b1b1b;
`;

export const CheckButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    width: 150px;
    height: 50px;

    margin-top: 10px;
    background-color: transparent;

    font-weight: 700;
    font-size: 14px;
    color: #1b1b1b;
    border: 1px solid #1b1b1b;

    border-radius: 6px;

    :hover {
        color: #b150f2;
        border: 1px solid #b150f2;
    }
`;
