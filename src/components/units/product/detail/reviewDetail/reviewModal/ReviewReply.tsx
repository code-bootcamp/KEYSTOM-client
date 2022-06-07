import styled from "@emotion/styled";

export const ReplyWrapper = styled.div`
    display: flex;
`;
export const ReplyDiv = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #c4c4c4;
    padding: 20px 20px 20px 100px;
    width: 100%;
`;

export const ReplyBtns = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70px;
`;
export const ReplyEditBtn = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;
export const ReplyDeleteBtn = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

export const ReplyProfile = styled.div`
    width: 60px;
    height: 45px;
    background: #eccdf3;
    border-radius: 30px;
    margin-right: 20px;
`;

export const ReplyInner = styled.div`
    display: flex;
    flex-direction: column;
    width: 980px;
`;

export const ReplyTop = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 18px;
`;

export const ReplyTopDiv = styled.div`
    display: flex;
    width: 100%;
`;

export const ReplyWriter = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    padding-right: 10px;
`;

export const ReplyCreatedAt = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;

export const ReplyContents = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 18px;
`;

export const ReplyBottom = styled.div``;
export const ReplyBtn = styled.div`
    width: 30px;
    height: 30px;
    background-color: #c4c4c4;
    padding-bottom: 18px;
`;
export const ReplyIconDiv = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    background-color: beige;
`;
export const ReplyIcon = styled.img`
    width: 100%;
`;

export default function Reply() {
    return (
        <ReplyWrapper>
            <ReplyIconDiv>
                <ReplyIcon src="/images/reviewarrow.png" />
            </ReplyIconDiv>
            <ReplyDiv>
                <ReplyProfile></ReplyProfile>
                <ReplyInner>
                    <ReplyTop>
                        <ReplyTopDiv>
                            <ReplyWriter>글쓴이</ReplyWriter>
                            <ReplyCreatedAt>2022/05/11</ReplyCreatedAt>
                        </ReplyTopDiv>

                        <ReplyBtns>
                            <ReplyEditBtn src="/images/edit.png" />
                            <ReplyDeleteBtn src="/images/delete.png" />
                        </ReplyBtns>
                    </ReplyTop>
                    <ReplyContents>감사합니당!</ReplyContents>
                </ReplyInner>
            </ReplyDiv>
        </ReplyWrapper>
    );
}
