import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";

export default function DateInput({ name, control, label }) {
  const formattedDate = dayjs("2000-05-23");

  return (
    <>
      <Controller
        name={`${name}-picker`}
        control={control}
        defaultValue={null}
        rules={{
          required: {
            value: true,
            message: `Please select ${label}`,
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                defaultValue={formattedDate}
                {...field}
                label={label}
                slotProps={{
                  textField: {
                    helperText: error?.message,
                    error: !!error?.message,
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        )}
      />
    </>
  );
}
