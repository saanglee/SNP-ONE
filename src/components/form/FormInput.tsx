import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface InputProps {
  label: string;
  placeholder?: string;
  inputProps?: any;
  name?: any;
  control?: any;
  sx?: any;
  required?: any;
  pattern?: any;
  errorMessage?: string;
}

const FormInput = ({
  placeholder,
  inputProps,
  name,
  control,
  label,
  sx,
  required,
  pattern,
  errorMessage,
}: InputProps) => {
  return (
    <Controller
      name={name}
      defaultValue=""
      control={control}
      rules={{
        required,
        pattern,
      }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type="text"
          variant="standard"
          placeholder={placeholder}
          inputProps={inputProps}
          sx={sx}
          error={error !== undefined}
          helperText={
            error &&
            (error.type === "required" ? "필수 입력 사항입니다." : errorMessage)
          }
        />
      )}
    />
  );
};
export default FormInput;
