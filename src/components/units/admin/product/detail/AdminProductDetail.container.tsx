import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PRODUCTS } from "../../../product/list/ProductList.queries";
import { Modal } from "antd";
import {request} from "graphql-request"
import AdminProductDetailPresenter from "./AdminProductDetail.presenter";
import { FETCH_PRODUCT, DELETE_PRODUCT } from './AdminProductDetail.queries';
import { IAdminProductDetailContainerProps } from './AdminProductDetail.types';
import { MouseEvent } from "react";




export default function AdminProductDetail(props:IAdminProductDetailContainerProps) {
    const router = useRouter();
    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: String(router.query.productId),
        },
    });

    const [deleteProduct] = useMutation(DELETE_PRODUCT, {
        variables: {},
    });

    const onClickDeleteProduct = async (event: MouseEvent<HTMLButtonElement>) => {
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
            Modal.success({ content: "삭제 성공하였습니다!" });
            router.push("/admin/product/");
        } catch (error: any) {
            Modal.error({ content: error.message });
        }
    };
    const moveToEditProduct = () => {
        router.push(`/admin/product/${router.query.productId}/edit`);
    };

    const moveToList = () => {
        router.push("/admin/product/")
    }

    return (
        <AdminProductDetailPresenter
        productData={props.productData}
        data={data}
        onClickDeleteProduct={onClickDeleteProduct}
        moveToEditProduct={moveToEditProduct}
        moveToList={moveToList}
        />
    );
}



export const getServerSideProps = async (context:any) => {

    const data = await request("https://delifarm.site/graphql", FETCH_PRODUCT, {productId:  context.query.productId})

    return {
        props:{
            productData:{
                title:data?.fetchProduct.title,
                description: data?.fetchProduct.description,
                thumbnail:data?.fetchProduct.thumbnail
            }
        }
    }
}

