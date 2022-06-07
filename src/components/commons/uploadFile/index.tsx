import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRef, ChangeEvent } from "react";
import styled from "@emotion/styled";

const UPLOAD_FILE = gql`
    mutation uploadFile($files: [Upload!]!) {
        uploadFile(files: $files)
    }
`;

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
`;

const Image = styled.img`
    border: 1px solid #fff;
    width: 160px;
    height: 160px;
    border-radius: 10px;
    margin-right: 20px;
`;

interface IUploadFilePage {
    setImageUrls: any;
    imageUrls: string[];
}

export default function UploadFilePage(props: IUploadFilePage) {
    const [uploadFile] = useMutation(UPLOAD_FILE);
    const imageFileRef = useRef<HTMLInputElement>(null);

    const onClickUpload = () => {
        imageFileRef.current?.click();
    };

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        if (props.imageUrls.length > 6) {
            return Modal.error({
                content: "이미지는 7개까지 업로드 하실 수 있습니다!",
            });
        }
        const file: any | null = event.target.files;
        console.log("file이다", file);

        const imageList = [...file];
        imageList.map(async (el) => {
            try {
                const result = await uploadFile({
                    variables: {
                        files: el,
                    },
                });
                console.log("result!!!", result);
                props.setImageUrls((prev: string[]) => [
                    ...prev,
                    result.data.uploadFile[0],
                ]);
                console.log("imageFile", props.imageUrls);
            } catch (error: any) {
                Modal.error({ content: error.message });
            }
        });
    };

    return (
        <ImageWrapper>
            <ReviewUploadImage onClick={onClickUpload}>
                <span>Upload Image</span>
            </ReviewUploadImage>

            {props.imageUrls.length >= 1 ? (
                props.imageUrls.map((el, idx) => (
                    <Image
                        key={idx}
                        onClick={onClickUpload}
                        src={`https://storage.googleapis.com/${el}`}
                    />
                ))
            ) : (
                <div></div>
            )}

            <div style={{ display: "none" }}>
                <input
                    onChange={onChangeFile}
                    type="file"
                    multiple
                    accept=".jpg,.jpeg,.png"
                    ref={imageFileRef}
                />
            </div>
        </ImageWrapper>
    );
}
