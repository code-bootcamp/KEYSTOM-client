import { atom, selector } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

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

export const recoilLength = atom({
    key: "recoilLength",
    default: 0,
});

export const recoilSpaceLength = atom({
    key: "recoilSpaceLength",
    default: 0,
});

export const recoilEnterLength = atom({
    key: "recoilEnterLength",
    default: 0,
});

export const recoilEscLength = atom({
    key: "recoilEscLength",
    default: 0,
});
