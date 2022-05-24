import * as S from "./StoreMain.styles";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";
import TypeWriter from "typewriter-effect";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

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

  return <S.PreloaderDiv ref={el}>{children}</S.PreloaderDiv>;
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

  return <S.HideTitle ref={el}>{children}</S.HideTitle>;
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

  return <S.HideTopContents ref={el}>{children}</S.HideTopContents>;
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

  return <S.HideBottomContents ref={el}>{children}</S.HideBottomContents>;
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

  return <S.HideButton ref={el}>{children}</S.HideButton>;
}

const ProductArr = [
  {
    title: "키보드 1호",
    contents:
      "키보드 1호 상품 설명입니다. 키보드 1호 상품 설명입니다. 키보드 1호 상품 설명입니다. ",
    image: "/images/keyboard-01.jpg",
    price: 120000,
  },
  {
    title: "키보드 2호",
    contents: "키보드 2호 상품 설명입니다. 어쩌구 저쩌구 ㅇㅇㅇㅇ",
    image: "/images/keyboard-02.jpg",
    price: 60000,
  },
  {
    title: "키보드 3호",
    contents: "키보드 3호 상품 설명입니다. 어쩌구 저쩌구 ㅇㅇㅇㅇ",
    image: "/images/keyboard-03.jpg",
    price: 220000,
  },
];

const ReviewArr = [
  {
    title: "키보드 1호",
    contents: "리뷰 상세, 1줄 이상은 생략하게 해주세요.(...)",
    image: "/images/keyboard-01.jpg",
    like: 15,
  },
  {
    title: "키보드 2호",
    contents: "리뷰 상세, 1줄 이상은 생략하게 해주세요.(...)",
    image: "/images/keyboard-02.jpg",
    like: 10,
  },
  {
    title: "키보드 3호",
    contents: "리뷰 상세, 1줄 이상은 생략하게 해주세요.(...)",
    image: "/images/keyboard-03.jpg",
    like: 5,
  },
];

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
        <S.PreloaderWrapper>
          <Preloader timeline={tl}>
            <S.PreloaderChild>
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
              <HideButtonFunc timeline={tl}>시작하기</HideButtonFunc>
            </S.PreloaderChild>
          </Preloader>
        </S.PreloaderWrapper>

        <S.HeaderWrapper>
          <S.LogoDiv>
            <S.Logo src="/images/lg.png" onClick={MoveToHome} />
          </S.LogoDiv>
          <S.MenuWrapper>
            <S.MenuDiv>
              <S.Menu onClick={MoveToStore}>Store</S.Menu>
              <S.Menu onClick={MoveToMyPage}>My page</S.Menu>
              <S.Menu onClick={MoveToRestorePage}>Restore</S.Menu>
            </S.MenuDiv>
            <S.MenuDiv>
              <S.IconWrapper>
                <S.UserIcon src="/images/user.png" onClick={moveToLogin} />
              </S.IconWrapper>

              <S.BasketWrapper>
                {/* <BasketNum>0</BasketNum> */}
                <S.BasketIcon src="/images/basket.png" onClick={moveToMyPage} />
              </S.BasketWrapper>
            </S.MenuDiv>
          </S.MenuWrapper>
        </S.HeaderWrapper>

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

          <ScrollAnimation animateIn="fadeInDownBig" animateOut="fadeOut">
            <S.Text>베스트 상품</S.Text>
          </ScrollAnimation>
          <ScrollAnimation animateIn="backInRight" animateOut="bounceOutRight">
            <S.BestProductWrapper>
              {ProductArr.map((el) => (
                <S.BestProductBox>
                  <S.ReviewImage src={`${el.image}`}></S.ReviewImage>
                  <S.ReviewDownWrapper>
                    <S.ReviewTitleWrapper>
                      <S.ReviewTitle>{el.title}</S.ReviewTitle>
                      <S.ReviewScore>
                        {el.price.toLocaleString()}
                        <span>원</span>
                      </S.ReviewScore>
                    </S.ReviewTitleWrapper>
                    <S.ReviewContents>{el.contents}</S.ReviewContents>
                  </S.ReviewDownWrapper>
                </S.BestProductBox>
              ))}
            </S.BestProductWrapper>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="lightSpeedInRight"
            animateOut="slideOutLeft"
          >
            <S.Text>베스트 리뷰</S.Text>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <S.BestProductWrapper>
              {ReviewArr.map((el) => (
                <S.BestProductBox>
                  <S.ReviewImage src={`${el.image}`}></S.ReviewImage>
                  <S.ReviewDownWrapper>
                    <S.ReviewTitleWrapper>
                      <S.ReviewTitle>{el.title}</S.ReviewTitle>
                      <S.ReviewLikeWrapper>
                        <S.ReviewEmoji></S.ReviewEmoji>
                        <S.ReviewScore>{el.like}</S.ReviewScore>
                      </S.ReviewLikeWrapper>
                    </S.ReviewTitleWrapper>
                    <S.ReviewContents>{el.contents}</S.ReviewContents>
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
