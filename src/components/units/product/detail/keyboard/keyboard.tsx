import { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";

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

export default function Keyboard(props: any) {
  const ref = useRef();
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/images/keyboard_fix.glb");

  // console.log(Object.entries(state.items).map((el) => el[1]));
  // console.log(Object.entries(state.items));

  // console.log(Object.entries(state.items).length);
  // console.log(materials.esc.color);

  let changeCount = 0;
  useEffect(() => {
    if (snap.items.SPACEBAR === "#ffffff") {
      changeCount + 1;
      console.log(changeCount);
    }
  }, [changeCount]);

  return (
    <>
      <group
        ref={ref}
        {...props}
        dispose={null}
        onClick={(e) => (
          e.stopPropagation(), (state.current = e.object.material.name)
        )}
        position={[-0.28, 0, -0.1]}
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
          position={[-0.28, 0, -0.1]}
          rotation={[0, 0, 0]}
          scale={[2, 2, 2]}
        />
      </group>
    </>
  );
}
