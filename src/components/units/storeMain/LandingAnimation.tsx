import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import * as S from "./StoreMain.styles";

function Preloader({ children, timeline }: any) {
  const el = useRef<any>();

  useEffect(() => {
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

function HideTitleFunc({ children, timeline }: any) {
  const el = useRef<any>();

  useEffect(() => {
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

function HideTopContentsFunc({ children, timeline }: any) {
  const el = useRef<any>();

  useEffect(() => {
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

function HideBottomContentsFunc({ children, timeline }: any) {
  const el = useRef<any>();

  useEffect(() => {
    timeline &&
      timeline.from(el.current, {
        duration: 1,
        x: "0%",
        opacity: 0,
        delay: 1,
      });
  });

  return <S.HideBottomContents ref={el}>{children}</S.HideBottomContents>;
}

export default function LandingAnimation() {
  const [tl, setTl] = useState<any>();

  useEffect(() => {
    const tl = gsap.timeline();
    setTl(tl);
  }, []);

  return (
    <S.PreloaderWrapper>
      <Preloader timeline={tl}>
        <S.PreloaderChild>
          <HideTitleFunc timeline={tl}>
            당신만의 키보드를 만들어 보세요
          </HideTitleFunc>
          <HideTopContentsFunc timeline={tl}>
            취향은 내맘대로, 색상은 자유자재로.
          </HideTopContentsFunc>
          <HideBottomContentsFunc timeline={tl}>
            F12에서 진정한 자유를 만나보세요.
          </HideBottomContentsFunc>
        </S.PreloaderChild>
      </Preloader>
    </S.PreloaderWrapper>
  );
}
