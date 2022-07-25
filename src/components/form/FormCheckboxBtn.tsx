import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  Typography,
  styled,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Controller } from "react-hook-form";

interface CheckProps {
  name: string;
  values: string[];
  control: any;
  register: any;
  required?: any;
}

const FormCheckbox = ({
  control,
  values,
  name,
  register,
  required,
}: CheckProps) => {
  return (
    <Box>
      {values.map((value: string, index: number) => (
        <Controller
          key={value + index}
          name={name}
          control={control}
          defaultValue={false}
          rules={{
            required: required,
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <StyledCheckInput
                {...field}
                type="checkbox"
                name={name}
                id={value}
                value={value}
                {...register(name)}
              />
              <StyledLabel htmlFor={value}>{value}</StyledLabel>
            </>
          )}
        />
      ))}
    </Box>
  );
};
export default FormCheckbox;

const StyledCheckInput = styled("input")(({ theme }) => ({
  position: "absolute",
  visibility: "hidden",
  "&:checked + label": {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const StyledLabel = styled("label")(({ theme }) => ({
  display: "inline-block",
  padding: "7px 12px",
  height: 15,
  marginRight: 10,
  marginBottom: 10,
  fontSize: 14,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  borderRadius: "20px",
  cursor: "pointer",
}));
