import { useMutation } from "@apollo/client";
import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { useRouter } from "next/router";
import { Modal } from "antd";
import "@toast-ui/editor/dist/toastui-editor.css";
import { IUpdateVariables } from "./AdminProductWrite.types";
import { CREATE_PRODUCT, UPDATE_PRODUCT, UPLOAD_FILE } from './AdminProductWrite.queries';
import AdminProductWritePresenter from "./AdminProductWrite.presenter";


export default function AdminProductWrite(props: any) {
    const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    const [price, setPrice] = useState<any>();
    // const [hashArr, setHashArr] = useState<string[]>([]);
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [createProduct] = useMutation(CREATE_PRODUCT);
    const [updateProduct] = useMutation(UPDATE_PRODUCT);
    const [uploadFile] = useMutation(UPLOAD_FILE);

    const router = useRouter();
    const editorRef = useRef<any>();
    const description = editorRef?.current?.getInstance().getMarkdown()


    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    // const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    //     if (editorRef.current) {
    //         setDescription(editorRef.current.getInstance().getMarkdown());
    //     }
    // };

    const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value);
    };

    const onChangeFileUrl = (fileUrl: any) => {
        setImageUrls(fileUrl);
    };

    // const onKeyUpHash = (event: any ) => {
    //     if (event.keyCode === 32 && event.target.value !== "") {
    //         setHashArr([...hashArr, "#" + event.target.value]);
    //         event.target.value = "";
    //     }
    // };

    // const onClickTagDelete = (event: MouseEvent<HTMLSpanElement>) => {
    //     if(event.target instanceof Element){
    //         hashArr.splice(Number(event.target.id), 1);
    //         setHashArr([...hashArr]);
    //     }
    
    // };

    // useEffect(() => {
    //     if (props.data?.fetchProduct?.productTags?.tag.length) {
    //         setHashArr([...props.data?.fetchProduct?.productTags?.tag]);
    //     }
    // }, [props.data]);

    useEffect(() => {
        if (props.data?.fetchProduct.thumbnail) {
            setImageUrls([...props.data?.fetchProduct.thumbnail]);
        }
    }, [props.data]);

    const onClickSubmit = async () => {
        try {
            await createProduct({
                variables: {
                    createProductInput: {
                        title,
                        description,
                        price: Number(price),
                        imageUrls,
                        // productTags: hashArr,
                    },
                },
            });

            Modal.success({ content: "상품을 등록하였습니다" });
            router.push("/admin/product");
        } catch (error) {
            if(error instanceof Error){
                Modal.error({ content: error.message });
            }
        }
    };

    const onClickUpdateProduct = async () => {
        // const currentFile = JSON.stringify(imageUrls);
        // const defaultFile = JSON.stringify(props.data?.fetchProduct.imageUrls);
        // const isChangeFile = currentFile !== defaultFile;
        try {
            const updateVariables: IUpdateVariables = {
                productId: router.query.productId,
            };
            if (title) updateVariables.title = title;
            if (description) updateVariables.description = description;
            if (price) updateVariables.price = price;

            await updateProduct({
                variables: {
                    productId: router.query.productId,
                    updateProductInput: {
                        title,
                        description,
                        imageUrls,
                        price: Number(price),
                        // productTags: hashArr,
                    },
                },
            });
            Modal.success({ content: "업데이트 완료했습니다" });
            router.push("/admin/product");
        } catch (error: any) {
            Modal.error({ content: error.message });
        }
    };

    return (
      <AdminProductWritePresenter
      isEdit={props.isEdit}
      data={props.data}
      onChangeTitle={onChangeTitle}
    //   onChangeDescription={onChangeDescription}
      onChangePrice={onChangePrice}
    //   onKeyUpHash={onKeyUpHash}
    //   hashArr={hashArr}
    //   onClickTagDelete={onClickTagDelete}

      editorRef={editorRef}
      uploadFile={uploadFile}
      onChangeFileUrl={onChangeFileUrl}
      description={description}

      onClickUpdateProduct={onClickUpdateProduct}
      onClickSubmit={onClickSubmit}
      />
    );
}
