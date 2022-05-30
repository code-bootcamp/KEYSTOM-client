import * as S from "./StoreMain.styles";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";
import TypeWriter from "typewriter-effect";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import LayoutHeader from "../../commons/layout/header/index";
import { AnimatePresence } from "framer-motion";
import LandingAnimation from "./LandingAnimation";

// // 키보드 배경
// function Preloader({ children, timeline }) {
//   const el = useRef();

//   useEffect(() => {
//     timeline &&
//       timeline.to(el.current, {
//         duration: 1,
//         y: "-100%",
//         opacity: 0,
//         delay: 0,
//       });
//   });

//   return <S.PreloaderDiv ref={el}>{children}</S.PreloaderDiv>;
// }

// // 당신만의 키보드를 만들어 보세요.
// function HideTitleFunc({ children, timeline }) {
//   const el = useRef();

//   useEffect(() => {
//     timeline &&
//       timeline.from(el.current, {
//         duration: 0.5,
//         x: "0%",
//         opacity: 0,
//         delay: 0.5,
//       });
//   });

//   return <S.HideTitle ref={el}>{children}</S.HideTitle>;
// }

// // 취향은 내맘대로, 색상은 자유자재로
// function HideTopContentsFunc({ children, timeline }) {
//   const el = useRef();

//   useEffect(() => {
//     timeline &&
//       timeline.from(el.current, {
//         duration: 0.5,
//         x: "0%",
//         opacity: 0,
//         delay: 0.5,
//       });
//   });

//   return <S.HideTopContents ref={el}>{children}</S.HideTopContents>;
// }

// function HideBottomContentsFunc({ children, timeline }) {
//   const el = useRef();

//   useEffect(() => {
//     timeline &&
//       timeline.from(el.current, {
//         duration: 0.5,
//         x: "0%",
//         opacity: 0,
//         delay: 1,
//       });
//   });

//   return <S.HideBottomContents ref={el}>{children}</S.HideBottomContents>;
// }

// // 시작하기 버튼
// function HideButtonFunc({ children, timeline }) {
//   const el = useRef();

//   useEffect(() => {
//     timeline &&
//       timeline.from(el.current, {
//         duration: 0.5,
//         x: "0%",
//         opacity: 0,
//         delay: 0.5,
//       });
//   });

//   return <S.HideButton ref={el}>{children}</S.HideButton>;
// }

const ReviewArr = [
  {
    title: "My Best Choice This Year",
    contents: "I just needed one!",
    image: "/images/review/best-review1.png",
    like: 287,
  },
  {
    title: "I recommend to my friends",
    contents: "Call me as missionary...",
    image: "/images/review/best-review2.png",
    like: 126,
  },
  {
    title: "Thanks for quick delivery",
    contents: "I ordered yesterday but already here",
    image: "/images/review/best-review3.png",
    like: 79,
  },
];

export default function StorePresenter() {
  const [tl, setTl] = useState();
  const router = useRouter();

  useEffect(() => {
    const tl = gsap.timeline();
    setTl(tl);
  }, []);

  const MoveToStore = () => {
    router.push("/store");
  };

  return (
    <>
      <S.Wrapper>
        <S.MainWrapper>
          {/* <div style={{ color: "white", fontSize: "36px" }}>
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
                    </div> */}
          <S.ImageWrapper>
            <S.MainImage>
              {/* <LayoutHeader></LayoutHeader> */}
            </S.MainImage>
          </S.ImageWrapper>

          <S.ImageWrapper>
            <S.MainImage2>
              <S.ContentsWrapper>
                <S.TextWrapper>
                  <S.Text1>How to Customize?</S.Text1>
                  <S.Text2>The way to customize keyboard</S.Text2>
                  <S.Text3>
                    <span
                      style={{
                        textDecoration: "underline",
                      }}
                    >
                      1
                    </span>{" "}
                    Select your wanted key
                  </S.Text3>
                  <S.Text3>
                    <span
                      style={{
                        textDecoration: "underline",
                      }}
                    >
                      2
                    </span>{" "}
                    Choose your own color
                  </S.Text3>
                  <S.Text3>
                    <span
                      style={{
                        textDecoration: "underline",
                      }}
                    >
                      3
                    </span>{" "}
                    Order it!
                  </S.Text3>
                </S.TextWrapper>
                <S.Player>
                  <S.IframeVideo src="/video/how-to-customize.mp4"></S.IframeVideo>
                </S.Player>
              </S.ContentsWrapper>
            </S.MainImage2>
          </S.ImageWrapper>

          <S.ImageWrapper>
            <S.MainImage3>
              <S.TextWrapper2>
                <S.Text3>
                  It is very simple way to get your own customized keyboard !{" "}
                </S.Text3>
                <S.Text3>Enjoy : )</S.Text3>

                <S.MoveButton onClick={MoveToStore}>
                  Go to customize
                </S.MoveButton>
              </S.TextWrapper2>
            </S.MainImage3>
          </S.ImageWrapper>

          <ScrollAnimation
            animateIn="lightSpeedInRight"
            animateOut="slideOutLeft"
          >
            <S.BestReviewWrapper>
              <S.Text>Best Reviews</S.Text>

              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <S.BestProductWrapper>
                  {ReviewArr.map((el) => (
                    <S.BestProductBox>
                      <S.ReviewImage src={`${el.image}`}></S.ReviewImage>
                      <S.ReviewDownWrapper>
                        <S.ReviewLikeWrapper>
                          <S.ReviewEmoji></S.ReviewEmoji>
                          <S.ReviewScore>{el.like}</S.ReviewScore>
                        </S.ReviewLikeWrapper>
                        <S.ReviewTitleWrapper>
                          <S.ReviewTitle>{el.title}</S.ReviewTitle>
                        </S.ReviewTitleWrapper>
                        <S.ReviewContents>{el.contents}</S.ReviewContents>
                      </S.ReviewDownWrapper>
                    </S.BestProductBox>
                  ))}
                </S.BestProductWrapper>
              </ScrollAnimation>
            </S.BestReviewWrapper>
          </ScrollAnimation>

          {/* 구분선 */}
        </S.MainWrapper>
      </S.Wrapper>
    </>
  );
}
