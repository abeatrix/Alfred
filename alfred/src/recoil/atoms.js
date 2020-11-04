import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: null,
});

export const userIDState = atom({
  key: "userIDState",
  default: null,
});

export const userPortState = atom({
  key: "userPortState",
  default: null,
});

export const userPortItemState = atom({
  key: "userPortItemState",
  default: null,
});

export const userPortListState = atom({
  key: "userPortListState",
  default: [],
});

export const userPortStatusState = atom({
  key: "userPortStatusState",
  default: null,
});
