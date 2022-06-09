import { useMutation, useQuery} from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { DELETE_PRODUCT, FETCH_PRODUCTS } from "./AdminProductList.queries";
import AdminProductListPresenter from './AdminProductList.presenter';
import { MouseEvent } from "react";


export default function AdminProductList() {
    const router = useRouter();
    const [deleteProduct] = useMutation(DELETE_PRODUCT, {
        variables: {},
    });

    const { data} = useQuery(FETCH_PRODUCTS, {
        variables: {
            page: 1,
        },
    });


    const onClickDelete = async (event: MouseEvent<HTMLButtonElement>) => {
        try {
            if(event.target instanceof Element){
             await deleteProduct({
                variables: {
                    productId: event.target.id,
                },
                refetchQueries: [
                    {
                        query: FETCH_PRODUCTS,
                        variables: {
                            page: 1,
                        },
                    },
                ],
            });
        }

            Modal.success({ content: "삭제 성공하였습니다" });
        } catch (error: any) {
            Modal.error({ content: error.message });
        }
    };

    const moveToDetail = (event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLImageElement> | MouseEvent<HTMLDivElement>) => {
        if(event.target instanceof Element){
            router.push(`/admin/product/${event.target.id}`);
        }
    };

    const moveToEdit = (event: MouseEvent<HTMLButtonElement>) => {
        if(event.target instanceof Element){
            router.push(`/admin/product/${event.target.id}/edit`);
        }
    };

    return (
       <AdminProductListPresenter
       data={data}
       onClickDelete={onClickDelete}
       moveToDetail={moveToDetail}
       moveToEdit={moveToEdit}
       />
    );
}
