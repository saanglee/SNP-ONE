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
import { Controller } from "react-hook-form";

interface RadioProps {
  title: string;
  subText?: string;
  values: string[];
  control: any;
  name: string;
}

const FormRadio = ({ control, name, title, subText, values }: RadioProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <RadioGroup>
          {values.map((value, idx) => (
            <FormControlLabel
              key={value + idx}
              value={value}
              control={<Radio />}
              label={value}
            />
          ))}
        </RadioGroup>
      )}
    />
  );
};
export default FormRadio;

// eslint-disable-next-line no-lone-blocks
{
  /* <FormControl sx={{ mb: 1, ...sx }}>
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
    </FormControl> */
}
