import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputTextAreaProps {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  rows?: number;
}

const InputTextArea = ({
  label,
  name,
  register,
  error,
  rows = 5,
}: InputTextAreaProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...register} rows={rows} className="input-field resize-none" />
      {error && <p className="text-error text-sm">{error.message}</p>}
    </div>
  );
};

export default InputTextArea;
