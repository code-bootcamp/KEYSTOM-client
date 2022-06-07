import styled from "@emotion/styled";
import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { Modal } from "antd";
import { checkFileValidation } from "../../../commons/libraries/fileValidation";

const UPLOAD_FILE = gql`
    mutation uploadFile($files: [Upload!]!) {
        uploadFile(files: $files)
    }
`;

const Wrapper = styled.div`
    width: 100%;
`;

const UploadDiv = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid #bdbdbd;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

const Image = styled.img`
    width: 300px;
    margin-right: 10px;
`;

interface IUploadFIlePage {
    fileUrl: string;
    onChangeFileUrl: (fileUrl: any, index: number) => void;
    images?: any;
    index: number;
}

export default function UploadFileAdminPage(props: IUploadFIlePage) {
    const [uploadFile] = useMutation(UPLOAD_FILE);
    const fileRef = useRef<HTMLInputElement>(null);

    const onClickUpload = () => {
        fileRef.current?.click();
    };

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files?.[0];
        console.log(files);

        const isValid = checkFileValidation(files);
        if (!isValid) return;

        try {
            const result = await uploadFile({ variables: { files } });
            props.onChangeFileUrl(String(result.data.uploadFile), props.index);
        } catch (error: any) {
            Modal.error({ content: error.message });
        }
    };

    return (
        <Wrapper>
            {props.fileUrl ? (
                <Image
                    onClick={onClickUpload}
                    src={`https://storage.googleapis.com/${props.fileUrl}`}
                />
            ) : (
                <UploadDiv onClick={onClickUpload}>
                    <span>image</span>
                </UploadDiv>
            )}
            <div style={{ display: "none" }}>
                <input onChange={onChangeFile} type="file" ref={fileRef} />
            </div>
        </Wrapper>
    );
}
