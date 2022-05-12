import ProductListPresenterItem from "./ProductList.PresenterItem";
import * as S from "./ProductList.styles";

export default function ProductListPresenter() {
    return (
        <S.Wrapper>
            <S.SearchWrapper>
                <S.SearchInputWrapper>
                    <S.SearchInputIconWrapper>
                        <S.SearchIcon></S.SearchIcon>
                        <S.SearchInput placeholder="검색어를 입력해주세요."></S.SearchInput>
                    </S.SearchInputIconWrapper>
                </S.SearchInputWrapper>
            </S.SearchWrapper>
            <S.SearchText>검색 결과</S.SearchText>

            <S.ProductListWrapper>
                <ProductListPresenterItem></ProductListPresenterItem>
            </S.ProductListWrapper>
        </S.Wrapper>
    );
}
