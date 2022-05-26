import AdminProductWrite from '../../../../../src/components/units/admin/product/write/index';
import { useQuery } from '@apollo/client';

// const { data } = useQuery(FETCH_PRODUCT, {
//     variables: {
//         productId: router.query.productId,
//     },
// });
export default function AdminProductEditPage(){

    return(
        <AdminProductWrite isEdit={true}/>
    )
}