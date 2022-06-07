import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListBannerWrapper = styled.div`
  width: 100%;
  height: 210px;
  position: relative;
  top: -80px;
`;

export const ListBanner = styled.img`
  width: 100%;
  height: 290px;
  position: absolute;
`;

export const ListBannerText = styled.div`
  font-size: 18px;
  line-height: 24px;
  position: relative;
  top: 65%;
  left: 45%;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  padding: 40px 340px 0 340px;

  border-bottom: 1px solid #333;
`;

export const SearchInputIconWrapper = styled.div`
  width: 1240px;
  height: 70px;
  padding-left: 30px;

  font-size: 20px;

  background-color: transparent;
  border: 1px solid #b1b1b1;
  border-radius: 10px;

  display: flex;
  align-items: center;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

export const SearchIcon = styled.img`
  width: 24px;

  :hover {
    color: #b150f2;
  }
`;

export const SearchInput = styled.input`
  width: 1240px;
  height: 50px;
  font-size: 20px;

  border: none;
  background-color: transparent;

  padding-left: 20px;
  margin-left: 20px;
  color: #ffffff;

  :focus {
    outline: none;
  }
`;

export const SearchTextWrapper = styled.div`
  width: 400px;
  display: flex;
  align-items: flex-start;
`;

export const SearchText = styled.div`
  font-size: 20px;
  line-height: 28px;

  padding-right: 27px;
  padding-bottom: 27px;
  color: #b1b1b1;
  :hover {
    color: #f1f1f1;
  }
`;

export const ProductListWrapper = styled.div`
  width: 1240px;
  padding-top: 40px;
  padding-bottom: 300px;
  display: flex;
`;

export const ProductBox = styled.div`
  width: 610px;
  height: 270px;

  display: flex;

  background-color: #c4c4c4;
  margin-bottom: 30px;
  border-radius: 10px;
`;

export const ProductImageDiv = styled.div`
  width: 292px;
  height: 270px;
  border-radius: 10px 0px 0px 10px;
`;

export const ProductImage = styled.img<{ src?: string }>`
  width: 292px;
  height: 270px;

  background-color: gray;
  cursor: pointer;

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
  font-size: 22px;
  line-height: 28px;
  color: #f1f1f1;

  margin-bottom: 40px;
`;

export const ProductPrice = styled.div`
  font-size: 28px;
  line-height: 38px;
  margin-bottom: 24px;
`;

export const ProductContents = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #b1b1b1;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TextToken = styled.span<{ isMatched?: boolean }>`
  color: ${(props) => (props.isMatched ? "#b150f2" : "#fff")};
`;
