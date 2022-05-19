import { useQuery } from "@apollo/client";
import { FETCH_BEST_PRODUCTS, FETCH_BEST_REVIEW } from "./StoreMain.queries";
import * as S from "./StoreMain.styles";
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import gsap from "gsap";

const PreloaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0px;
  padding: 0;
  box-sizing: border-box;
  position: relative;
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
  z-index: 9999;
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

// 키보드 배경
function Preloader({ children, timeline }) {
  const el = useRef();

  useEffect(() => {
    timeline &&
      timeline.to(el.current, {
        duration: 1,
        y: "-100%",
        opacity: 0,
        delay: 1,
      });
  }, [timeline]);

  return <PreloaderDiv ref={el}>{children}</PreloaderDiv>;
}

// 당신만의 키보드를 만들어 보세요.
function HideTitleFunc({ children, timeline }) {
  const el = useRef();

  useEffect(() => {
    timeline &&
      timeline.from(el.current, { duration: 2, x: "0%", opacity: 0, delay: 1 });
  }, [timeline]);

  return <HideTitle ref={el}>{children}</HideTitle>;
}

// 취향은 내맘대로, 색상은 자유자재로
function HideTopContentsFunc({ children, timeline }) {
  const el = useRef();

  useEffect(() => {
    timeline &&
      timeline.from(el.current, { duration: 2, x: "0%", opacity: 0, delay: 1 });
  }, [timeline]);

  return <HideTopContents ref={el}>{children}</HideTopContents>;
}

// F12에서 진정한 자유를 만나보세요.
function HideBottomContentsFunc({ children, timeline }) {
  const el = useRef();

  useEffect(() => {
    timeline &&
      timeline.from(el.current, { duration: 2, x: "0%", opacity: 0, delay: 1 });
  }, [timeline]);

  return <HideBottomContents ref={el}>{children}</HideBottomContents>;
}

// 시작하기 버튼
function HideButtonFunc({ children, timeline }) {
  const el = useRef();

  useEffect(() => {
    timeline &&
      timeline.from(el.current, {
        duration: 2,
        x: "0%",
        opacity: 0,
        delay: 1,
      });
  }, [timeline]);

  return <HideButton ref={el}>{children}</HideButton>;
}

export default function StorePresenter() {
    const { data: productData } = useQuery(FETCH_BEST_PRODUCTS);
    const { data: reviewData } = useQuery(FETCH_BEST_REVIEW);

    return (
        <S.Wrapper>
            <S.MainWrapper>
                <S.ImageWrapper>
                    <S.MainImage></S.MainImage>
                </S.ImageWrapper>

                <S.Text>베스트 상품</S.Text>
                <S.BestProductWrapper>
                    {productData?.fetchBestProduct.map((el: any) => (
                        <S.BestProductBox
                            key={productData?.fetchBestProduct.id}
                        >
                            <S.ReviewImage src={`${el.image}`}></S.ReviewImage>
                            <S.ReviewDownWrapper>
                                <S.ReviewTitleWrapper>
                                    <S.ReviewTitle>{el.name}</S.ReviewTitle>
                                    <S.ReviewScore>
                                        {el.price.toLocaleString()}
                                        <span>원</span>
                                    </S.ReviewScore>
                                </S.ReviewTitleWrapper>
                                <S.ReviewContents>
                                    {el.description}
                                </S.ReviewContents>
                            </S.ReviewDownWrapper>
                        </S.BestProductBox>
                    ))}
                </S.BestProductWrapper>

                <S.Text>베스트 리뷰</S.Text>
                <S.BestProductWrapper>
                    {reviewData?.fetchBestReview.map((el: any) => (
                        <S.BestProductBox key={reviewData?.fetchBestReview.id}>
                            <S.ReviewImage src={`${el.image}`}></S.ReviewImage>
                            <S.ReviewDownWrapper>
                                <S.ReviewTitleWrapper>
                                    <S.ReviewTitle>
                                        {el.reviewTitle}
                                    </S.ReviewTitle>
                                    <S.ReviewLikeWrapper>
                                        <S.ReviewEmoji></S.ReviewEmoji>
                                        <S.ReviewScore>{el.like}</S.ReviewScore>
                                    </S.ReviewLikeWrapper>
                                </S.ReviewTitleWrapper>
                                <S.ReviewContents>
                                    {el.reviewContent}
                                </S.ReviewContents>
                            </S.ReviewDownWrapper>
                        </S.BestProductBox>
                    ))}
                </S.BestProductWrapper>

                {/* 구분선 */}
            </S.MainWrapper>
        </S.Wrapper>
    );
}
