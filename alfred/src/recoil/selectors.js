import { selector } from "recoil";
import { isAuth } from "../config/auth";
import { userState, userPortStatusState, userPortListState } from "./atoms";

export const loggedInState = selector({
  key: "loggedInState",
  get: ({ get }) => {
    const user = get(userState);
    if (user) return true;
    return false;
  },
});

export const userIdState = selector({
  key: "userIdState",
  get: ({ get }) => {
    const user = get(userState);
    const userPortList = get(userPortListState);
    const userPortStatus = get(userPortStatusState)
    if (userPortList) return userPortList ;
    return false;
  },
});


export const userInfoState = selector({
  key: "userInfoState",
  get: ({ get }) => {
    const user = get(userState);
    if (user) return user ;
    return user;
  },
});
