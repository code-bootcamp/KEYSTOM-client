import * as S from "./ProductDetail.styles";
import ReviewDetail from "./reviewDetail/ReviewList.container";

// 키보드에 필요한 import
import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF, OrbitControls } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import { snap, Expo } from "gsap";
import { motion } from "framer-motion";
import useMousePosition from "./useMousePosition";
import { useRecoilState } from "recoil";
import {
  recoilLength,
  recoilSpaceLength,
  recoilEnterLength,
  recoilEscLength,
} from "../../../commons/store";

// 키보드 색상 state
const state = proxy({
  current: null,
  items: {
    "'\"": "#ffffff",
    ",<": "#ffffff",
    "/?": "#ffffff",
    ";": "#ffffff",
    A: "#ffffff",
    ALT: "#ffffff",
    "ALT.001": "#ffffff",
    B: "#ffffff",
    C: "#ffffff",
    CAPSLOCK: "#ffffff",
    CTRL: "#ffffff",
    CTRL2: "#ffffff",
    D: "#ffffff",
    E: "#ffffff",
    ENTER: "#ffffff",
    F: "#ffffff",
    FN: "#ffffff",
    G: "#ffffff",
    H: "#ffffff",
    I: "#ffffff",
    J: "#ffffff",
    K: "#ffffff",
    L: "#ffffff",
    M: "#ffffff",
    "M.001": "#ffffff",
    N: "#ffffff",
    O: "#ffffff",
    P: "#ffffff",
    Q: "#ffffff",
    R: "#ffffff",
    S: "#ffffff",
    SHIFT1: "#ffffff",
    SHIFT2: "#ffffff",
    SPACEBAR: "#ffffff",
    T: "#ffffff",
    U: "#ffffff",
    V: "#ffffff",
    W: "#ffffff",
    WINDOWBUTTON2: "#ffffff",
    WINDOW_BUTTON: "#ffffff",
    X: "#ffffff",
    Y: "#ffffff",
    Z: "#ffffff",
    "[": "#ffffff",
    "]": "#ffffff",
    "`~": "#ffffff",
    backspace: "#ffffff",
    esc: "#ffffff",
    f1: "#ffffff",
    f2: "#ffffff",
    f3: "#ffffff",
    f4: "#ffffff",
    f5: "#ffffff",
    f6: "#ffffff",
    f7: "#ffffff",
    f8: "#ffffff",
    f9: "#ffffff",
    f10: "#ffffff",
    f11: "#ffffff",
    f12: "#ffffff",
    tAB: "#ffffff",
  },
});

// 스페이스바 제외 색상 바뀐거 찾는 함수
let length = 0;
let spacebarLength = 0;
let enterLength = 0;
let escLength = 0;

function ChangeKey() {
  const [recoilLength2, setRecoilLength] = useRecoilState(recoilLength);

  useEffect(() => {
    if (
      Object.values(state.items)[14] !== "#ffffff" ||
      Object.values(state.items)[33] !== "#ffffff" ||
      Object.values(state.items)[47] !== "#ffffff"
    ) {
      if (
        Object.values(state.items)[14] !== "#ffffff" &&
        Object.values(state.items)[33] !== "#ffffff" &&
        Object.values(state.items)[47] !== "#ffffff"
      ) {
        length =
          Object.values(state.items).filter((el) => el !== "#ffffff").length -
          3;

        setRecoilLength(
          Object.values(state.items).filter((el) => el !== "#ffffff").length - 3
        );
      } else if (
        Object.values(state.items)[14] !== "#ffffff" &&
        Object.values(state.items)[33] !== "#ffffff"
      ) {
        length =
          Object.values(state.items).filter((el) => el !== "#ffffff").length -
          2;
        setRecoilLength(
          Object.values(state.items).filter((el) => el !== "#ffffff").length - 2
        );
      } else if (
        Object.values(state.items)[33] !== "#ffffff" &&
        Object.values(state.items)[47] !== "#ffffff"
      ) {
        length =
          Object.values(state.items).filter((el) => el !== "#ffffff").length -
          2;
        setRecoilLength(
          Object.values(state.items).filter((el) => el !== "#ffffff").length - 2
        );
      } else if (
        Object.values(state.items)[14] !== "#ffffff" &&
        Object.values(state.items)[47] !== "#ffffff"
      ) {
        length =
          Object.values(state.items).filter((el) => el !== "#ffffff").length -
          2;
        setRecoilLength(
          Object.values(state.items).filter((el) => el !== "#ffffff").length - 2
        );
      } else {
        length =
          Object.values(state.items).filter((el) => el !== "#ffffff").length -
          1;
        setRecoilLength(
          Object.values(state.items).filter((el) => el !== "#ffffff").length - 1
        );
      }
    } else {
      length = Object.values(state.items).filter(
        (el) => el !== "#ffffff"
      ).length;
      setRecoilLength(
        Object.values(state.items).filter((el) => el !== "#ffffff").length
      );
    }
  });

  return <div>{length}</div>;
}

