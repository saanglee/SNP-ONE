import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Typography,
  styled,
  Box,
} from "@mui/material";

interface CheckProps {
  type: string;
  title: string;
  subText?: string;
  values: string[];
}

const FormCheckbox = ({ title, subText, values }: CheckProps) => {
  return (
    <FormControl sx={{ mb: 3 }}>
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
    </FormControl>
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
