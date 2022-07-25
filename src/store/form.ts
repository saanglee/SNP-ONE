import { atom } from "recoil";

export const isModalState = atom({
  key: "isModal",
  default: false,
});

export const ResidenceValue = atom({
  key: "ResidenceValue",
  default: "",
});

export const FormData = atom({
  key: "FormData",
  default: {},
});
