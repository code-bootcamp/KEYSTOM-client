import * as S from "./StoreMain.styles";
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import gsap from "gsap";
import { useRouter } from "next/router";
import TypeWriter from "typewriter-effect";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import LayoutHeader from '../../commons/layout/header/index';

// 키보드 배경
function Preloader({ children, timeline }) {
    const el = useRef();
    //   const [hideState, setHideState] = useRecoilState(isHideButton);

    useEffect(() => {
        // hideState &&
        timeline &&
            timeline.to(el.current, {
                duration: 1,
                y: "-100%",
                opacity: 0,
                delay: 0,
            });
    });

    return <PreloaderDiv ref={el}>{children}</PreloaderDiv>;
}

// 당신만의 키보드를 만들어 보세요.
function HideTitleFunc({ children, timeline }) {
    const el = useRef();
    //   const [hideState, setHideState] = useRecoilState(isHideButton);

    useEffect(() => {
        // hideState &&
        timeline &&
            timeline.from(el.current, {
                duration: 0.5,
                x: "0%",
                opacity: 0,
                delay: 0.5,
            });
    });

    return <HideTitle ref={el}>{children}</HideTitle>;
}

// 취향은 내맘대로, 색상은 자유자재로
function HideTopContentsFunc({ children, timeline }) {
    const el = useRef();
    //   const [hideState, setHideState] = useRecoilState(isHideButton);

    useEffect(() => {
        // hideState &&
        timeline &&
            timeline.from(el.current, {
                duration: 0.5,
                x: "0%",
                opacity: 0,
                delay: 0.5,
            });
    });

    return <HideTopContents ref={el}>{children}</HideTopContents>;
}

// F12에서 진정한 자유를 만나보세요.
function HideBottomContentsFunc({ children, timeline }) {
    const el = useRef();
    //   const [hideState, setHideState] = useRecoilState(isHideButton);

    useEffect(() => {
        // hideState &&
        timeline &&
            timeline.from(el.current, {
                duration: 0.5,
                x: "0%",
                opacity: 0,
                delay: 1,
            });
    });

    return <HideBottomContents ref={el}>{children}</HideBottomContents>;
}

// 시작하기 버튼
function HideButtonFunc({ children, timeline }) {
    const el = useRef();
    //   const [hideState, setHideState] = useRecoilState(isHideButton);

    useEffect(() => {
        // hideState &&
        timeline &&
            timeline.from(el.current, {
                duration: 0.5,
                x: "0%",
                opacity: 0,
                delay: 0.5,
            });
    });

    return <HideButton ref={el}>{children}</HideButton>;
}

const ProductArr = [
    {
        title: "키보드 1호",
        contents:
            "키보드 1호 상품 설명입니다. 키보드 1호 상품 설명입니다. 키보드 1호 상품 설명입니다. ",
        image: "/images/main/best_product_1.png",
        price: 120000,
    },
    {
        title: "키보드 2호",
        contents: "키보드 2호 상품 설명입니다. 어쩌구 저쩌구 ㅇㅇㅇㅇ",
        image: "/images/main/best_product_2.png",
        price: 60000,
    },
    {
        title: "키보드 3호",
        contents: "키보드 3호 상품 설명입니다. 어쩌구 저쩌구 ㅇㅇㅇㅇ",
        image: "/images/main/best_product_3.png",
        price: 220000,
    },
];

const ReviewArr = [
    {
        title: "키보드 1호",
        contents: "리뷰 상세, 1줄 이상은 생략하게 해주세요.(...)",
        image: "/images/main/best_review_1.png",
        like: 15,
    },
    {
        title: "키보드 2호",
        contents: "리뷰 상세, 1줄 이상은 생략하게 해주세요.(...)",
        image: "/images/main/best_review_2.png",
        like: 10,
    },
    {
        title: "키보드 3호",
        contents: "리뷰 상세, 1줄 이상은 생략하게 해주세요.(...)",
        image: "/images/main/best_review_3.png",
        like: 5,
    },
];

const PreloaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 0px;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    z-index: 9999;
`;

const PreloaderDiv = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    overflow-y: hidden; /* Hide vertical scrollbar */
    overflow-x: hidden;
`;

const PreloaderChild = styled.div`
    width: 100%;
    min-height: 100%;
    position: relative;
    z-index: 999;
    background: url("/images/Bg_img.png") no-repeat center center fixed;
`;

const HideTitle = styled.div`
    width: 744px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 355px;

    font-family: "NanumGothicCoding";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    color: #ffffff;
`;

const HideTopContents = styled.div`
    width: 420px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 73px;

    font-family: "NanumGothicCoding";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #f1f1f1;
`;

const HideBottomContents = styled.div`
    width: 420px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;

    font-family: "NanumGothicCoding";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #f1f1f1;
`;

const HideButton = styled.button`
    width: 242px;
    height: 84px;
    background: #b150f2;
    border-radius: 20px;
    margin-left: 839px;
    margin-top: 176px;
    border: none;

    font-family: "NanumGothicCoding";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
`;

const HeaderWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    width: 1920px;
    height: 180px;
    background-color: #2c2c2c;
    padding-left: 210px;
    padding-right: 210px;
    display: relative;
    z-index: 2;
`;

const LogoDiv = styled.div`
    width: 120px;
    height: 120px;
`;

const Logo = styled.img`
    width: 100%;
    cursor: pointer;
`;
const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const MenuDiv = styled.div`
    display: flex;
    align-items: center;
`;
const Menu = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: #f1f1f1;
    padding-left: 58px;
    cursor: pointer;
    :hover {
        color: #b150f2;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    width: 54px;
    height: 54px;
    margin-right: 38px;
    margin-bottom: 23px;
`;

const UserIcon = styled.img`
    width: 100%;
    cursor: pointer;
`;
const BasketWrapper = styled.div`
    width: 54px;
    height: 54px;
    margin-right: 38px;
    margin-bottom: 23px;
    margin-top: -38px;
`;

const BasketIcon = styled.img`
    width: 54px;
    height: 54px;
    cursor: pointer;
`;

// const BasketNum = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 20px;
//   padding-left: 6px;
//   background-color: #b150f2;
//   position: relative;
//   left: 35px;
//   top: 23px;
// `;

