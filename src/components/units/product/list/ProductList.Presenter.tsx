import ProductListPresenterItem from "./ProductList.PresenterItem";
import * as S from "./ProductList.styles";
// import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import InfiniteScroll from "react-infinite-scroller";
import _ from "lodash";


export default function ProductListPresenter(props: any) {
    if (!props.data) return <div></div>;

    // 검색 후 refetch -> 페이지는 1페이지 보여주고 0.2초 마다 디바운싱
    const getDebounce = _.debounce((data: string) => {
        props.refetch({ search: data, page: 1 });
        props.refetchProductCount({ search: data });
        props.onChangeKeyword(data);
        console.log("값 들어오는지 확인", data);
    }, 200);

    const onChangeSearchbar = (e: any) => {
        getDebounce(e.target.value);
        console.log("검색창에 입력 되는지?", e.target.value);
    };

    // if (!props.data)
    //     return (
    //         <S.Wrapper>
    //             <S.SearchWrapper>
    //                 <S.SearchInputWrapper>
    //                     <S.SearchInputIconWrapper>
    //                         <S.SearchIcon></S.SearchIcon>
    //                         <S.SearchInput placeholder="검색어를 입력해주세요."></S.SearchInput>
    //                         {/* <Searchbars01></Searchbars01> */}
    //                     </S.SearchInputIconWrapper>
    //                 </S.SearchInputWrapper>
    //             </S.SearchWrapper>
    //             <S.SearchText>검색 결과</S.SearchText>
    //         </S.Wrapper>
    //     );

    return (
        <S.Wrapper>
            <S.ListBannerWrapper>
                <S.ListBanner src="/images/list/list-banner.png" />
                <S.ListBannerText>Meet Your Own Keyboard</S.ListBannerText>
            </S.ListBannerWrapper>
            <S.SearchWrapper>
                <S.SearchInputWrapper>
                    <S.SearchInputIconWrapper>
                        <S.SearchIcon src="/images/list/search.png"/>
                        <S.SearchInput
                            onChange={onChangeSearchbar}
                            placeholder="Please enter your keyword to search."
                        ></S.SearchInput>
                        {/* <Searchbars01></Searchbars01> */}
                    </S.SearchInputIconWrapper>
                </S.SearchInputWrapper>
                <S.SearchTextWrapper>
                    <S.SearchText>Products</S.SearchText>
                    <S.SearchText>Tags</S.SearchText>
                    <S.SearchText>Price</S.SearchText>
                </S.SearchTextWrapper>
            </S.SearchWrapper>
           

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
                            keyword={props.keyword}
                            onClickMoveToDetail={props.onClickMoveToDetail}
                        />
                    ))}
                    {/* {props.data?.fetchProducts.map((el: any) => (
                        <ProductListPresenterItem
                            key={el.id}
                            el={el}
                            data={props.data}
                            onClickMoveToDetail={props.onClickMoveToDetail}
                        />
                    ))} */}
                </InfiniteScroll>
            </S.ProductListWrapper>
        </S.Wrapper>
    );
}
