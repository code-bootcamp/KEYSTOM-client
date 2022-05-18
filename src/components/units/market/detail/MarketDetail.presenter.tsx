import * as S from "./MarketDetail.styles";

export default function MarketDetailPresenter() {
    return (
        <S.Wrapper>
            <S.DetailWrapper>
                <S.HeaderWrapper>
                    <S.TitleText>글제목</S.TitleText>
                    <S.IconWrapper>
                        <S.Menu></S.Menu>
                        <S.Delete></S.Delete>
                    </S.IconWrapper>
                </S.HeaderWrapper>

                <S.ContentsWrapper>
                    <S.Image></S.Image>
                    <S.RightWrapper>
                        <S.ItemInfoWrapper>
                            <S.TempWrapper>
                                <S.ItemPrice>
                                    가격
                                    <S.Span>40,000</S.Span>
                                    <span>원</span>
                                </S.ItemPrice>
                            </S.TempWrapper>
                            <S.VerticalLine></S.VerticalLine>
                            <S.TempWrapper>
                                <S.ItemSeller>
                                    판매자 <S.Span>노원두</S.Span>
                                </S.ItemSeller>
                            </S.TempWrapper>
                        </S.ItemInfoWrapper>
                        <S.ItemTrade>
                            거래 방법
                            <S.Span>택배</S.Span>
                        </S.ItemTrade>
                        <S.ItemContents></S.ItemContents>
                    </S.RightWrapper>
                </S.ContentsWrapper>

                <S.ChatWrapper></S.ChatWrapper>
            </S.DetailWrapper>
        </S.Wrapper>
    );
}
