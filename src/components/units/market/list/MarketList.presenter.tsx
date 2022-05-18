import MarketListPresenterItem from "./MarketList.PresenterItem";
import * as S from "./MarketList.styles";

export default function MarketListPresenter() {
    return (
        <S.Wrapper>
            <S.HeaderWrapper>
                <S.BannerImage>이미지</S.BannerImage>
                <S.WriteBtn>판매글 쓰기</S.WriteBtn>
                {/* <S.Search>판매검색창</S.Search> */}

                <S.SearchInputWrapper>
                    <S.SearchInputIconWrapper>
                        <S.SearchIcon></S.SearchIcon>
                        <S.SearchInput placeholder="검색어를 입력해주세요."></S.SearchInput>
                    </S.SearchInputIconWrapper>
                </S.SearchInputWrapper>

                <S.ResultWrapper>
                    <S.ResultText>검색결과</S.ResultText>
                    <S.Span>36</S.Span>
                </S.ResultWrapper>
            </S.HeaderWrapper>

            <S.ListWrapper>
                <MarketListPresenterItem></MarketListPresenterItem>
            </S.ListWrapper>
        </S.Wrapper>
    );
}
