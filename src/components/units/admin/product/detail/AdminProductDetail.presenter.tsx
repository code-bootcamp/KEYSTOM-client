import * as S from './AdminProductDetail.styles'
import Head from "next/head";
// import AdminDescriptionPage from './description';
import dynamic from "next/dynamic";
import "@toast-ui/editor/dist/toastui-editor.css";
import { IAdminProductDetailPresenterProps } from './AdminProductDetail.types';

const PostViewer = dynamic(() => import("../detail/Viewer"), { ssr: false });

export default function AdminProductDetailPresenter(props: IAdminProductDetailPresenterProps) {

    return(
        <S.ProductWriteWrapper>
        <Head>
            <meta property="og:title" content={props.productData?.title}></meta>
            <meta property="og:description" content={props.productData?.description}></meta>
            {/* <meta property="og:thumbnail" content={props.productData?.thumbnail}></meta> */}
        </Head>
        <S.Title>Fetch Product</S.Title>
        <S.InputWrapper>
            <S.SmallTitle>Title</S.SmallTitle>
            <S.ContentDiv>{props.data?.fetchProduct.title}</S.ContentDiv>
            <S.SmallTitle>Description</S.SmallTitle>
            {/* <AdminDescriptionPage
                data={props.data?.fetchProduct}
            > */}
                 <PostViewer data = {props.data} />
            {/* </AdminDescriptionPage> */}
            <S.SmallTitle>Price</S.SmallTitle>
            <S.ContentDiv>{props.data?.fetchProduct.price}</S.ContentDiv>
        </S.InputWrapper>
        <S.InputWrapper>
            <S.SmallTitle>ProductTags</S.SmallTitle>
            <S.TagDivWrapper>
                <S.TagWrapper>
                    {/* {props.data?.fetchProduct.productTags.map((el: any) => (
                        <S.Tag key={el.id}>{el.tag}</S.Tag>
                    ))} */}
                </S.TagWrapper>
            </S.TagDivWrapper>
        </S.InputWrapper>

        <S.SubmitButton onClick={props.onClickDeleteProduct}>Delete</S.SubmitButton>
        <S.SubmitButton onClick={props.moveToEditProduct}>Edit</S.SubmitButton>
        <S.SubmitButton onClick={props.moveToList}>Move To List</S.SubmitButton>
    </S.ProductWriteWrapper>
    )
}