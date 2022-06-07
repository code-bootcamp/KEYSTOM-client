import * as S from "./StoreMain.styles";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { v4 as uuidv4 } from "uuid";

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
  const [, setTl] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    const tl = gsap.timeline();
    setTl(tl);
  }, []);

  const MoveToStore = () => {
    router.push("/store");
  };

  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.ImageWrapper>
          <S.MainImage></S.MainImage>
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

              <S.MoveButton onClick={MoveToStore}>Go to customize</S.MoveButton>
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
                  <S.BestProductBox key={uuidv4()}>
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
  );
}
