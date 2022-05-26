import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import styled from "@emotion/styled";

const ProductListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 100px 340px 300px 340px;
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
    cursor: pointer;
`;
const ListItemDivWrapper = styled.div`
    width: 700px;
`
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
    font-size: 17px;
    line-height: 20px;
    text-align: center;
`;

const ListItemImage = styled.img`
    width: 200px;
    margin-right: 30px;
`;
const ButtonWrapper = styled.div``;

const DeleteButton = styled.button`
    width: 100px;
    height: 50px;
    margin-right: 10px;
`;

export const FETCH_PRODUCTS = gql`
    query fetchProducts($page: Float) {
        fetchProducts(page: $page) {
            id
            title
            description
            price
            like
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

    console.log(router, "router");
    const { data, refetch } = useQuery(FETCH_PRODUCTS, {
        variables: {
            page: 1,
        },
    });

    console.log("fetchdata", data?.fetchProducts);

    const moveToDetail = (event: any) => {
        router.push(`/admin/product/${event.target.id}`);
    };

    const onClickDelete = async (e: any) => {
        console.log("삭제하려고 누른 상품 아이디는?", e.target.id);

        try {
            const result = await deleteProduct({
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
            console.log(result);
        } catch (error: any) {
            alert(error.message);
        }
    };

    const moveToEdit = () => {
        router.push(`/admin/product/${router.query.productId}/edit`)
    }

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
                    <ListItemInner >
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
                        </ListItemDiv>

                        <ListItemDivWrapper>
                            <ListItemDiv>
                                <ListItemTitle 
                                onClick={moveToDetail}
                                id={el.id}
                                >Title</ListItemTitle>
                                <ListItemContents 
                                onClick={moveToDetail}
                                id={el.id}
                                >{el.title}</ListItemContents>
                            </ListItemDiv>
                            <ListItemDiv>
                                <ListItemTitle>Description</ListItemTitle>
                                <ListItemContents>
                                    {el.description}
                                </ListItemContents>
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
                                        {el.createdAt.slice(0,10)}
                                    </ListItemContents>
                                </ListItemDiv>
                                <ListItemDiv>
                                    <ListItemTitle>Tags</ListItemTitle>
                                    {el.productTags.map(
                                        (el: any, idx: number) => (
                                            <ListItemTag key={idx}>
                                                {el.tag}
                                            </ListItemTag>
                                        )
                                    )}
                                </ListItemDiv>
                            </ListBottom>
                        </ListItemDivWrapper>
                    </ListItemInner>
                    <ButtonWrapper>
                        <DeleteButton id={el.id} onClick={onClickDelete}>
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
