import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller } from "react-hook-form";

export default function SelectInput({
  label,
  name,
  options,
  select,
  handleChange,
  control,
}) {
  const filedName = `${label}-select`;
  const fieldLabel = `${label}-label`;

  return (
    <>
      <Controller
        name={filedName}
        control={control}
        defaultValue={""}
        rules={{
          required: {
            value: true,
            message: `Please select ${name}`,
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <FormControl fullWidth error={!!error?.message}>
            <InputLabel id={fieldLabel}>{name}</InputLabel>
            <Select
              labelId={fieldLabel}
              id={label}
              value={select}
              label={name}
              onChange={handleChange}
              {...field}
            >
              <MenuItem value="">None</MenuItem>
              {options.map((option) => {
                return (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText>{error?.message}</FormHelperText>
          </FormControl>
        )}
      />
    </>
  );
}
