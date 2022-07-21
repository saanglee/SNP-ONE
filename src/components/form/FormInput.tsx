import React from "react";
import { Input, InputLabel, TextField, FormControl } from "@mui/material";

interface InputProps {
  title: string;
  placeholder?: string;
}

const FormInput = ({ title, placeholder }: InputProps) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
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
        value={value}
        placeholder={placeholder}
      />
    </FormControl>
  );
};
export default FormInput;
