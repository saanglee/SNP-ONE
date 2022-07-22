import React from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Button,
  Checkbox,
} from "@mui/material";

interface RadioProps {
  type: string;
  title: string;
  subText?: string;
  values: string[];
  sx?: {};
}

const FormRadio = ({ title, subText, values, sx }: RadioProps) => {
  return (
    <FormControl sx={{ mb: 1, ...sx }}>
      <FormLabel id="demo-controlled-radio-buttons-group">{title}</FormLabel>
      {subText && (
        <Typography sx={{ fontSize: 14, color: "eee" }}>{subText}</Typography>
      )}
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        row
        defaultValue="female"
      >
        {values.map((value, idx) => (
          <FormControlLabel
            key={value + idx}
            value={value}
            control={<Radio />}
            label={value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default FormRadio;
