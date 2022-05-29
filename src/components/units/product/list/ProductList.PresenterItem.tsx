import * as S from "./ProductList.styles";
import { v4 as uuidv4 } from "uuid";
import dynamic from 'next/dynamic';


const PostViewer = dynamic(
    ()=> import('../../admin/product/detail/Viewer'),
    {ssr:false}
  )

export default function ProductListPresenterItem(props: any) {
    return (
        <S.ProductBox>
            {/* <S.ProductImageDiv>
                {props.el.thumbnail &&(
                        <PostViewer 
                        style={{width:"100px"}}/>
                )}
            </S.ProductImageDiv>
         */}
            {props.el.image === null ? (
                <S.ProductImage
                    onClick={props.onClickMoveToDetail}
                    src={`${props.el.image}`}
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
                    {props.el.description
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
