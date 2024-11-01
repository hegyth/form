import { useState } from "react";
import "./styles.scss";
import { FormDataErrorMessagesType, FormDataType } from "./types";
import { validateFormData } from "./utils";
import { ConfigProvider, DatePicker, Select } from "antd";
import ruRU from "antd/lib/locale/ru_RU";
import InputMask from "react-input-mask";

export default function App() {
  const [formData, setFormData] = useState<FormDataType>({});
  const [errorMessages, setErrorMessages] = useState<FormDataErrorMessagesType>(
    {}
  );

  const submitHandle = () => {
    if (validateFormData(formData, setErrorMessages)) {
      alert("Форма валидна, отправляется запрос");
    }
  };

  const setFormDataHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div className="registration-form">
      <h2>Информация о сотруднике</h2>
      <div className="grid-form">
        <div className="form-group">
          <input
            value={formData.lastName}
            className={errorMessages.lastName ? "error-border" : ""}
            onChange={setFormDataHandle}
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Фамилия"
          />
          {<span className="error-message">{errorMessages.lastName}</span>}
        </div>
        <div className="form-group">
          <input
            value={formData.firstName}
            className={errorMessages.firstName ? "error-border" : ""}
            onChange={setFormDataHandle}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Имя"
          />
          {<span className="error-message">{errorMessages.firstName}</span>}
        </div>
        <div className="form-group">
          <input
            value={formData.middleName}
            onChange={setFormDataHandle}
            type="text"
            id="middleName"
            name="middleName"
            placeholder="Отчество"
          />
        </div>
        <div className="form-group">
          <ConfigProvider
            theme={{
              components: {
                Select: {
                  activeBorderColor: "#505050",
                  activeOutlineColor: "none",
                  hoverBorderColor: "#505050",
                  optionSelectedBg: "#45a049",
                  optionSelectedColor: "white",
                  colorBgContainer: "#F0F0F0",
                  colorTextPlaceholder: "#757575",
                  colorBorder: "#F0F0F0",
                  borderRadius: 4,
                },
              },
            }}
          >
            <Select
              value={formData.sex}
              placeholder="Пол"
              onChange={(value) =>
                setFormData((prev) => {
                  return {
                    ...prev,
                    sex: value,
                  };
                })
              }
              options={[
                { value: "Мужской", label: "Мужской" },
                { value: "Женский", label: "Женский" },
              ]}
            />
          </ConfigProvider>
        </div>
        <div className="form-group">
          <ConfigProvider
            locale={ruRU}
            theme={{
              components: {
                DatePicker: {
                  activeBg: "white",
                  activeBorderColor: "#505050",
                  hoverBorderColor: "#505050",
                  activeShadow: "none",
                  cellRangeBorderColor: "red",
                  colorPrimary: "#45a049",
                  colorBgContainer: "#F0F0F0",
                  colorTextPlaceholder: "#757575",
                  colorBorder: "#F0F0F0",
                  borderRadius: 4,
                },
              },
            }}
          >
            <DatePicker
              value={formData.birthDate}
              placeholder="Дата рождения"
              onChange={(value) =>
                setFormData((prev) => {
                  return {
                    ...prev,
                    birthDate: value,
                  };
                })
              }
            />
          </ConfigProvider>
        </div>
        <div className="form-group">
          <InputMask
            value={formData.phoneNumber}
            mask="+7 (999) 999-99-99"
            className={errorMessages.phoneNumber ? "error-border" : ""}
            onChange={setFormDataHandle}
            type="tel"
            id="phone"
            name="phoneNumber"
            placeholder="Мобильный телефон"
          />
          {<span className="error-message">{errorMessages.phoneNumber}</span>}
        </div>
        <div className="form-group">
          <input
            value={formData.email}
            className={errorMessages.email ? "error-border" : ""}
            onChange={setFormDataHandle}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
          {<span className="error-message">{errorMessages.email}</span>}
        </div>
        <div className="form-group">
          <input
            value={formData.address}
            onChange={setFormDataHandle}
            type="text"
            id="address"
            name="address"
            placeholder="Адрес постоянной регистрации"
          />
        </div>
        <div className="form-group">
          <input
            value={formData.employer}
            onChange={setFormDataHandle}
            type="text"
            id="employer"
            name="employer"
            placeholder="Название работодателя"
          />
        </div>
        <button onClick={submitHandle}>Сохранить</button>
      </div>
    </div>
  );
}
