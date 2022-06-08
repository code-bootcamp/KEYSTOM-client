import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import ProductListPresenter from "./ProductList.Presenter";
import { FETCH_PRODUCTS, FETCH_PRODUCT_ROW_COUNT } from "./ProductList.queries";

export default function ProductListContainer() {
    const router = useRouter();
    const [keyword, setKeyword] = useState("");

    const { data, fetchMore, refetch } = useQuery(FETCH_PRODUCTS, {
        variables: {
            page: 1,
        },
    });

    const { data: productCount, refetch: refetchProductCount } = useQuery(
        FETCH_PRODUCT_ROW_COUNT
    );

    const onLoadMore = () => {
        if (!data) return;

        fetchMore({
            variables: { page: Math.ceil(data?.fetchProducts.length / 10) + 1 },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult?.fetchProducts)
                    return { fetchProducts: [...prev.fetchProducts] };
                return {
                    fetchProducts: [
                        ...prev.fetchProducts,
                        ...fetchMoreResult.fetchProducts,
                    ],
                };
            },
        });
    };
    const onClickMoveToDetail = (event: MouseEvent<HTMLImageElement>) => {
        if (event.target instanceof Element)
            router.push(`/store/${event.target.id}`);
    };

    const onChangeKeyword = (value: string) => {
        setKeyword(value);
    };

    return (
        <ProductListPresenter
            data={data}
            refetch={refetch}
            productCount={productCount}
            refetchProductCount={refetchProductCount}
            onChangeKeyword={onChangeKeyword}
            keyword={keyword}
            onLoadMore={onLoadMore}
            onClickMoveToDetail={onClickMoveToDetail}
        ></ProductListPresenter>
    );
}
