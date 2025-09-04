import React, { ChangeEventHandler, InputHTMLAttributes } from "react";

export interface InputProps {
  value: string;
  placeholder?: string;
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
}

export function Input(props: InputProps) {
  const { value, placeholder, type, onChange, errorMessage } = props;

  return (
    <>
      <input
        type={type}
        placeholder={placeholder || ""}
        value={value}
        onChange={onChange}
        className={
          errorMessage
            ? "input-error"
            : value
            ? "input-success"
            : "input-default"
        }
      />
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}
