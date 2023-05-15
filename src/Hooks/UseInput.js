import { useState } from "react";
export const UseInput = (initialValue, type, validation) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const validate = () => {
    if (type === "email") {
      const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailReg.test(value)) {
        setError("Email должен содержать значок @");
        return false;
      }
    }
    if (type === "password") {
      const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

      if (!emailReg.test(value)) {
        setError("Пароль должен содержать не менее 8 символов");
        return false;
      }
    }

    if (type === "date") {
      const dateReg = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateReg.test(value)) {
        setError("Входные данные пусты");
        return false;
      }
    }

    if (validation && !validation(value)) {
      setError("Invalid value");
      return false;
    }

    setError(null);
    return true;
  };

  return {
    validate,
    value,
    error,
    onchange: handleChange,
  };
};
