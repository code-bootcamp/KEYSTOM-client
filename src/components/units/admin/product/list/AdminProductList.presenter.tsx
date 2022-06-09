import * as S from "./AdminProductList.styles"
import dynamic from "next/dynamic";
import DescriptionPage from "./description";
import { IAdminProductListPresenterProps } from "./AdminProductLst.types";

const PostViewer = dynamic(() => import("../detail/Viewer"), { ssr: false });


export default function AdminProductListPresenter(props:IAdminProductListPresenterProps) {
   
    return (
        <S.ProductListWrapper>
            <S.Title>Fetch Products</S.Title>

            {props.data?.fetchProducts.map((el: any, idx: number) => (
                <S.ListItemWrapper key={idx}>
                    <S.ListItemTitle
                        style={{
                            color: "#B150F2",
                            fontWeight: "bold",
                        }}
                    >
                        {idx + 1}
                    </S.ListItemTitle>
                    <S.ListItemInner>
                        <S.ListItemDiv>
                            <S.ListItemImage
                                onClick={props.moveToDetail}
                                id={el.id}
                                // src={
                                //     el.thumbnail
                                //         ? `https://storage.googleapis.com/${el.thumbnail}`
                                //         : "/images/no-image/no-image.png"
                                // }
                                src={`${el.description.includes("https")?
                                el.description?.slice(el.description.indexOf("https"),el.description.indexOf(")")) : "/images/no-image/no-image.png"
                            }`}
                            />
                            <PostViewer style={{ width: "100px" }} />
                        </S.ListItemDiv>

                        <S.ListItemDivWrapper>
                            <S.ListItemDiv>
                                <S.ListItemTitle
                                    onClick={props.moveToDetail}
                                    id={el.id}
                                >
                                    Title
                                </S.ListItemTitle>
                                <S.ListItemContents
                                    onClick={props.moveToDetail}
                                    id={el.id}
                                >
                                    {el.title}
                                </S.ListItemContents>
                            </S.ListItemDiv>
                            <S.ListItemDiv>
                                <S.ListItemTitle>Description</S.ListItemTitle>
                                <DescriptionPage el={el}></DescriptionPage>
                            </S.ListItemDiv>

                            <S.ListBottom>
                                <S.ListItemDiv style={{ paddingRight: "40px" }}>
                                    <S.ListItemTitle>Price</S.ListItemTitle>
                                    <S.ListItemContents>
                                        {el.price}
                                    </S.ListItemContents>
                                </S.ListItemDiv>

                                <S.ListItemDiv style={{ paddingRight: "40px" }}>
                                    <S.ListItemTitle>Created At</S.ListItemTitle>
                                    <S.ListItemContents>
                                        {el.createdAt.slice(0, 10)}
                                    </S.ListItemContents>
                                </S.ListItemDiv>
                                <S.ListItemDiv>
                                    <S.ListItemTitle>Tags</S.ListItemTitle>
                                    {el.productTags.map(
                                        (tagEl: any, idx: number) => (
                                            <S.ListItemTag key={idx}>
                                                {tagEl.tag}
                                            </S.ListItemTag>
                                        )
                                    )}
                                </S.ListItemDiv>
                            </S.ListBottom>
                        </S.ListItemDivWrapper>
                    </S.ListItemInner>
                    <S.ButtonWrapper>
                        <S.DeleteButton
                            style={{ marginRight: "15px" }}
                            id={el.id}
                            onClick={props.onClickDelete}
                        >
                            Delete
                        </S.DeleteButton>
                        <S.DeleteButton id={el.id} onClick={props.moveToEdit}>
                            Edit
                        </S.DeleteButton>
                    </S.ButtonWrapper>
                </S.ListItemWrapper>
            ))}
        </S.ProductListWrapper>
    );
}
