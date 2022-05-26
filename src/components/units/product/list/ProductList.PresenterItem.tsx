import * as S from "./ProductList.styles";
import { v4 as uuidv4 } from "uuid";

export default function ProductListPresenterItem(props: any) {
    return (
        <S.ProductBox>
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
