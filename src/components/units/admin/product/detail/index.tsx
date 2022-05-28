import { gql, useQuery, useMutation } from '@apollo/client';
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { FETCH_PRODUCTS } from '../../../product/list/ProductList.queries';
import dynamic from 'next/dynamic';
import '@toast-ui/editor/dist/toastui-editor.css';


const PostViewer = dynamic(
    ()=> import('../detail/Viewer'),
    {ssr:false}
  )

const ProductWriteWrapper = styled.div`
    width: 100%;
    padding: 100px 340px;
    color: #f1f1f1;
`;
const Title = styled.div`
    color: #f1f1f1;
    font-size: 26px;
    padding-bottom: 20px;
`;

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
`;

const ContentDiv = styled.div`
    border-radius: 10px;
    width: 800px;
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    padding-left: 20px;
    margin-left: 20px;
    background-color: #1b1b1b;
    ::placeholder {
        color: #666;
    }
`;
const SmallTitle = styled.div`
    color: #f1f1f1;
    font-size: 20px;
    padding-bottom: 20px;
`;
const TagDivWrapper = styled.div`
    width: 100%;
    padding-left: 20px;
    margin-bottom: 30px;
    display: flex;
`;

const TagWrapper = styled.div`
    width: 100px;
    margin-right: 10px;
    color: #f1f1f1;
    border-radius: 10px;
    border: 1px solid #b150f2;
    text-align: center;
    font-size: 15px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
`;


const ImageWrapper = styled.div`
    display: flex;
    padding-left: 20px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
`;

const SubmitButton = styled.button`
    width: 250px;
    height: 80px;
    padding: 10px;
    margin: 80px 20px;
    text-align: center;
    font-size: 20px;
    :hover {
        border: 1px solid #b150f2;
        color: #b150f2;
    }
`;

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: String!) {
        fetchProduct(productId: $productId) {
            id
            title
            description
            price
            # like
            createdAt
            thumbnail
            # productTags{
            #     id
            #     tag
            # }
        }
    }
`;

const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: String!) {
        deleteProduct(productId: $productId)
    }
`;




export default function AdminProductDetail() {
    const router = useRouter();
    console.log("router", router)
    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: String(router.query.productId)
        },
    });

    console.log("fetchproductdata", data)

    const [deleteProduct] = useMutation(DELETE_PRODUCT, {
        variables: {},
    });

    const onClickDeleteProduct = async (e: any) => {
        console.log("삭제하려고 누른 상품 아이디는?", e.target.id);

        try {
            await deleteProduct({
                variables: {
                    productId: e.target.id,
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
            alert("삭제 성공");
            router.push("/admin/product/")

        } catch (error: any) {
            alert(error.message);
        }
    };
    const moveToEditProduct = () => {
        router.push(`/admin/product/${router.query.productId}/edit`)
    }

    return (
        <ProductWriteWrapper>
            <Title>Fetch Product</Title>
            <InputWrapper>
                Title
                <ContentDiv 
                // defaultValue={data?.fetchProduct.title}
                >{data?.fetchProduct.title}</ContentDiv>
                Description
                <ContentDiv>
                    <PostViewer data={data}/>
                    {/* {data?.fetchProduct.description} */}
                </ContentDiv>
                Price<ContentDiv>{data?.fetchProduct.price}</ContentDiv>
            </InputWrapper>
            <InputWrapper>
                <SmallTitle>ProductTags</SmallTitle>
                <TagDivWrapper>
                    <TagWrapper>
                        {/* {data?.fetchProduct.productTags.map((el:any)=>(
                        <Tag key={el.id}>{el.tag}</Tag>
                        ))} */}
                    </TagWrapper>
                </TagDivWrapper>
            </InputWrapper>

            <ImageWrapper>
                {data?.fetchProduct.thumbnail ? (
                    <img src={`https://storage.googleapis.com/${data?.fetchProduct.thumbnail}`} 
                    style={{width:"300px", height:"auto"}}
                    />
                    )
                
                        :
                    (
                        <div></div>
                    )            
                }
                
            </ImageWrapper>

            <SubmitButton onClick={onClickDeleteProduct}>Delete</SubmitButton>
            <SubmitButton onClick={moveToEditProduct}>Edit</SubmitButton>
        </ProductWriteWrapper>
    );
}
