import { atom, selector } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { proxy } from "valtio";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isLoadedState = atom({
  key: "isLoadedState",
  default: true,
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const recentItemList = atom({
  key: "TodayItemList",
  default: false,
});

// 키보드 색상 state
export const keyboardState = proxy({
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