// esc 색상 바꼈을 때
function EscChangeKey() {
  const [recoilEscLength2, setRecoilEscLength] =
    useRecoilState(recoilEscLength);

  useEffect(() => {
    escLength = Object.values(state.items)[47] !== "#ffffff" ? 1 : 0;
    setRecoilEscLength(Object.values(state.items)[47] !== "#ffffff" ? 1 : 0);
  });

  return <div>{escLength}</div>;
}

// 스페이스바 색상 바꼈을 때
function SpaceBarChangeKey() {
  const [recoilSpaceLength2, setRecoilSpaceLength] =
    useRecoilState(recoilSpaceLength);
  useEffect(() => {
    spacebarLength = Object.values(state.items)[33] !== "#ffffff" ? 1 : 0;
    setRecoilSpaceLength(Object.values(state.items)[33] !== "#ffffff" ? 1 : 0);
  });

  return <div>{spacebarLength}</div>;
}

// 엔터 색상 바꼈을 때
function EnterChangeKey() {
  const [recoilEnterLength2, setRecoilEnterLength] =
    useRecoilState(recoilEnterLength);
  useEffect(() => {
    enterLength = Object.values(state.items)[14] !== "#ffffff" ? 1 : 0;
    setRecoilEnterLength(Object.values(state.items)[14] !== "#ffffff" ? 1 : 0);
  });

  return <div>{enterLength}</div>;
}

