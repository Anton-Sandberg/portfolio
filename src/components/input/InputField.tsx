import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  type?: "text" | "email";
}

const InputField = ({ label, name, register, error, type = "text" }: InputFieldProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} {...register} className="input-field" />
      {error && <p className="text-error pt-1 text-sm">{error.message}</p>}
    </div>
  );
};

export default InputField;
