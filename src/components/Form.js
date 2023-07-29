import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import {
  emailValidation,
  mobileValidation,
  socialValidations,
  usernameValidation,
} from "../util/form-validation";
import {
  Alert,
  Box,
  Button,
  Collapse,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DateInput from "./DateInput";
import { useEffect, useState } from "react";
import SelectInput from "./SelectInput";
import CloseIcon from "@mui/icons-material/Close";

export default function Form() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isLoading, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      username: "jayanidu_kaushalya",
      email: "jayanidukaushalya@gmail.com",
      mobile: "0779474416",
      social: {
        twitter: "",
        facebook: "",
      },
    },
    mode: "onBlur",
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      setOpen(true);
      reset();
      setTimeout(() => {
        setOpen(false);
        console.log("timeout");
      }, 3000);
    }
  }, [isSubmitSuccessful, reset]);

  const options = [
    {
      value: 1,
      label: "Male",
    },
    {
      value: 2,
      label: "Female",
    },
    {
      value: 3,
      label: "Other",
    },
  ];

  const [select, setSelect] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const propsToPassOnSelect = {
    label: "gender",
    name: "Gender",
    options,
    select,
    handleChange,
    control,
    errors,
  };

  const propsToPassOnDateInput = {
    name: "dob",
    label: "Date of Birth",
    control,
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 10,
        borderRadius: 5,
      }}
    >
      {/* <h1>Form Render Count({count / 2})</h1> */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={3} width={"25vw"}>
          <Typography
            variant="h5"
            component="h1"
            textAlign={"center"}
            fontWeight={700}
            textTransform={"uppercase"}
          >
            Register
          </Typography>
          <Box>
            <TextField
              fullWidth
              error={!!errors.username}
              helperText={errors.username?.message}
              variant="outlined"
              label="Username"
              id="username"
              {...register("username", usernameValidation)}
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
              variant="outlined"
              label="Email"
              id="email"
              {...register("email", emailValidation)}
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              error={!!errors.mobile}
              helperText={errors.mobile?.message}
              variant="outlined"
              label="Mobile Number"
              id="mobile"
              {...register("mobile", mobileValidation)}
            />
          </Box>
          <Box>
            <DateInput {...propsToPassOnDateInput} />
          </Box>
          <Box>
            <SelectInput {...propsToPassOnSelect} />
          </Box>
          <Box>
            <TextField
              fullWidth
              error={!!errors.social?.twitter}
              helperText={errors.social?.twitter?.message}
              variant="outlined"
              label="Twitter Link"
              id="twitter"
              {...register("social.twitter", socialValidations)}
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              error={!!errors.social?.facebook}
              helperText={errors.social?.facebook?.message}
              variant="outlined"
              label="Facebook Link"
              id="facebook"
              {...register("social.facebook", socialValidations)}
            />
          </Box>
          <Button
            type="submit"
            disabled={!isDirty || !isValid || isLoading}
            variant="contained"
          >
            Register
          </Button>
        </Stack>
      </form>

      <Collapse
        sx={{ position: "fixed", left: "15px", bottom: "20px", zIndex: 1000 }}
        in={open}
      >
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Form submitted successfully !
        </Alert>
      </Collapse>
      <DevTool control={control} />
    </Paper>
  );
}
