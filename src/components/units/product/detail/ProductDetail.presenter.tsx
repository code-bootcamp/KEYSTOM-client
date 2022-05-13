import * as S from "./ProductDetail.styles";
import ReviewDetail from "./reviewDetail/ReviewDetail.container";

// 키보드에 필요한 import
import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";

// 키보드 3d 구현 함수
function Keyboard(props: any) {
  const ref = useRef();
  // const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/images/keyboard4.glb");

  // Cursor showing current color
  const [hovered, set] = useState(null);
  useEffect(() => {
    // const cursor = `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        cursor
      )}'), auto`;
      return () =>
        (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
          auto
        )}'), auto`);
    }
  }, [hovered]);

  console.log(nodes);

  console.log(materials);

  return (
    <>
      <group
        ref={ref}
        {...props}
        dispose={null}
        // onPointerOver={(e) => console.log(e)}
        // onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        // onPointerMissed={() => (state.current = null)}
        // onClick={(e) => (
        //   e.stopPropagation(), (state.current = e.object.material.uuid)
        // )}
        position={[-0.28, 0, -0.1]}
        rotation={[0, 0, 0]}
        scale={[2, 2, 2]}
      >
        {/* <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane115.geometry}
            material={materials.None}
          /> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.esc_Plane.geometry}
          material={materials.esc}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f1_Plane001.geometry}
          material={nodes.f1_Plane001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f2_Plane002.geometry}
          material={nodes.f2_Plane002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f3_Plane003.geometry}
          material={nodes.f3_Plane003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f4_Plane004.geometry}
          material={nodes.f4_Plane004.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f5_Plane005.geometry}
          material={nodes.f5_Plane005.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f6_Plane006.geometry}
          material={nodes.f6_Plane006.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f7_Plane007.geometry}
          material={nodes.f7_Plane007.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f8_Plane008.geometry}
          material={nodes.f8_Plane008.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f9_Plane009.geometry}
          material={nodes.f9_Plane009.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f10_Plane010.geometry}
          material={nodes.f10_Plane010.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f11_Plane011.geometry}
          material={nodes.f11_Plane011.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f12_Plane012.geometry}
          material={nodes.f12_Plane012.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.backspace_Plane013.geometry}
          material={materials["keycaps.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Q_Plane025.geometry}
          material={nodes.Q_Plane025.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.W_Plane024.geometry}
          material={nodes.W_Plane024.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.E_Plane023.geometry}
          material={nodes.E_Plane023.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.R_Plane022.geometry}
          material={nodes.R_Plane022.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.T_Plane021.geometry}
          material={nodes.T_Plane021.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Y_Plane020.geometry}
          material={nodes.Y_Plane020.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.U_Plane019.geometry}
          material={nodes.U_Plane019.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.I_Plane018.geometry}
          material={nodes.I_Plane018.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.O_Plane017.geometry}
          material={nodes.O_Plane017.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.P_Plane016.geometry}
          material={nodes.P_Plane016.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._Plane015.geometry}
          material={nodes._Plane015.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._Plane014.geometry}
          material={nodes._Plane014.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["`~_Plane027"].geometry}
          material={nodes["`~_Plane027"].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tAB_Plane028.geometry}
          material={nodes.tAB_Plane028.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["'\"_Plane039"].geometry}
          material={nodes["'\"_Plane039"].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.D_Plane038.geometry}
          material={nodes.D_Plane038.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.K_Plane037.geometry}
          material={nodes.K_Plane037.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Plane036.geometry}
          material={nodes.L_Plane036.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes[";_Plane035"].geometry}
          material={nodes[";_Plane035"].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.A_Plane034.geometry}
          material={nodes.A_Plane034.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.F_Plane033.geometry}
          material={nodes.F_Plane033.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Plane032.geometry}
          material={nodes.G_Plane032.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.J_Plane031.geometry}
          material={nodes.J_Plane031.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.S_Plane030.geometry}
          material={nodes.S_Plane030.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.H_Plane029.geometry}
          material={nodes.H_Plane029.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CAPSLOCK_Plane040.geometry}
          material={nodes.CAPSLOCK_Plane040.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ENTER_Plane041.geometry}
          material={nodes.ENTER_Plane041.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["?_Plane051"].geometry}
          material={nodes["?_Plane051"].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Z_Plane050.geometry}
          material={nodes.Z_Plane050.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.C_Plane049.geometry}
          material={nodes.C_Plane049.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.V_Plane048.geometry}
          material={nodes.V_Plane048.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.B_Plane047.geometry}
          material={nodes.B_Plane047.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.N_Plane046.geometry}
          material={nodes.N_Plane046.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.M_Plane045.geometry}
          material={nodes.M_Plane045.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes[",<_Plane044"].geometry}
          material={nodes[",<_Plane044"].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes[">_Plane043"].geometry}
          material={nodes[">_Plane043"].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.X_Plane042.geometry}
          material={nodes.X_Plane042.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SHIFT1_Plane052.geometry}
          material={nodes.SHIFT1_Plane052.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SHIFT2_Plane053.geometry}
          material={nodes.SHIFT2_Plane053.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPACEBAR_Plane054.geometry}
          material={nodes.SPACEBAR_Plane054.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CTRL_Plane055.geometry}
          material={nodes.CTRL_Plane055.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WINDOW_BUTTON_Plane056.geometry}
          material={nodes.WINDOW_BUTTON_Plane056.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ALT001_Plane057.geometry}
          material={nodes.ALT001_Plane057.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WINDOWBUTTON2_Plane060.geometry}
          material={nodes.WINDOWBUTTON2_Plane060.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FN_Plane059.geometry}
          material={nodes.FN_Plane059.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CTRL2_Plane058.geometry}
          material={nodes.CTRL2_Plane058.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ALT_Plane061.geometry}
          material={nodes.ALT_Plane061.material}
        />
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_Plane075_1.geometry}
          material={materials["Material.003"]}
        /> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_Plane075_2.geometry}
          material={materials["Material.002"]}
        />
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane058_Plane132.geometry}
          material={materials["Material.001"]}
        /> */}
      </group>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          position={[-0.28, 0, -0.1]}
          rotation={[0, 0, 0]}
          scale={[2, 2, 2]}
        />
      </group>
    </>
  );
}

