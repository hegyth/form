import { FormDataErrorMessagesType, FormDataType } from "./types";

export const validateFormData = (
  formData: FormDataType,
  setErrorMessage: React.Dispatch<
    React.SetStateAction<FormDataErrorMessagesType>
  >
): boolean => {
  const errors: FormDataErrorMessagesType = {};

  setErrorMessage({});

  const fields: Array<{
    key: keyof FormDataErrorMessagesType;
    message: string;
  }> = [
    { key: "firstName", message: "Поле является обязательным" },
    { key: "lastName", message: "Поле является обязательным" },
    { key: "phoneNumber", message: "Поле является обязательным" },
    { key: "email", message: "Поле является обязательным" },
  ];

  fields.forEach(({ key, message }) => {
    if (!formData[key]) {
      errors[key] = message;
    }
  });

  if (formData.email && !validateEmail(formData.email)) {
    errors.email = "Введен некорректный адрес почты";
  }

  if (formData.phoneNumber && !validatePhoneNumber(formData.phoneNumber)) {
    errors.phoneNumber = "Введен некорректный номер телефона";
  }

  if (Object.keys(errors).length > 0) {
    setErrorMessage((prev) => ({ ...prev, ...errors }));
    return false;
  }

  return true;
};

const validatePhoneNumber = (phoneNumber: string) => {
  const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
  return phoneRegex.test(phoneNumber) && phoneNumber.length == 18;
};

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
