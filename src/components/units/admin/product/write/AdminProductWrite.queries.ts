import { gql } from "@apollo/client";



export const CREATE_PRODUCT = gql`
    mutation createProduct($createProductInput: CreateProductInput!) {
        createProduct(createProductInput: $createProductInput) {
            id
            title
            description
            price
            createdAt
            # productTags {
            #     id
            #     tag
            # }
        }
    }
`;

export const UPDATE_PRODUCT = gql`
    mutation updateProduct(
        $productId: String!
        $updateProductInput: UpdateProductInput!
    ) {
        updateProduct(
            productId: $productId
            updateProductInput: $updateProductInput
        ) {
            id
            title
            description
            price
            createdAt
            # productTags {
            #     id
            #     tag
            # }
        }
    }
`;

export const UPLOAD_FILE = gql`
    mutation uploadFile($files: [Upload!]!) {
        uploadFile(files: $files)
    }
`;