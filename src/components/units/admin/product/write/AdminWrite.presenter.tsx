import * as S from "./AdminWrite.styles"
import dynamic from "next/dynamic";
import { IAdminWritePresenter } from './ProductWrite.types';



const PostEditor = dynamic(() => import("./EditorLoader"), {
    ssr: false,
});



export default function AdminProductWritePresenter(props: IAdminWritePresenter) {


    return (
        <S.ProductWriteWrapper>
            <S.Title>{props.isEdit ? "Edit" : "Create"} Product</S.Title>
            <S.InputWrapper>
                <S.SmallTitle>Title</S.SmallTitle>
                <S.Inputs
                    placeholder="title"
                    onChange={props.onChangeTitle}
                    type="text"
                    defaultValue={props.data?.fetchProduct.title}
                />
            </S.InputWrapper>
            <S.InputWrapper>
                <S.SmallTitle>Description</S.SmallTitle>
                <PostEditor
                    onChangeDescription={props.onChangeDescription}
                    editorRef={props.editorRef}
                    data={props.data}
                    uploadFile={props.uploadFile}
                    onChangeFileUrl={props.onChangeFileUrl}
                    description={props.description}
                />
            </S.InputWrapper>

            <S.InputWrapper>
                <S.SmallTitle>Price</S.SmallTitle>
                <S.Inputs
                    placeholder="price"
                    onChange={props.onChangePrice}
                    type="number"
                    defaultValue={props.data?.fetchProduct.price}
                />
                <S.InputWrapper></S.InputWrapper>
                <S.SmallTitle>ProductTags</S.SmallTitle>
                <S.TagInputWrapper>
                    # {"  "}
                    <S.SmallInput
                        type="text"
                        onKeyUp={props.onKeyUpHash}
                        placeholder="spacebar"
                    />
                </S.TagInputWrapper>
                <S.TagDivWrapper>
                    {props.hashArr.map((el: any, idx: any) => (
                        <S.TagWrapper key={idx}>
                            <S.Tag onClick={props.onClickTagDelete} id={idx}>
                                {el}
                            </S.Tag>
                        </S.TagWrapper>
                    ))}
                </S.TagDivWrapper>
            </S.InputWrapper>

            <S.SubmitButton
                type="button"
                onClick={props.isEdit ? props.onClickUpdateProduct : props.onClickSubmit}
            >
                {props.isEdit ? "Edit" : "Submit"}
            </S.SubmitButton>
        </S.ProductWriteWrapper>
    );
}
