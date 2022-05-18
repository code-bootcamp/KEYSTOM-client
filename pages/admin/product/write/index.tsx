import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
    mutation createProduct($createProductInput: CreateProductInput!) {
        createProduct(createProductInput: $createProductInput) {
            id
            name
            description
            price
            like
            image
            thumbnailImage
            createdAt
        }
    }
`;

export default function ProductWrite() {
    const [createProduct] = useMutation(CREATE_PRODUCT);

    const onClickSubmit = async () => {
        try {
            const result = await createProduct({
                variables: {
                    createProductInput: {
                        name: "상품이름",
                        description: "상품설명",
                        price: 123,
                        like: 0,
                        image: "image.png",
                        thumbnailImage: "image.png",
                        productTags: ["싸다"],
                    },
                },
            });
            console.log(result);
            alert("성공");
        } catch (error) {
            alert("실패");
        }
    };

    return (
        <div>
            <button onClick={onClickSubmit}>상품등록</button>
        </div>
    );
}
