import ProductListPresenterItem from "./ProductList.PresenterItem";
import * as S from "./ProductList.styles";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";

export default function ProductListPresenter(props: any) {
    return (
        <S.Wrapper>
            <S.SearchWrapper>
                <S.SearchInputWrapper>
                    <S.SearchInputIconWrapper>
                        <S.SearchIcon></S.SearchIcon>
                        <S.SearchInput placeholder="검색어를 입력해주세요."></S.SearchInput>
                        {/* <Searchbars01></Searchbars01> */}
                    </S.SearchInputIconWrapper>
                </S.SearchInputWrapper>
            </S.SearchWrapper>
            <S.SearchText>검색 결과</S.SearchText>

            <S.ProductListWrapper>
                <ProductListPresenterItem
                    data={props.data}
                ></ProductListPresenterItem>
            </S.ProductListWrapper>
        </S.Wrapper>
    );
}
