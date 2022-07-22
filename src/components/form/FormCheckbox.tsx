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
  FormGroup,
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
      >
        {values.map((value, idx) => (
          <FormGroup key={value + idx}>
            <Button variant="outlined" size="small">
              {value}
            </Button>
          </FormGroup>
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default FormCheckbox;
