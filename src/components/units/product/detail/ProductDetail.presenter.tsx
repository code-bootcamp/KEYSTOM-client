import * as S from "./ProductDetail.styles";
import ReviewDetail from "./reviewDetail/ReviewDetail.container";

// 키보드에 필요한 import
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useSnapshot } from "valtio";
import Keyboard from "./keyboard/keyboard";
import { keyboardState } from "../../../commons/store";
import {
  ChangeKey,
  SpaceBarChangeKey,
  EnterChangeKey,
  EscChangeKey,
  spacebarLength,
  enterLength,
  escLength,
  length,
} from "./keyboard/length";

function Picker() {
  const snap = useSnapshot(keyboardState);

  return (
    <div
      style={{
        display: snap.current ? "block" : "none",
        marginTop: "30px",
      }}
    >
      <HexColorPicker
        className="picker"
        color={snap.items[snap.current]}
        onChange={(color) => (keyboardState.items[snap.current] = color)}
        style={{ width: "280px", height: "280px" }}
      />
      <div style={{ borderLeftColor: `${keyboardState.items[snap.current]}` }}>
        {keyboardState.items[snap.current]}
      </div>
      <HexColorInput
        color={snap.items[snap.current]}
        onChange={(color) => (keyboardState.items[snap.current] = color)}
      />
    </div>
  );
}

export default function ProductDetailPresenter() {
  return (
    <>
      <S.Wrapper>
        <S.DetailWrapper>
          <S.Title>올 포 디자이너</S.Title>
          <S.ImageWrapper>
            <S.ImageLeft>
              <S.OriginKeyboard></S.OriginKeyboard>
              <S.ColorBoxWrapper>
                <S.PickImage src="/images/colorpick.png" />
                <div>
                  <Picker />
                </div>
              </S.ColorBoxWrapper>
            </S.ImageLeft>
            <S.ImageRight>
              <Canvas
                style={{ marginLeft: "80px" }}
                camera={{ fov: 35, near: 0.2, position: [0, 0.7, 0.6] }}
              >
                <Suspense fallback={null}>
                  <Keyboard />
                  <Environment preset="city" />
                </Suspense>
                <OrbitControls enableZoom={true} enablePan={false} />
              </Canvas>
              <S.VectorImage src="/images/Vector.png" />
            </S.ImageRight>
          </S.ImageWrapper>
        </S.DetailWrapper>

        <S.DetailWrapper>
          <div>
            <S.Title>적용한 커스텀 옵션</S.Title>
            <S.OptionWrapper>
              <S.OptionLeftWrapper>
                <S.OptionTitle>
                  <div>옵션명</div>
                  <div>수량</div>
                  <div>가격</div>
                </S.OptionTitle>
                <S.OptionBottom>
                  <S.Option>
                    <S.OptionText>자판 색 변경</S.OptionText>

                    <S.OptionQty>
                      <ChangeKey />
                    </S.OptionQty>
                    <S.OptionPrice>{length * 8000}</S.OptionPrice>
                  </S.Option>
                  <S.Option>
                    <S.OptionText>스페이스바 색 변경</S.OptionText>
                    <S.OptionQty>
                      <SpaceBarChangeKey />
                    </S.OptionQty>
                    <S.OptionPrice>{spacebarLength * 11000}</S.OptionPrice>
                  </S.Option>
                  <S.Option>
                    <S.OptionText>엔터 색 변경</S.OptionText>
                    <S.OptionQty>
                      <EnterChangeKey />
                    </S.OptionQty>
                    <S.OptionPrice>{enterLength * 12000}</S.OptionPrice>
                  </S.Option>
                  <S.Option>
                    <S.OptionText>ESC 색 변경</S.OptionText>
                    <S.OptionQty>
                      <EscChangeKey />
                    </S.OptionQty>
                    <S.OptionPrice>{escLength * 9000}</S.OptionPrice>
                  </S.Option>
                  <S.PriceWrapper>
                    <S.PriceAdd>합계</S.PriceAdd>
                    <S.PriceNum>
                      {length * 8000 +
                        spacebarLength * 11000 +
                        enterLength * 12000 +
                        escLength * 9000}
                    </S.PriceNum>
                  </S.PriceWrapper>
                </S.OptionBottom>
              </S.OptionLeftWrapper>
              <S.OptionRight>
                <S.ButtonWrapper>
                  <S.MoveToListButton>목록보기</S.MoveToListButton>
                  <S.BasketButton>장바구니</S.BasketButton>
                  <S.PaymentButton>바로 결제</S.PaymentButton>
                </S.ButtonWrapper>
              </S.OptionRight>
            </S.OptionWrapper>
          </div>
        </S.DetailWrapper>
      </S.Wrapper>
      <ReviewDetail />
    </>
  );
}
