import { InputHTMLAttributes } from "react";

interface ICheckboxInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const CheckboxInput = ({ id, name, type }: ICheckboxInputProps) => {
  return <input type={type} id={id} name={name} />;
};

export default CheckboxInput;
