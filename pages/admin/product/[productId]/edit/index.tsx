import AdminProductWrite from "../../../../../src/components/units/admin/product/write/AdminProductWrite.container";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: String!) {
        fetchProduct(productId: $productId) {
            id
            title
            description
            price
            createdAt
            # thumbnail
        }
    }
`;
export default function AdminProductEditPage() {
    const router = useRouter();
    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: String(router.query.productId),
        },
    });

    return <AdminProductWrite isEdit={true} data={data} />;
}
