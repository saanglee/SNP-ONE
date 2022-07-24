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
}

const FormCheckbox = ({ control, values, name, register }: CheckProps) => {
  return (
    <Box>
      {values.map((value: string, index: number) => (
        <Controller
          key={value + index}
          name={name}
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <>
              <StyledCheckInput
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

// eslint-disable-next-line no-lone-blocks
{
  /* <FormControl sx={{ mb: 3 }}>
  <FormLabel id="demo-controlled-radio-buttons-group">{title}</FormLabel>
  <Typography sx={{ fontSize: 14, color: "eee" }}>{subText}</Typography>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    row
    sx={{ marginTop: 2 }}
  >
    {values.map((value, idx) => (
      <Box key={value + idx}>
        <StyledCheckInput
          type="checkbox"
          value={value}
          id={value + idx}
          name={value}
        ></StyledCheckInput>
        <StyledLabel htmlFor={value + idx}>{value}</StyledLabel>
      </Box>
    ))}
  </RadioGroup>
  </FormControl> */
}
