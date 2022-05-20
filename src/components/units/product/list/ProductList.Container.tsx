import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductListPresenter from "./ProductList.Presenter";

const FETCH_PRODUCTS = gql`
    query fetchProducts($page: Float) {
        fetchProducts(page: $page) {
            id
            name
            description
            price
            like
            image
            thumbnailImage
            createdAt
            productTags {
                id
                tag
            }
        }
    }
`;

export default function ProductListContainer() {
    const { data, fetchMore } = useQuery(FETCH_PRODUCTS);
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
    const onClickMoveToDetail = (e) => {
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
