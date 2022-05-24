import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductListPresenter from "./ProductList.Presenter";
import { FETCH_PRODUCTS } from './ProductList.queries';



export default function ProductListContainer() {
    const { data, fetchMore } = useQuery(FETCH_PRODUCTS,{
        variables:{
            page:1
        }
    });
    const router = useRouter();

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
    console.log(data);
    console.log(router);
    const onClickMoveToDetail = (e: any) => {
        router.push(`/store/${e.target.id}`);
    };

    return (
        <ProductListPresenter
            data={data}
            onLoadMore={onLoadMore}
            onClickMoveToDetail={onClickMoveToDetail}
        ></ProductListPresenter>
    );
}
