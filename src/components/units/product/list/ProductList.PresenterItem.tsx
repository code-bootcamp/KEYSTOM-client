import * as S from "./ProductList.styles";

const arr = [
    {
        number: 1,
        title: "타이틀1",
        price: 120000,
        contents: "이 키보드는 어쩌구 저쩌구한 장점이 있습니다.",
        image: "/images/keyboard-01.jpg",
    },
    {
        number: 2,
        title: "타이틀1",
        price: 120000,
        contents: "이 키보드는 어쩌구 저쩌구한 장점이 있습니다.",
        image: "/images/keyboard-01.jpg",
    },
    {
        number: 3,
        title: "타이틀2",
        price: 120000,
        contents: "이 키보드는 어쩌구 저쩌구한 장점이 있습니다.",
        image: "/images/keyboard-02.jpg",
    },
    {
        number: 4,
        title: "타이틀2",
        price: 120000,
        contents:
            "❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤",
        image: "/images/keyboard-02.jpg",
    },
];

export default function ProductListPresenterItem() {
    return (
        <S.ProductBoxWrapper>
            {arr.map((el) => (
                <S.ProductBox key={el.number}>
                    <S.ProductImage src={`${el.image}`}></S.ProductImage>
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
