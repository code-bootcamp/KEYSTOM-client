import { gql, useMutation } from '@apollo/client';
import { Modal } from 'antd';
import { useRef, useState, ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { checkFileValidation } from '../../../commons/libraries/fileValidation';

const UPLOAD_FILE = gql`
    mutation uploadFile($file:Upload!){
        uploadFile(file:$file){
            url
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
`;

const ImageWrapper = styled.div`
       width: 100%;
    display: flex;
`

const UploadDiv = styled.div`
    width: 100px;
    height: 100px;
    background-color: #bdbdbd;
    cursor: pointer;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin-right: 15px;
`

const Image = styled.img`
    width: 12vw;
    margin-right: 15px;
`



interface IUploadFilePage{
    onChangeImageFile:(imageUrl:string, index:number) => void
    imageUrl:string
    idx:number
}

export default function UploadFilePage(props:IUploadFilePage){
    const [uploadFile] = useMutation(UPLOAD_FILE)
    const imageFileRef = useRef<HTMLInputElement>(null)


    const onChangeFile = async(event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        console.log("file이다", file)

        const isValidation = checkFileValidation(file)
        if(!isValidation) return;
        try{
            const result = await uploadFile({
                variables:{file}
            })
            console.log("result!!!", result)
        
        }catch(error:any){
            Modal.error({content:error.message})
        }
    }

    const onClickUpload = () => {
        imageFileRef.current?.click()
    }

    return(
        <ImageWrapper>
            {props.imageUrl ? (

                <Image
                onClick={onClickUpload}
                src={`https://storage.googleapis.com/${props.fileUrl}`}
                />

            ) :(
                <UploadDiv  onClick={onClickUpload}>
                    <span>image</span>
                </UploadDiv>

            )}
      
            <div style={{display: "none"}}>
                        <input 
                            onChange={onChangeFile}  
                            type="file"  
                            ref={imageFileRef}/>
            </div>
    
                
        </ImageWrapper>
    )
}