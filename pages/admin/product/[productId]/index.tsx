import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

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

const Inputs = styled.div`
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

const TagInputWrapper = styled.div`
    padding-bottom: 20px;
`;

const Tag = styled.div`
    letter-spacing: 2px;
`;

const SmallInput = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 10px;
    line-height: 30px;
    padding: 10px;
    margin-bottom: 20px;
    background-color: #1b1b1b;
    color: #f1f1f1;
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
            like
            createdAt
            thumbnail
        }
    }
`;

export default function AdminProductDetail() {
    const router = useRouter();
    console.log(router);
    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: router.query.productId,
        },
    });
    console.log(data);

    return (
        <ProductWriteWrapper>
            <Title>Fetch Product</Title>
            <InputWrapper>
                title<Inputs>{data?.fetchProduct.title}</Inputs>
                description<Inputs>{data?.fetchProduct.description}</Inputs>
                price<Inputs>{data?.fetchProduct.price}</Inputs>
            </InputWrapper>
            <InputWrapper>
                <SmallTitle>ProductTags</SmallTitle>
                <TagInputWrapper>
                    # {"  "}
                    <SmallInput />
                </TagInputWrapper>
                <TagDivWrapper>
                    <TagWrapper>
                        <Tag>{data?.fetchProduct.description}</Tag>
                    </TagWrapper>
                </TagDivWrapper>
            </InputWrapper>

            <ImageWrapper></ImageWrapper>

            <SubmitButton>상품등록하기</SubmitButton>
        </ProductWriteWrapper>
    );
}
