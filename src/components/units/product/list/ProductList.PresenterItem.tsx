import * as S from "./ProductList.styles";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const PostViewer = dynamic(() => import("../../admin/product/detail/Viewer"), {
    ssr: false,
});

export default function ProductListPresenterItem(props: any) {
    const [newDescription, setNewDescription] = useState("");

    useEffect(() => {
        if (props.el.description.indexOf("png)") !== -1) {
            setNewDescription(
                props.el.description.substring(
                    props.el.description.indexOf("png)") + 5
                )
            );
            return;
        }
        if (props.el.description.indexOf("jpg)") !== -1) {
            setNewDescription(
                props.el.description.substring(
                    props.el.description.indexOf("jpg)") + 5
                )
            );
            return;
        }
        if (props.el.description) setNewDescription(props.el.description);

        return;
    }, [newDescription]);

    console.log(props.el.description, "=", newDescription);

    return (
        <S.ProductBox>
            {/* <S.ProductImageDiv>
                {props.el.thumbnail &&(
                        <PostViewer 
                        style={{width:"100px"}}/>
                )}
            </S.ProductImageDiv>
         */}
            {props.el.thumbnail ? (
                <S.ProductImage
                    onClick={props.onClickMoveToDetail}
                    src={`https://storage.googleapis.com/${props.el.thumbnail}`}
                    id={props.el.id}
                ></S.ProductImage>
            ) : (
                <S.ProductImage
                    onClick={props.onClickMoveToDetail}
                    style={{ backgroundColor: "gray" }}
                    id={props.el.id}
                ></S.ProductImage>
                // <PostViewer
                // style={{width:"100px"}}/>
            )}

            <S.ProductBoxRightWrapper>
                <S.ProductTitle>
                    {props.el.title
                        .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                        .split("#$%")
                        .map((el: any) => (
                            <S.TextToken
                                key={uuidv4()}
                                isMatched={props.keyword === el}
                            >
                                {el}
                            </S.TextToken>
                        ))}
                </S.ProductTitle>
                {/* <S.ProductTitle>&gt;</S.ProductTitle> */}
                <S.ProductPrice>
                    ￦
                    {props.el.price
                        ?.toLocaleString()
                        .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                        .split("#$%")
                        .map((el: any) => (
                            <S.TextToken
                                key={uuidv4()}
                                isMatched={props.keyword === el}
                            >
                                {el}
                            </S.TextToken>
                        ))}
                    {/* <span>원</span> */}
                </S.ProductPrice>
                <S.ProductContents>
                    {newDescription
                        // .substring(props.el.description.indexOf("png)") + 5)
                        .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                        .split("#$%")
                        .map((el: any) => (
                            <S.TextToken
                                key={uuidv4()}
                                isMatched={props.keyword === el}
                            >
                                {el}
                            </S.TextToken>
                        ))}
                </S.ProductContents>
            </S.ProductBoxRightWrapper>
        </S.ProductBox>
    );
}