export default function ProductDetailPresenter() {
  return (
    <S.Wrapper>
      <S.DetailWrapper>
        <S.Title>키보드 타이틀</S.Title>
        <S.ImageWrapper>
          <S.ImageLeft>
            <S.OriginKeyboard>
              원래 키보드 이미지
              {/* <image/> */}
            </S.OriginKeyboard>
            <S.ColorBoxWrapper>
              <S.Box>박스</S.Box>
              <div>
                <S.ColorBox>
                  <S.Color></S.Color>
                  <S.Color></S.Color>
                  <S.Color></S.Color>
                  <S.Color></S.Color>
                </S.ColorBox>

                <S.ColorBox>
                  <S.Color></S.Color>
                  <S.Color></S.Color>
                  <S.Color></S.Color>
                  <S.Color></S.Color>
                </S.ColorBox>

                <S.ColorBox>
                  <S.Color></S.Color>
                  <S.Color></S.Color>
                  <S.Color></S.Color>
                  <S.Color></S.Color>
                </S.ColorBox>

                <S.ColorBox>
                  <S.Color></S.Color>
                  <S.Color></S.Color>
                  <S.Color></S.Color>
                  <S.Color></S.Color>
                </S.ColorBox>
              </div>
            </S.ColorBoxWrapper>
          </S.ImageLeft>
          <S.ImageRight>
            <Canvas
              // style={{ height: 500, width: 1500, backgroundColor: "gray" }}
              // shadows
              // dpr={[1, 2]}
              camera={{ fov: 35, near: 0.2, position: [0, 0.7, 0] }}
            >
              {/* <ambientLight intensity={0.3} color="#bdbdbd" /> */}
              {/* <spotLight
                  intensity={0.5}
                  angle={0.1}
                  penumbra={1}
                  position={[0, 0, 0]}
                  castShadow
                /> */}
              <Suspense fallback={null}>
                <Keyboard />
                <Environment preset="city" />
                {/* <ContactShadows
                    rotation-x={Math.PI / 2}
                    position={[0, -0.8, 0]}
                    opacity={0.25}
                    width={20}
                    height={20}
                    blur={1.5}
                    far={0.8}
                  /> */}
              </Suspense>
              <OrbitControls
                // minPolarAngle={Math.PI / 2}
                // maxPolarAngle={Math.PI / 2}
                enableZoom={true}
                enablePan={false}
              />
            </Canvas>

            <S.Box>박스</S.Box>
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
              <S.OptionLeft>
                <S.Option>
                  <S.OptionText>자판 색 변경</S.OptionText>
                  <S.OptionQty>4</S.OptionQty>
                  <S.OptionPrice>30,000</S.OptionPrice>
                </S.Option>
                <S.Option>
                  <div>스페이스바 색 변경</div>
                  <div>1</div>
                  <div>10,000</div>
                </S.Option>
                <S.Option>
                  <div>자판 색 변경</div>
                  <div>4</div>
                  <div>30,000</div>
                </S.Option>
                <S.Option>
                  <div>자판 색 변경</div>
                  <div>4</div>
                  <div>30,000</div>
                </S.Option>
                <S.PriceWrapper>
                  <S.PriceAdd>합계</S.PriceAdd>
                  <S.PriceNum>120,000원</S.PriceNum>
                </S.PriceWrapper>
              </S.OptionLeft>
            </S.OptionLeftWrapper>
            <S.OptionRight>
              <S.ButtonWrapper>
                <S.BasketButton>장바구니</S.BasketButton>
                <S.PaymentButton>바로 결제</S.PaymentButton>
              </S.ButtonWrapper>
            </S.OptionRight>
          </S.OptionWrapper>
        </div>
      </S.DetailWrapper>
      <ReviewDetail />
    </S.Wrapper>
  );
}
