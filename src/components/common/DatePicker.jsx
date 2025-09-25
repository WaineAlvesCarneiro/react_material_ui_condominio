// src/components/common/DatePicker.jsx

import React from "react";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ptBR } from "@mui/x-date-pickers/locales";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);
dayjs.locale("pt-br");
dayjs.Ls["pt-br"].weekdaysShort = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
dayjs.Ls["pt-br"].weekdaysMin = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const DatePicker = ({ id, name, value, onChange, placeholder, required }) => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="pt-br"
      localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <MuiDatePicker
        label={placeholder}
        value={value ? dayjs(value) : null}
        onChange={(newValue) => {
          onChange(newValue ? newValue.toDate() : null);
        }}
        format="DD/MM/YYYY"
        slotProps={{
          textField: {
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ced4da" },
                "&:hover fieldset": { borderColor: "#007bff" },
                "&.Mui-focused fieldset": {
                  borderColor: "#007bff",
                  boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.25)"
                },
                "&.Mui-error fieldset": { borderColor: "#dc3545" },
              },
            },
            required,
            error: required && !value,
          },
          actionBar: {
            actions: ["clear", "today"],
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
