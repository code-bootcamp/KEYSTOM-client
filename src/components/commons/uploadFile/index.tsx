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

const ReviewUploadImage = styled.button`
    width: 160px;
    height: 160px;

    background-color: #c4c4c4;
    margin-right: 20px;

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
border: 1px solid #fff;
width: 160px;
height: 160px;
border-radius: 10px;
margin-right: 20px;
`

interface IUploadFilePage{
    // onChangeImageURL:(imageUrl:string, idx:number) => void
    // imageUrl:string
    // idx:number
    setImageFile:any
    imageFile:string[]
}

export default function UploadFilePage(props:IUploadFilePage){
    const [uploadFile] = useMutation(UPLOAD_FILE)
    const imageFileRef = useRef<HTMLInputElement>(null)


    const onClickUpload = () => {
        imageFileRef.current?.click()
    }

    const onChangeFile = async(event: ChangeEvent<HTMLInputElement>) => {
        if(props.imageFile.length > 6){
            return Modal.error({content:"이미지는 7개까지 업로드 하실 수 있습니다!"})
        }
        const file:any | null = event.target.files
        console.log("file이다", file)

        let imageList = [...file]
        imageList.map(async(el)=>{
            try{
                const result = await uploadFile({
                    variables:{
                        files:el,
                    }
                })
                console.log("result!!!", result)
                props.setImageFile((prev:string[])=>([...prev, result.data.uploadFile[0]]))
                console.log("imageFile", props.imageFile)

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

                {props.imageFile.length >= 1 ?
                props.imageFile.map((el)=>(
                <Image
                onClick={onClickUpload}
                src={`https://storage.googleapis.com/${el}`}
                /> 
                ))
                
                :
                <div></div>
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