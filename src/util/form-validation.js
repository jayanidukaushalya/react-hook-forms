const usernameValidation = {
  required: {
    value: true,
    message: "Username is required !",
  },
  minLength: {
    value: 5,
    message: "Username must be at least 5 characters",
  },
  maxLength: {
    value: 20,
    message: "Username must be lower than 20 characters",
  },
};

const emailValidation = {
  required: {
    value: true,
    message: "Email is required !",
  },
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Email is not valid",
  },
};

const mobileValidation = {
  required: {
    value: true,
    message: "Mobile Number is required !",
  },
  pattern: {
    value: /^\d{10}$/,
    message: "Mobile Number must have 10 digits !",
  },
};

export { usernameValidation, emailValidation, mobileValidation };
