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
  values: string[];
  control: any;
  name: string;
}

const FormRadio = ({ control, name, values }: RadioProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={values[0]}
      render={({ field }) => (
        <RadioGroup {...field}>
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
