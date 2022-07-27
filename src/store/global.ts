import { atom } from "recoil";

export const firstData = atom({
  key: "firstData",
  default: "2022-02-01",
});

export const startData = atom({
  key: "startData",
  default: "2022-02-01",
});

export const endData = atom({
  key: "endData",
  default: "2022-02-05",
});

export const lastData = atom({
  key: "lastData",
  default: "2022-04-20",
});

export const typesData = atom({
  key: "typesData",
  default: { type: "Line" },
});

export const loadedStatus = atom({
  key: "loadedStatus",
  default: false,
});

export const activeStatus = atom({
  key: "activeStatus",
  default: false,
});

export const openStatus = atom({
  key: "openStatus",
  default: false,
});
