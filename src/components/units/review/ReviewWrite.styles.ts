import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReviewWrapper = styled.div`
  width: 1240px;

  padding-top: 100px;
  padding-bottom: 200px;

  display: flex;
  flex-direction: column;
`;

export const ReviewTextWrapper = styled.div`
  width: 100%;

  font-weight: 700;
  font-size: 32px;

  padding-bottom: 30px;
`;
export const ReviewProductWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 30px;
`;

export const ReviewProductImage = styled.img`
  width: 170px;
  height: 170px;

  border-radius: 20px;
`;
export const ReviewProductTitleOptionWrapper = styled.div`
  width: calc(100% - 170px);

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 30px;
`;

export const ReviewProductTitle = styled.div`
  width: 100%;

  font-weight: 700;
  font-size: 32px;
`;

export const ReviewProductOptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const VerticalLine = styled.div`
  width: 2px;
  height: 18px;
  border-right: 2px solid #c4c4c4;

  margin-left: 16px;
  margin-right: 16px;
`;

export const ReviewProductOption = styled.div`
  font-size: 18px;
`;

export const ReviewTitleContentsWrapper = styled.div`
  width: 100%;
  height: 800px;

  background-color: #2c2c2c;
  margin-bottom: 30px;

  border-radius: 10px;

  border: 1px solid #ffffff;
`;

export const ReviewTitle = styled.div`
  width: 100%;
  font-size: 24px;

  color: #000000;
  padding: 30px 40px;

  border-bottom: 1px solid #ffffff;
`;

export const ReviewTitleInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: #2c2c2c;
  color: #ffffff;
  border: none;
  font-size: 18px;
`;

export const ReviewContents = styled.textarea`
  width: 100%;
  height: 600px;

  font-weight: 400;
  font-size: 18px;

  padding: 30px 40px;
  background-color: #2c2c2c;
  color: #ffffff;
  border: none;
`;

export const ReviewContentsMaxLength = styled.div`
  width: 100%;

  text-align: end;
  padding: 0px 40px 40px 0px;

  font-size: 18px;
  color: #fff;
`;

export const ReviewUploadWrapper = styled.div`
  width: 100%;

  text-align: end;
  display: flex;

  background-color: #2c2c2c;

  padding: 30px 0px 30px 30px;

  margin-bottom: 50px;

  border: 1px solid #ffffff;
  border-radius: 10px;
`;

export const ReviewUploadImage = styled.button`
  width: 160px;
  height: 160px;

  background-color: #c4c4c4;
  margin-right: 30px;

  text-align: center;
  border: none;
  background: #c4c4c4;
  border-radius: 10px;

  color: #000000;
`;

export const ReviewButtonWrapper = styled.div`
  width: 100%;

  font-weight: 700;
  font-size: 32px;

  display: flex;
  flex-direction: row;

  justify-content: flex-end;
`;

export const ReviewSubmitButton = styled.button`
  width: 300px;
  height: 80px;

  background-color: #b150f2;
  border: none;
  border-radius: 10px;
  font-size: 24px;

  :hover {
    font-weight: 700;
  }
`;

export const ReviewCancelButton = styled.button`
  width: 300px;
  height: 80px;

  background-color: #1b1b1b;
  border: 1px solid #f1f1f1;
  color: #f1f1f1;
  border-radius: 10px;
  font-size: 24px;

  margin-right: 27px;

  :hover {
    border: 1px solid #b150f2;
    color: #b150f2;
  }
`;