export default function StorePresenter() {
    const [tl, setTl] = useState();
    const router = useRouter();

    useEffect(() => {
        const tl = gsap.timeline();
        setTl(tl);
    }, []);

    const MoveToHome = () => {
        router.push("/");
    };

    const MoveToStore = () => {
        router.push("/store");
    };

    const MoveToMyPage = () => {
        router.push("/mypage");
    };

    const moveToMyPage = () => {
        router.push("/mypage");
    };

    const moveToLogin = () => {
        router.push("/login");
    };

    const MoveToRestorePage = () => {
        router.push("/market");
    };

    return (
        <>
            <S.Wrapper>
                <PreloaderWrapper>
                    <Preloader timeline={tl}>
                        <PreloaderChild>
                            <ScrollAnimation
                                animateIn="slideInLeft"
                                animateOut="slideOutLeft"
                            >
                                <HideTitleFunc timeline={tl}>
                                    당신만의 키보드를 만들어 보세요
                                </HideTitleFunc>
                            </ScrollAnimation>
                            <HideTopContentsFunc timeline={tl}>
                                취향은 내맘대로, 색상은 자유자재로.
                            </HideTopContentsFunc>
                            <HideBottomContentsFunc timeline={tl}>
                                F12에서 진정한 자유를 만나보세요.
                            </HideBottomContentsFunc>
                            <HideButtonFunc timeline={tl}>
                                시작하기
                            </HideButtonFunc>
                        </PreloaderChild>
                    </Preloader>
                </PreloaderWrapper>

                <HeaderWrapper>
                    <LogoDiv>
                        <Logo src="/images/lg.png" onClick={MoveToHome} />
                    </LogoDiv>
                    <MenuWrapper>
                        <MenuDiv>
                            <Menu onClick={MoveToStore}>Store</Menu>
                            <Menu onClick={MoveToMyPage}>My page</Menu>
                            <Menu onClick={MoveToRestorePage}>Restore</Menu>
                        </MenuDiv>
                        <MenuDiv>
                            <IconWrapper>
                                <UserIcon
                                    src="/images/user.png"
                                    onClick={moveToLogin}
                                />
                            </IconWrapper>

                            <BasketWrapper>
                                {/* <BasketNum>0</BasketNum> */}
                                <BasketIcon
                                    src="/images/basket.png"
                                    onClick={moveToMyPage}
                                />
                            </BasketWrapper>
                        </MenuDiv>
                    </MenuWrapper>
                </HeaderWrapper>

                <S.MainWrapper>
                    <div style={{ color: "white", fontSize: "36px" }}>
                        <span>F12는</span>
                        <TypeWriter
                            options={{ loop: true }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(
                                        "<strong><span style='color: #ffffff;'>멋있어요</span></strong>"
                                    )
                                    .pauseFor(500)
                                    .deleteChars(4)
                                    .typeString(
                                        "<strong><span style='color: #ffffff;'>이뻐요</span></strong>"
                                    )
                                    .pauseFor(500)
                                    .deleteChars(3)
                                    .typeString(
                                        "<strong><span style='color: #ffffff;'>쌉니다</span></strong>"
                                    )
                                    .pauseFor(500)
                                    .deleteChars(3)
                                    .typeString(
                                        "<strong><span style='color: #ffffff;'>커스텀 제작이 가능해요 !!</span></strong>"
                                    )
                                    .pauseFor(500)
                                    .start();
                            }}
                        />
                    </div>
                    <S.ImageWrapper>
                        <S.MainImage></S.MainImage>
                    </S.ImageWrapper>

                    <ScrollAnimation
                        animateIn="fadeInDownBig"
                        animateOut="fadeOut"
                    >
                        <S.Text>Best Products</S.Text>
                    </ScrollAnimation>
                    <ScrollAnimation
                        animateIn="backInRight"
                        animateOut="bounceOutRight"
                    >
                        <S.BestProductWrapper>
                            {ProductArr.map((el) => (
                                <S.BestProductBox>
                                    <S.ReviewImage
                                        src={`${el.image}`}
                                    ></S.ReviewImage>
                                    <S.ReviewDownWrapper>
                                        <S.ReviewTitleWrapper>
                                            <S.ReviewTitle>
                                                {el.title}
                                            </S.ReviewTitle>
                                            <S.ProductsPrice>
                                                {el.price.toLocaleString()}
                                                <span>원</span>
                                            </S.ProductsPrice>
                                        </S.ReviewTitleWrapper>
                                        <S.ReviewContents>
                                            {el.contents}
                                        </S.ReviewContents>
                                    </S.ReviewDownWrapper>
                                </S.BestProductBox>
                            ))}
                        </S.BestProductWrapper>
                    </ScrollAnimation>

                    <ScrollAnimation
                        animateIn="lightSpeedInRight"
                        animateOut="slideOutLeft"
                    >
                        <S.Text>Best Review</S.Text>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <S.BestProductWrapper>
                            {ReviewArr.map((el) => (
                                <S.BestProductBox>
                                    <S.ReviewImage
                                        src={`${el.image}`}
                                    ></S.ReviewImage>
                                    <S.ReviewDownWrapper>
                                        <S.ReviewLikeWrapper>
                                            <S.ReviewEmoji></S.ReviewEmoji>
                                            <S.ReviewScore>
                                                {el.like}
                                            </S.ReviewScore>
                                        </S.ReviewLikeWrapper>
                                        <S.ReviewTitleWrapper>
                                            <S.ReviewTitle>
                                                {el.title}
                                            </S.ReviewTitle>
                                        </S.ReviewTitleWrapper>
                                        <S.ReviewContents>
                                            {el.contents}
                                        </S.ReviewContents>
                                    </S.ReviewDownWrapper>
                                </S.BestProductBox>
                            ))}
                        </S.BestProductWrapper>
                    </ScrollAnimation>

                    {/* 구분선 */}
                </S.MainWrapper>
            </S.Wrapper>
        </>
    );
}
