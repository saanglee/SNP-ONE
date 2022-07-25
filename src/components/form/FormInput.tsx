import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface InputProps {
  title: string;
  placeholder?: string;
  inputProps?: any;
  name?: any;
  control?: any;
  sx?: any;
}

const FormInput = ({
  placeholder,
  inputProps,
  name,
  control,
  title,
  sx,
}: InputProps) => {
  const [value, setValue] = React.useState("");
  const inputsRef = React.useRef<HTMLInputElement | any>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value);
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Controller
      name={name}
      defaultValue=""
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={title}
          type="text"
          variant="standard"
          placeholder={placeholder}
          inputProps={inputProps}
          sx={sx}
        />
      )}
    />
  );
};
export default FormInput;
