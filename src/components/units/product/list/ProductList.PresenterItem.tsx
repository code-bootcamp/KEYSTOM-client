import * as S from "./ProductList.styles";

export default function ProductListPresenterItem(props: any) {
    return (
        <S.ProductBoxWrapper>
            {props.data?.fetchProducts.map((el: any) => (
                <S.ProductBox key={el.id}>
                    {el.image === null ? (
                        <S.ProductImage src={`${el.image}`}></S.ProductImage>
                    ) : (
                        <S.ProductImage
                            style={{ backgroundColor: "gray" }}
                        ></S.ProductImage>
                    )}

                    <S.ProductBoxRightWrapper>
                        <S.ProductTitle>{el.title}</S.ProductTitle>
                        <S.ProductPrice>
                            {el.price.toLocaleString()}
                            <span>원</span>
                        </S.ProductPrice>
                        <S.ProductContents>{el.contents}</S.ProductContents>
                    </S.ProductBoxRightWrapper>
                </S.ProductBox>
            )) || <div></div>}
        </S.ProductBoxWrapper>
    );
}
