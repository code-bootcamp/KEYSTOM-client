import ProductListPresenterItem from "./ProductList.PresenterItem";
import * as S from "./ProductList.styles";
// import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import InfiniteScroll from "react-infinite-scroller";

export default function ProductListPresenter(props: any) {
    if (!props.data) return <div />;

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
                <InfiniteScroll
                    pageStart={0}
                    loadMore={props.onLoadMore}
                    hasMore={true}
                    useWindow={true}
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                    }}
                >
                    {props.data?.fetchProducts.map((el: any) => (
                        <ProductListPresenterItem
                            key={el.id}
                            el={el}
                            data={props.data}
                        />
                    ))}
                </InfiniteScroll>
            </S.ProductListWrapper>
            {/* 
                <ProductListPresenterItem
                data={props.data}
            ></ProductListPresenterItem> */}
        </S.Wrapper>
    );
}
