import React from "react";
import { Input, InputLabel, TextField, FormControl } from "@mui/material";

interface InputProps {
  title: string;
  placeholder?: string;
  maxRows?: number;
  onKeyUp?: any;
  onChange?: any;
}

const FormInput = ({ title, placeholder, maxRows }: InputProps) => {
  const [value, setValue] = React.useState("");
  const regexp = {
    korean: /[a-z0-9]|[ [\]{}()<>?|`~!@#$%^&*-_+=,.;:"'\\]/g,
    email: /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/,
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (title === "이름") {
      if (regexp.korean.test(event.target.value)) {
        event.target.value = event.target.value.replace(regexp.korean, "");
      }
    } else if (title === "생년월일" || title === "연락처") {
      event.target.value = event.target.value
        .replace(/[^0-9.]/g, "")
        .replace(/(\..*)\./g, "$1");
    }
  };

  return (
    <FormControl sx={{ mb: 3 }}>
      <TextField
        id="standard-password-input"
        label={title}
        type="text"
        autoComplete="current-password"
        variant="standard"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        value={value}
        placeholder={placeholder}
        maxRows={maxRows}
      />
    </FormControl>
  );
};
export default FormInput;
