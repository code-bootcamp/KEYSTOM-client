import { atom, selector } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
// import { proxy } from "valtio";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isLoadedState = atom({
  key: "isLoadedState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const paymentProductId = atom({
  key: "paymentProductId",
  default: {
    productId: "",
  },
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

// export const recentItemList = atom({
//   key: "TodayItemList",
//   default: false,
// });

export let recoilLength = atom({
  key: "recoilLength",
  default: 0,
});

export let recoilSpaceLength = atom({
  key: "recoilSpaceLength",
  default: 0,
});

export let recoilEnterLength = atom({
  key: "recoilEnterLength",
  default: 0,
});

export let recoilEscLength = atom({
  key: "recoilEscLength",
  default: 0,
});
