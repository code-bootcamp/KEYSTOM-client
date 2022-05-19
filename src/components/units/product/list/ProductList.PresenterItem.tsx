import * as S from "./ProductList.styles";

export default function ProductListPresenterItem(props: any) {
    return (
        <S.ProductBox>
            {props.el.image === null ? (
                <S.ProductImage src={`${props.el.image}`}></S.ProductImage>
            ) : (
                <S.ProductImage
                    style={{ backgroundColor: "gray" }}
                ></S.ProductImage>
            )}

            <S.ProductBoxRightWrapper>
                <S.ProductTitle>{props.el.title}</S.ProductTitle>
                <S.ProductPrice>
                    {props.el.price.toLocaleString()}
                    <span>원</span>
                </S.ProductPrice>
                <S.ProductContents>{props.el.description}</S.ProductContents>
            </S.ProductBoxRightWrapper>
        </S.ProductBox>
    );
}
