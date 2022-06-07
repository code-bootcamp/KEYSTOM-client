import { useMutation, useQuery, gql} from "@apollo/client";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { Modal } from "antd";
import DescriptionPage from "./description";

const PostViewer = dynamic(() => import("../detail/Viewer"), { ssr: false });

const ProductListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 100px 150px 300px 150px;
    color: #f1f1f1;
`;
const Title = styled.div`
    color: #f1f1f1;
    font-size: 28px;
    padding-bottom: 40px;
`;

const ListItemInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ListItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    padding-top: 20px;
    padding-bottom: 20px;
`;
const ListItemDivWrapper = styled.div`
    width: 600px;
    cursor: pointer;

`;
const ListItemDiv = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 10px;
`;

const ListItemTitle = styled.div`
    font-size: 16px;
    padding-right: 10px;
    color: #999;
`;

const ListItemContents = styled.div`
    font-size: 14px;
    line-height: 20px;
    text-align: center;
`;

const ListBottom = styled.div`
    display: flex;
`;
const ListItemTag = styled.span`
    width: 50px;
    padding-right: 15px;
    color: #f1f1f1;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
`;

const ListItemImage = styled.img`
    width: 200px;
    margin-right: 30px;
    cursor: pointer;
`;
const ButtonWrapper = styled.div`
display: flex;
justify-content: flex-end;
width: 250px;
`;

const DeleteButton = styled.button`
    width: 100px;
    height: 50px;
    margin-bottom: 10px;
`;

export const FETCH_PRODUCTS = gql`
    query fetchProducts($page: Float) {
        fetchProducts(page: $page) {
            id
            title
            description
            price
            # like
            createdAt
            thumbnail
            productTags {
                id
                tag
            }
        }
    }
`;

export const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: String!) {
        deleteProduct(productId: $productId)
    }
`;

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


    const onClickDelete = async (e: any) => {
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
            Modal.success({ content: "삭제 성공하였습니다" });
        } catch (error: any) {
            Modal.error({ content: error.message });
        }
    };

    const moveToDetail = (event: any) => {
        router.push(`/admin/product/${event.target.id}`);
    };

    const moveToEdit = (event: any) => {
        router.push(`/admin/product/${event.target.id}/edit`);
    };

    return (
        <ProductListWrapper>
            <Title>Fetch Products</Title>

            {data?.fetchProducts.map((el: any, idx: number) => (
                <ListItemWrapper key={idx}>
                    <ListItemTitle
                        style={{
                            color: "#B150F2",
                            fontWeight: "bold",
                        }}
                    >
                        {idx + 1}
                    </ListItemTitle>
                    <ListItemInner>
                        <ListItemDiv>
                            <ListItemImage
                                onClick={moveToDetail}
                                id={el.id}
                                src={
                                    el.thumbnail
                                        ? `https://storage.googleapis.com/${el.thumbnail}`
                                        : "/images/no-image/no-image.png"
                                }
                            />
                            <PostViewer style={{ width: "100px" }} />
                        </ListItemDiv>

                        <ListItemDivWrapper>
                            <ListItemDiv>
                                <ListItemTitle
                                    onClick={moveToDetail}
                                    id={el.id}
                                >
                                    Title
                                </ListItemTitle>
                                <ListItemContents
                                    onClick={moveToDetail}
                                    id={el.id}
                                >
                                    {el.title}
                                </ListItemContents>
                            </ListItemDiv>
                            <ListItemDiv>
                                <ListItemTitle>Description</ListItemTitle>
                                <DescriptionPage el={el}></DescriptionPage>
                            </ListItemDiv>

                            <ListBottom>
                                <ListItemDiv style={{ paddingRight: "40px" }}>
                                    <ListItemTitle>Price</ListItemTitle>
                                    <ListItemContents>
                                        {el.price}
                                    </ListItemContents>
                                </ListItemDiv>

                                <ListItemDiv style={{ paddingRight: "40px" }}>
                                    <ListItemTitle>Created At</ListItemTitle>
                                    <ListItemContents>
                                        {el.createdAt.slice(0, 10)}
                                    </ListItemContents>
                                </ListItemDiv>
                                <ListItemDiv>
                                    <ListItemTitle>Tags</ListItemTitle>
                                    {el.productTags.map(
                                        (tagEl: any, idx: number) => (
                                            <ListItemTag key={idx}>
                                                {tagEl.tag}
                                            </ListItemTag>
                                        )
                                    )}
                                </ListItemDiv>
                            </ListBottom>
                        </ListItemDivWrapper>
                    </ListItemInner>
                    <ButtonWrapper>
                        <DeleteButton
                            style={{ marginRight: "15px" }}
                            id={el.id}
                            onClick={onClickDelete}
                        >
                            Delete
                        </DeleteButton>
                        <DeleteButton id={el.id} onClick={moveToEdit}>
                            Edit
                        </DeleteButton>
                    </ButtonWrapper>
                </ListItemWrapper>
            ))}
        </ProductListWrapper>
    );
}
