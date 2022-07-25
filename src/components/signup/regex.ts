export const RegexName = {
  regex: /^[가-힣]{2,4}$/,
  message: "이름 형식이 올바르지 않습니다.",
};

export const RegexBirth = {
  regex:
    /^(19[0-9][0-9]|20\d{2})\.(0[0-9]|1[0-2])\.(0[1-9]|[1-2][0-9]|3[0-1])$/,
  message: "생년월일 형식이 올바르지 않습니다.",
};

export const RegexPhone = {
  regex: /[^0-9]/g,
  message: "핸드폰 번호 형식이 올바르지 않습니다.",
};

export const RegexEmail = {
  regex: /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/,
  message: "이메일 형식이 올바르지 않습니다.",
};
