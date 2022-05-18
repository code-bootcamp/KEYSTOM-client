import * as S from "./MarketWrite.styles";

export default function MarketWritePresenter() {
    return (
        <S.Wrapper>
            <S.WriteWrapper>
                <S.WriteText>판매글쓰기</S.WriteText>

                <S.RowWrapper>
                    <S.Label>1. 글 제목</S.Label>
                    <S.Span>*필수</S.Span>
                </S.RowWrapper>

                <S.RowWrapper style={{ marginBottom: "60px" }}>
                    <S.ItemInput
                        type="text"
                        placeholder="글 제목을 입력해주세요."
                    ></S.ItemInput>
                    <S.CheckIcon></S.CheckIcon>
                </S.RowWrapper>

                <S.RowWrapper>
                    <S.Label>2. 희망 가격</S.Label>
                    <S.Span>*필수</S.Span>
                </S.RowWrapper>

                <S.RowWrapper style={{ marginBottom: "60px" }}>
                    <S.ItemInput
                        type="number"
                        placeholder="희망 가격을 입력해주세요."
                        style={{ width: "380px" }}
                    ></S.ItemInput>
                </S.RowWrapper>

                <S.RowWrapper>
                    <S.Label>3. 거래 방법</S.Label>
                    <S.Span>*필수</S.Span>
                </S.RowWrapper>

                <S.RowWrapper style={{ marginBottom: "60px" }}>
                    <S.ItemInput
                        type="text"
                        placeholder="거래 방법을 입력해주세요."
                        style={{ width: "380px" }}
                    ></S.ItemInput>
                </S.RowWrapper>

                <S.RowWrapper>
                    <S.Label>4. 게시글 내용</S.Label>
                    <S.Span>*필수</S.Span>
                </S.RowWrapper>

                <S.RowWrapper style={{ marginBottom: "60px" }}>
                    <S.ItemContentsInput placeholder="내용을 입력해주세요."></S.ItemContentsInput>
                </S.RowWrapper>

                <S.RowWrapper>
                    <S.Label>5. 사진첨부</S.Label>
                    <S.Span>*필수</S.Span>
                </S.RowWrapper>

                <S.UploadWrapper>
                    <S.UploadBtn>+</S.UploadBtn>
                    <S.UploadBtn>+</S.UploadBtn>
                </S.UploadWrapper>

                <S.BtnWrapper>
                    <S.CancelBtn>작성취소</S.CancelBtn>
                    <S.WriteBtn>작성하기</S.WriteBtn>
                </S.BtnWrapper>
            </S.WriteWrapper>
        </S.Wrapper>
    );
}
