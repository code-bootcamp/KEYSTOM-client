import styled from "@emotion/styled";

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  padding: 20px;
`;

export const CommentProfile = styled.div`
  width: 60px;
  height: 45px;
  background: #e5e5e5;
  border-radius: 30px;
  margin-right: 20px;
`;

export const CommentInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 1010px;
`;

export const CommentTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 18px;
`;

export const CommentTopDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const CommentWriter = styled.div`
  font-size: 14px;
  line-height: 20px;
  padding-right: 10px;
`;

export const CommentCreatedAt = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #b1b1b1;
`;

export const CommentContents = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  padding-bottom: 18px;
`;

export const CommentBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;
`;
export const CommentEditBtn = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const CommentDeleteBtn = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const CommentBottom = styled.div``;
export const ReplyBtn = styled.div`
  width: 30px;
  height: 30px;
  padding-bottom: 18px;
  cursor: pointer;
`;

export const ReplyIcon = styled.img`
  width: 100%;
`;
