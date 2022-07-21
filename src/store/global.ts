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

// export const overallData = atom<OverallItems[]>({
//   key: "overallData",
//   default: [],
// });

// export const platformData = atom<PlatformItems[]>({
//   key: "platformData",
//   default: [],
// });

export const typesData = atom({
  key: "typesData",
  default: { type: "Line" },
});

export const loadedStatus = atom({
  key: "loadedStatus",
  default: false,
});
