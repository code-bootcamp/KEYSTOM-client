import { atom, selector } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
// import { proxy } from "valtio";

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
