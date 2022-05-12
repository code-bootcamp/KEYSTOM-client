import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainWrapper = styled.div`
  width: 1500px;
  padding-top: 70px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 200px;
`;

export const MainImage = styled.div`
  width: 100%;
  height: 1080px;
  /* background-color: Red; */
  background-image: url("/images/keyboard.gif");
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
  margin-bottom: 60px;
`;

export const ReviewBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 50px;
`;

export const ReviewBox = styled.div`
  width: 730px;
  /* height: 540px; */

  background-color: red;
`;

export const ReviewImage = styled.img`
  width: 730px;
  height: 366px;

  /* background-color: blue; */

  background-image: url("/images/keyboard-01.jpg");
  background-position: center;
  background-size: cover;
`;

export const ReviewDownWrapper = styled.div`
  width: 100%;
  padding: 50px 40px;

  background-color: #f3f3f3;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ReviewDownLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ReviewDownRightWrapper = styled.div``;

export const ReviewScore = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const ReviewTitle = styled.div`
  font-weight: 400;
  font-size: 24px;

  margin-bottom: 30px;
`;

export const ReviewContents = styled.div`
  font-weight: 400;
  font-size: 20px;
`;
