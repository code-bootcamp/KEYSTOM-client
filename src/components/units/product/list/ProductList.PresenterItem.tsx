import * as S from "./ProductList.styles";

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
                <S.ProductTitle>Title{props.el.title}</S.ProductTitle>
                {/* <S.ProductTitle>&gt;</S.ProductTitle> */}
                <S.ProductPrice>
                    {props.el.price?.toLocaleString()}
                    {/* <span>원</span> */}
                </S.ProductPrice>
                <S.ProductContents>
                    {props.el.description}
                </S.ProductContents>
            </S.ProductBoxRightWrapper>
        </S.ProductBox>
    );
}
