import { gql, useMutation } from '@apollo/client';
import { Modal, Result } from 'antd';
import { useRef, useState, ChangeEvent } from 'react';
import styled from '@emotion/styled';
// import { checkFileValidation } from '../../../commons/libraries/fileValidation';

const UPLOAD_FILE = gql`
    mutation uploadFile($files:[Upload!]!){
        uploadFile(files:$files)
    }
`

const CREATE_REVIEW_IMAGE = gql`
    mutation createReviewImage($reviewImageUrl: String! $reviewId: String!){
        createReviewImage(reviewImageUrl: $reviewImageUrl reviewId: $reviewId){
            id
            reviewImageUrl
        }
    }
`


const ReviewUploadImage = styled.button`
    width: 160px;
    height: 160px;

    background-color: #c4c4c4;
    margin-right: 30px;

    text-align: center;
    border: none;
    background: #c4c4c4;
    border-radius: 10px;

    color: #000000;
    cursor: pointer;

`;

const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
`

const Image = styled.img`
`

interface IUploadFilePage{
    // onChangeImageURL:(imageUrl:string, idx:number) => void
    // imageUrl:string
    // idx:number
    setImageFile:any
    imageFile:string[]
}

export default function UploadFilePage(props:IUploadFilePage){
    // const [createReviewImage] = useMutation(CREATE_REVIEW_IMAGE)
    const [uploadFile] = useMutation(UPLOAD_FILE)
    const imageFileRef = useRef<HTMLInputElement>(null)
    // const [imageFile, setImageFile] = useState([])


    const onClickUpload = () => {
        imageFileRef.current?.click()
    }

    const onChangeFile = async(event: ChangeEvent<HTMLInputElement>) => {
        if(props.imageFile.length > 8){
            return Modal.error({content:"이미지는 8개까지 업로드 하실 수 있습니다!"})
        }
        const file:any | null = event.target.files
        console.log("file이다", file)

        // const isValidation = checkFileValidation(file)
        // if(!isValidation) return;
        let imageList = [...file]
        imageList.map(async(el)=>{
            try{
                const result = await uploadFile({
                    variables:{
                        files:el,
                    }
                })
                console.log("result!!!", result)
                props.setImageFile((prev:string[])=>([...prev, result.data.uploadImage]))
            }catch(error:any){
                Modal.error({content:error.message})
            }
        })

      
    }

   

    return(
        <ImageWrapper>
            {/* {props.imageFile ? ( */}
               
                {/* ): ( */}
                <ReviewUploadImage  onClick={onClickUpload}>
                    <span>Upload Image</span>
                </ReviewUploadImage>

                {props.imageFile &&  
                <Image
                onClick={onClickUpload}
                src={`https://storage.googleapis.com/${props.imageFile}`}
                /> 
                }
               
                {/* )}                    */}
            <div style={{display: "none"}}>
                <input 
                onChange={onChangeFile}  
                type="file"  
                multiple
                accept='.jpg,.jpeg,.png'
                ref={imageFileRef}/>
            </div>
    
                
        </ImageWrapper>
    )
}