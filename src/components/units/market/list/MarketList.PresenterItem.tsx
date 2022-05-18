import * as S from "./MarketList.styles";

const arr = [
    {
        number: 1,
        contents: "이 키보드는 어쩌구 저쩌구한 장점이 있습니다.",
        seller: "노원두",
        price: 120000,
        image: "/images/keyboard-01.png",
        date: "2022/05/16",
    },
    {
        number: 1,
        contents: "이 키보드는 어쩌구 저쩌구한 장점이 있습니다.",
        seller: "노원두",
        price: 120000,
        image: "/images/keyboard-01.png",
        date: "2022/05/16",
    },
    {
        number: 1,
        contents: "이 키보드는 어쩌구 저쩌구한 장점이 있습니다.",
        seller: "노원두",
        price: 120000,
        image: "/images/keyboard-01.png",
        date: "2022/05/16",
    },
    {
        number: 1,
        contents: "이 키보드는 어쩌구 저쩌구한 장점이 있습니다.",
        seller: "노원두",
        price: 120000,
        image: "/images/keyboard-01.png",
        date: "2022/05/16",
    },
    {
        number: 1,
        contents: "이 키보드는 어쩌구 저쩌구한 장점이 있습니다.",
        seller: "노원두",
        price: 120000,
        image: "/images/keyboard-01.png",
        date: "2022/05/16",
    },
    {
        number: 1,
        contents: "이 키보드는 어쩌구 저쩌구한 장점이 있습니다.",
        seller: "노원두",
        price: 120000,
        image: "/images/keyboard-01.png",
        date: "2022/05/16",
    },
];

export default function MarketListPresenterItem() {
    return (
        <S.ItemWrapper>
            {arr.map((el) => (
                <S.ItemBox>
                    <S.ItemImage src={`${el.image}`}></S.ItemImage>
                    <S.ItemDownWrapper>
                        <S.ItemTitleWrapper>
                            <S.ItemTitle>{el.contents}</S.ItemTitle>
                            <S.ItemPrice>
                                {el.price.toLocaleString()}
                                <span>원</span>
                            </S.ItemPrice>
                        </S.ItemTitleWrapper>
                        <S.ItemSellerWrapper>
                            <S.ItemSeller>판매자 : {el.seller}</S.ItemSeller>
                            <S.ItemDate>{el.date}</S.ItemDate>
                        </S.ItemSellerWrapper>
                    </S.ItemDownWrapper>
                </S.ItemBox>
            ))}

            {/* {props.data?.fetchProducts.map((el) => (
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
            )) || <div></div>} */}
        </S.ItemWrapper>
    );
}
