import ProductListPresenterItem from "./ProductList.PresenterItem";
import * as S from "./ProductList.styles";
import InfiniteScroll from "react-infinite-scroller";
import _ from "lodash";
import Typewriter from "typewriter-effect";
import { IProductListPresenterProps } from "./ProductList.types";

export default function ProductListPresenter(
    props: IProductListPresenterProps
) {
    if (!props.data) return <div></div>;

    const getDebounce = _.debounce((data: string) => {
        props.refetch({ search: data, page: 1 });
        props.refetchProductCount({ search: data });
        props.onChangeKeyword(data);
    }, 200);

    const onChangeSearchbar = (e: any) => {
        getDebounce(e.target.value);
    };

    return (
        <S.Wrapper>
            <S.ListBannerWrapper>
                <S.ListBanner src="/images/list/list-banner.png" />
                <S.ListBannerText>
                    <Typewriter
                        options={{ loop: true }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Meet Your Own ")
                                .typeString(
                                    "<strong><span'>Keyboard</span></strong>"
                                )
                                .pauseFor(100)
                                .deleteChars(8)
                                .typeString(
                                    "<strong><span>KEYSTOM</span></strong>"
                                )
                                .pauseFor(100)
                                .deleteChars(7)
                                .typeString(
                                    "<strong><span>Customed Keyboard<span><strong>"
                                )
                                .start();
                        }}
                    />
                </S.ListBannerText>
            </S.ListBannerWrapper>
            <S.SearchWrapper>
                <S.SearchInputWrapper>
                    <S.SearchInputIconWrapper>
                        <S.SearchIcon src="/images/list/search.png" />
                        <S.SearchInput
                            onChange={onChangeSearchbar}
                            placeholder="Please enter your keyword to search."
                        ></S.SearchInput>
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
                </InfiniteScroll>
            </S.ProductListWrapper>
        </S.Wrapper>
    );
}
