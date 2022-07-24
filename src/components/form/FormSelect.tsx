import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
} from "@mui/material";

interface SelectProps {
  label: string;
  name: string;
  id: string;
  options?: string[];
  onChange: any;
  value?: string | HTMLSelectElement | undefined;
}

const FormSelect = ({
  label,
  name,
  id,
  options,
  onChange,
  value,
}: SelectProps) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Select
        label={label}
        input={<OutlinedInput name={name} id={id} />}
        inputProps={{
          id: `${id}-select`,
        }}
        onChange={onChange}
        value={value}
      >
        {options?.map((option, index) => (
          <MenuItem key={option + index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormSelect;