// 키보드 3d 구현 함수
function Keyboard(props: any) {
  const ref = useRef();
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/images/keyboard_fix.glb");

  return (
    <>
      <group
        ref={ref}
        {...props}
        dispose={null}
        onClick={(e) => (
          e.stopPropagation(), (state.current = e.object.material.name)
        )}
        position={[-0.26, 0, -0.1]}
        rotation={[0, 0, 0]}
        scale={[2, 2, 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.esc_Plane.geometry}
          material={materials.esc}
          material-color={snap.items.esc}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f1_Plane001.geometry}
          material={materials.f1}
          material-color={snap.items.f1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f2_Plane002.geometry}
          material={materials.f2}
          material-color={snap.items.f2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f3_Plane003.geometry}
          material={materials.f3}
          material-color={snap.items.f3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f4_Plane004.geometry}
          material={materials.f4}
          material-color={snap.items.f4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f5_Plane005.geometry}
          material={materials.f5}
          material-color={snap.items.f5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f6_Plane006.geometry}
          material={materials.f6}
          material-color={snap.items.f6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f7_Plane007.geometry}
          material={materials.f7}
          material-color={snap.items.f7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f8_Plane008.geometry}
          material={materials.f8}
          material-color={snap.items.f8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f9_Plane009.geometry}
          material={materials.f9}
          material-color={snap.items.f9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f10_Plane010.geometry}
          material={materials.f10}
          material-color={snap.items.f10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f11_Plane011.geometry}
          material={materials.f11}
          material-color={snap.items.f11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f12_Plane012.geometry}
          material={materials.f12}
          material-color={snap.items.f12}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.backspace_Plane013.geometry}
          material={materials.backspace}
          material-color={snap.items.backspace}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Q_Plane025.geometry}
          material={materials.Q}
          material-color={snap.items.Q}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.W_Plane024.geometry}
          material={materials.W}
          material-color={snap.items.W}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.E_Plane023.geometry}
          material={materials.E}
          material-color={snap.items.E}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.R_Plane022.geometry}
          material={materials.R}
          material-color={snap.items.R}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.T_Plane021.geometry}
          material={materials.T}
          material-color={snap.items.T}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Y_Plane020.geometry}
          material={materials.Y}
          material-color={snap.items.Y}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.U_Plane019.geometry}
          material={materials.U}
          material-color={snap.items.U}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.I_Plane018.geometry}
          material={materials.I}
          material-color={snap.items.I}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.O_Plane017.geometry}
          material={materials.O}
          material-color={snap.items.O}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.P_Plane016.geometry}
          material={materials.P}
          material-color={snap.items.P}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._Plane015.geometry}
          material={materials["["]}
          material-color={snap.items["["]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._Plane014.geometry}
          material={materials["]"]}
          material-color={snap.items["]"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["`~_Plane027"].geometry}
          material={materials["`~"]}
          material-color={snap.items["`~"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tAB_Plane028.geometry}
          material={materials.tAB}
          material-color={snap.items.tAB}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["'\"_Plane039"].geometry}
          material={materials["'\""]}
          material-color={snap.items["'\""]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.D_Plane038.geometry}
          material={materials.D}
          material-color={snap.items.D}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.K_Plane037.geometry}
          material={materials.K}
          material-color={snap.items.K}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Plane036.geometry}
          material={materials.L}
          material-color={snap.items.L}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes[";_Plane035"].geometry}
          material={materials[";:"]}
          material-color={snap.items[";:"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.A_Plane034.geometry}
          material={materials.A}
          material-color={snap.items.A}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.F_Plane033.geometry}
          material={materials.F}
          material-color={snap.items.F}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Plane032.geometry}
          material={materials.G}
          material-color={snap.items.G}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.J_Plane031.geometry}
          material={materials.J}
          material-color={snap.items.J}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.S_Plane030.geometry}
          material={materials.S}
          material-color={snap.items.S}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.H_Plane029.geometry}
          material={materials.H}
          material-color={snap.items.H}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CAPSLOCK_Plane040.geometry}
          material={materials.CAPSLOCK}
          material-color={snap.items.CAPSLOCK}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ENTER_Plane041.geometry}
          material={materials.ENTER}
          material-color={snap.items.ENTER}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["?_Plane051"].geometry}
          material={materials["/?"]}
          material-color={snap.items["/?"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Z_Plane050.geometry}
          material={materials.Z}
          material-color={snap.items.Z}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.C_Plane049.geometry}
          material={materials.C}
          material-color={snap.items.C}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.V_Plane048.geometry}
          material={materials.V}
          material-color={snap.items.V}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.B_Plane047.geometry}
          material={materials.B}
          material-color={snap.items.B}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.N_Plane046.geometry}
          material={materials.N}
          material-color={snap.items.N}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.M_Plane045.geometry}
          material={materials.M}
          material-color={snap.items.M}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes[",<_Plane044"].geometry}
          material={materials[",<"]}
          material-color={snap.items[",<"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes[">_Plane043"].geometry}
          material={materials["M.001"]}
          material-color={snap.items["M.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.X_Plane042.geometry}
          material={materials.X}
          material-color={snap.items.X}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SHIFT1_Plane052.geometry}
          material={materials.SHIFT1}
          material-color={snap.items.SHIFT1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SHIFT2_Plane053.geometry}
          material={materials.SHIFT2}
          material-color={snap.items.SHIFT2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPACEBAR_Plane054.geometry}
          material={materials.SPACEBAR}
          material-color={snap.items.SPACEBAR}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CTRL_Plane055.geometry}
          material={materials.CTRL}
          material-color={snap.items.CTRL}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WINDOW_BUTTON_Plane056.geometry}
          material={materials.WINDOW_BUTTON}
          material-color={snap.items.WINDOW_BUTTON}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ALT001_Plane057.geometry}
          material={materials["ALT.001"]}
          material-color={snap.items["ALT.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WINDOWBUTTON2_Plane060.geometry}
          material={materials.WINDOWBUTTON2}
          material-color={snap.items.WINDOWBUTTON2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FN_Plane059.geometry}
          material={materials.FN}
          material-color={snap.items.FN}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CTRL2_Plane058.geometry}
          material={materials.CTRL2}
          material-color={snap.items.CTRL2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ALT_Plane061.geometry}
          material={materials.ALT}
          material-color={snap.items.ALT}
        />
      </group>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          position={[-0.26, 0, -0.1]}
          rotation={[0, 0, 0]}
          scale={[2, 2, 2]}
        />
      </group>
    </>
  );
}

function Picker() {
  const snap = useSnapshot(state);

  return (
    <S.HexColorPickerWrapper>
      <S.HexColorPick
        className="picker"
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current] = color)}
      />

      <S.HexColorCodeWrapper>
        <S.HexColorCode>Color Code</S.HexColorCode>
        <S.HexColorPickInput
          color={snap.items[snap.current]}
          onChange={(color) => (state.items[snap.current] = color)}
        />
      </S.HexColorCodeWrapper>
    </S.HexColorPickerWrapper>
  );
}

