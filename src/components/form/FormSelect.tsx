import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
} from "@mui/material";
import { Controller } from "react-hook-form";

interface SelectProps {
  label: string;
  name: string;
  options: string[] | undefined;
  control: any;
  sx?: object;
  onBlur?: any;
}

const FormSelect = ({
  label,
  name,
  options,
  control,
  sx,
  onBlur,
}: SelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Select {...field} onBlur={onBlur} sx={sx}>
          {options?.map((option, index) => (
            <MenuItem key={option + index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
};

export default FormSelect;
