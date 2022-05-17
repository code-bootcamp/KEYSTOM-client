import { gql, useQuery } from "@apollo/client";
import ProductListPresenter from "./ProductList.Presenter";

const FETCH_PRODUCTS = gql`
    query fetchProducts {
        fetchProducts {
            id
            name
            description
            price
            like
            image
            thumbnailImage
        }
    }
`;

export default function ProductListContainer() {
    const { data } = useQuery(FETCH_PRODUCTS);
    console.log(data);
    return <ProductListPresenter data={data}></ProductListPresenter>;
}