export default function ProductDetailPresenter(props: any) {
  const snap = useSnapshot(state);

  const [seeImageHover, setSeeImageHover] = useState(false);

  let list = useRef();
  const { x, y } = useMousePosition();

  const [listPosition, setListPosition] = useState({
    top: -100,
    left: 130,
  });

  useEffect(() => {
    setListPosition({
      top: list?.current?.getBoundingClientRect().top,
      left: list?.current?.getBoundingClientRect().left,
    });
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.ProductWrapper>
          <S.ProductLeftWrapper>
            <S.TitleWrapper>
              <S.ProductTitle>
                {props.data?.fetchProduct?.title}
              </S.ProductTitle>
              <S.SeeIcon
                src="/images/detail/see.png"
                onMouseOver={() => setSeeImageHover(true)}
                onMouseOut={() => setSeeImageHover(false)}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: seeImageHover ? 1 : 0,
                  x: x - listPosition.left,
                  y: y - listPosition.top,
                }}
                transition={{
                  ease: Expo.easeOut,
                  duration: 0,
                }}
              >
                <img
                  src={`https://storage.googleapis.com/${props.data?.fetchProduct?.thumbnail}`}
                  style={{
                    position: "absolute",
                    width: "400px",
                    zIndex: "100",
                    borderRadius:"10px"
                  }}
                />
              </motion.div>
            </S.TitleWrapper>
            <S.ProductSelectWrapper>
              <S.TwoDColorWrapper>
                <S.PickerWrapper>
                  <Picker />
                </S.PickerWrapper>
              </S.TwoDColorWrapper>
              <S.ThreeDWrapper>
                <Canvas
                  style={{ width: "950px", backgroundColor: "none" }}
                  camera={{
                    fov: 35,
                    near: 0.2,
                    position: [0, 0.7, 0.6],
                  }}
                >
                  <Suspense fallback={null}>
                    <Keyboard />
                    <Environment preset="city" />
                  </Suspense>
                  <OrbitControls enableZoom={true} enablePan={false} />
                </Canvas>
              </S.ThreeDWrapper>
            </S.ProductSelectWrapper>
          </S.ProductLeftWrapper>
          <S.PriceWrapper>
            <S.Options>Options</S.Options>
            <S.OptionTableWrapper>
              <S.OptionHeader>
                <S.OptionName>Option</S.OptionName>
                <S.OptionCount>Qty</S.OptionCount>
                <S.OptionPrice>Price</S.OptionPrice>
              </S.OptionHeader>
              <S.OptionLine>
                <S.Option1Wrapper>
                  <S.Option1Name>Origin</S.Option1Name>
                  <S.Option1Count>1</S.Option1Count>
                  <S.Option1Price>
                    {props.data?.fetchProduct?.price}
                  </S.Option1Price>
                </S.Option1Wrapper>
                <S.Option1Wrapper>
                  <S.Option1Name>ESC</S.Option1Name>
                  <S.Option1Count>
                    <EscChangeKey />
                  </S.Option1Count>
                  <S.Option1Price>{escLength * 7000}</S.Option1Price>
                </S.Option1Wrapper>
                <S.Option1Wrapper>
                  <S.Option1Name>Spacebar</S.Option1Name>
                  <S.Option1Count>
                    <SpaceBarChangeKey />
                  </S.Option1Count>
                  <S.Option1Price>{spacebarLength * 8000}</S.Option1Price>
                </S.Option1Wrapper>
                <S.Option1Wrapper>
                  <S.Option1Name>Enter</S.Option1Name>
                  <S.Option1Count>
                    <EnterChangeKey />
                  </S.Option1Count>
                  <S.Option1Price>{enterLength * 10000}</S.Option1Price>
                </S.Option1Wrapper>
                <S.Option1Wrapper>
                  <S.Option1Name>KeyPad</S.Option1Name>
                  <S.Option1Count>
                    <ChangeKey />
                  </S.Option1Count>
                  <S.Option1Price>{length * 6000}</S.Option1Price>
                </S.Option1Wrapper>
                <S.TotalPriceWrapper>
                  <S.TotalAccount>
                    {`${
                      props.data?.fetchProduct?.price +
                      length * 6000 +
                      escLength * 7000 +
                      spacebarLength * 8000 +
                      enterLength * 10000
                    } 
                 `}
                  </S.TotalAccount>
                </S.TotalPriceWrapper>
              </S.OptionLine>
            </S.OptionTableWrapper>
              {/* <S.CouponApplyButton onClick={props.onClickCouponApply}>
                쿠폰적용하기
              </S.CouponApplyButton> */}
            <S.ButtonsWrapper>
              <S.GetCouponButton onClick={props.onClickGetCoupon}>
                Get Coupons
                <S.GetCouponImg  src="/images/coupon/get-coupon.png"/>
              </S.GetCouponButton>
              <S.PayNowButton
                onClick={props.onClickPayNow}
                id={props.data?.fetchProduct?.id}
              >
                Pay Now
              </S.PayNowButton>
              <S.AddToCartButton
                onClick={
                  props.isBasket
                    ? props.onClickDelete(props.data?.fetchProduct)
                    : props.onClickBasket(props.data?.fetchProduct)
                }
              >
                {props.isBasket ? "Add Cancel" : "Add to Cart"}
              </S.AddToCartButton>
         
            </S.ButtonsWrapper>
          </S.PriceWrapper>
        </S.ProductWrapper>
      </S.Wrapper>
      <ReviewDetail />
    </>
  );
}
