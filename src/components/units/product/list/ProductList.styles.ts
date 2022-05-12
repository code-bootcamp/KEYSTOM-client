import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  padding-top: 80px;

  border-bottom: 2px solid #c4c4c4;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 1500px;
  height: 134px;

  padding: 20px;

  font-weight: 400;
  font-size: 20px;

  background-color: #c4c4c4;

  margin-bottom: 83px;
`;

export const SearchTextWrapper = styled.div``;

export const SearchText = styled.div`
  width: 1500px;
  font-weight: 400;
  font-size: 24px;
`;

export const ProductListWrapper = styled.div`
  width: 1500px;
  padding-top: 70px;

  /* display: flex; */
  /* flex-direction: column; */
`;

export const ProductBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* margin-bottom: 40px; */

  flex-wrap: wrap;
`;

export const ProductBox = styled.div`
  width: 730px;
  height: 366px;

  /* background: yellow; */
  display: flex;
  flex-direction: row;

  background-color: #c4c4c4;

  margin-bottom: 40px;
`;

export const ProductImage = styled.img`
  width: 366px;
  height: 366px;

  /* background-image: url("/images/keyboard-01.jpg"); */
  background-position: center;
  background-size: cover;
`;

export const ProductBoxRightWrapper = styled.div`
  width: 364px;
  height: 366px;
  display: flex;
  flex-direction: column;

  padding: 90px 30px 0px 40px;
`;

export const ProductTitle = styled.div`
  font-weight: 700;
  font-size: 24px;

  margin-bottom: 40px;
`;

export const ProductPrice = styled.div`
  font-weight: 700;
  font-size: 32px;

  margin-bottom: 24px;
`;

export const ProductContents = styled.div`
  font-weight: 400;
  font-size: 18px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
