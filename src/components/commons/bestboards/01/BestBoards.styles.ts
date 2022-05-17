import styled from "@emotion/styled";

export const BestBoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  text-align: center;
`;
export const BestBoard = styled.div`
  width: 282px;
  font-size: 15px;

  background-color: aliceblue;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  border-radius: 15px;

  cursor: pointer;
`;
