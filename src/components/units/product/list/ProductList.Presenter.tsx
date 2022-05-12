import ProductListPresenterItem from "./ProductList.PresenterItem";
import * as S from "./ProductList.styles";

const search = 0;

export default function ProductListPresenter() {
  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.SearchInputWrapper>
          <S.SearchInput placeholder="검색어를 입력해주세요."></S.SearchInput>
          {search ? (
            <S.SearchText>검색 결과</S.SearchText>
          ) : (
            <S.SearchText></S.SearchText>
          )}
        </S.SearchInputWrapper>
      </S.SearchWrapper>

      <S.ProductListWrapper>
        <ProductListPresenterItem></ProductListPresenterItem>
      </S.ProductListWrapper>
    </S.Wrapper>
  );
}
