import { gql, useMutation } from "@apollo/client";
import styled from '@emotion/styled';
import UploadFileAdminPage from '../../../../src/components/commons/uploadfile-admin/index';
import {useState} from 'react';
import { v4 as uuidv4 } from "uuid";

const ProductWriteWrapper = styled.div`
width: 100%;
padding: 100px 340px;
color: #f1f1f1;
`
const Title = styled.div`
    color: #f1f1f1;
    font-size: 26px;
    padding-bottom: 20px;
`

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
`

const Inputs = styled.input`
    border-radius: 10px;
    width: 800px;
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    padding-left: 20px;
    margin-left: 20px;
    background-color: #1b1b1b;
    ::placeholder{
        color: #666;
    }
    
`
const SmallTitle = styled.div`
    color: #f1f1f1;
    font-size: 20px;
    padding-bottom: 20px;
`
const TagDivWrapper = styled.div`
width: 100%;
padding-left: 20px;
margin-bottom: 30px;
display: flex;
`

const TagWrapper = styled.div` 
width: 100px;
margin-right: 10px;
color: #f1f1f1;
border-radius: 10px;
border: 1px solid #B150F2;
text-align: center;
font-size: 15px;
height: 50px;
line-height: 50px;
cursor: pointer;
`

const TagInputWrapper = styled.div`
  padding-bottom: 20px;
`;

const Tag = styled.div`
    letter-spacing: 2px;
`

const SmallInput = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 10px;
    line-height: 30px;
    padding: 10px;
    margin-bottom: 20px;
    background-color: #1b1b1b;
    color: #f1f1f1;
`


const ImageWrapper = styled.div`
    display: flex;
    padding-left: 20px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
`

const SubmitButton = styled.button`
    width: 250px;
    height: 80px;
    padding: 10px;
    margin: 80px 20px;
    text-align: center;
    font-size: 20px;
    :hover{
        border: 1px solid #B150F2;
        color: #B150F2;
    }

`

const CREATE_PRODUCT = gql`
    mutation createProduct($createProductInput: CreateProductInput!) {
        createProduct(createProductInput: $createProductInput) {
            id
            title
            description
            price
            like
            createdAt
            thumbnail
            productTags{
                id
                tag
            }
        }
    }
`;

export default function ProductWrite() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [hashArr, setHashArr] = useState<string[]>([]);
    const [imageUrls, setImageUrls] = useState(["","",""])

    const [createProduct] = useMutation(CREATE_PRODUCT);


    const onChangeTitle = (event:any) => {
        setTitle(event.target.value)
    }

    const onChangeDescription = (event:any) => {
        setDescription(event.target.value)
    }

    const onChangePrice = (event:any) => {
        setPrice(event.target.value)
        console.log(price,"price")
    }

    const onChangeFileUrl = (fileUrl:any, index:number) => {
        const newFile = [...imageUrls]
        newFile[index] = fileUrl;
        setImageUrls(newFile)
    }




    const onKeyUpHash = (event: any) => {
        if (event.keyCode === 32 && event.target.value !== "") {
          setHashArr([...hashArr, "#" + event.target.value]);
          event.target.value = "";
        }
      };


    const onClickTagDelete = (event: any) => {
        hashArr.splice(Number(event.target.id), 1);
        setHashArr([...hashArr]);
      };


    const onClickSubmit = async () => {
        try {
            const result = await createProduct({
                variables: {
                    createProductInput: {
                        title,
                        description,
                        price:Number(price),
                        imageUrls,
                        productTags: hashArr,
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
        <ProductWriteWrapper>
            <Title>Create Product</Title>
            <InputWrapper>
                <Inputs placeholder="title" onChange={onChangeTitle} type="text"/>
                <Inputs placeholder="description" onChange={onChangeDescription} type="text"/>
                <Inputs placeholder="price" onChange={onChangePrice} type="number"/>
            </InputWrapper>
                <InputWrapper>
                    <SmallTitle>ProductTags</SmallTitle>
                        <TagInputWrapper>
                        # {"  "}
                        <SmallInput
                            type="text"
                            onKeyUp={onKeyUpHash}
                            placeholder="spacebar"
                        />
                        </TagInputWrapper>
                        <TagDivWrapper>
                        {hashArr.map((el: any, idx: any) => (
                            <TagWrapper key={idx}>
                            <Tag onClick={onClickTagDelete} id={idx}>{el}</Tag>
                            </TagWrapper>
                        ))}
                        </TagDivWrapper>
                </InputWrapper>
                
            <ImageWrapper>
                {imageUrls?.map((el:any, index:any)=>(
                    <div key={uuidv4()}>
                        <UploadFileAdminPage onChangeFileUrl={onChangeFileUrl} fileUrl={el} index={index}/>
                    </div>
                ))}
            </ImageWrapper>

            <SubmitButton onClick={onClickSubmit}>상품등록하기</SubmitButton>
        </ProductWriteWrapper>
    );
}
