import { InputHTMLAttributes } from "react";
import { StyledInput } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ id, name, type, placeholder }: IInputProps) => {
  return (
    <StyledInput type={type} id={id} name={name} placeholder={placeholder} />
  );
};

export default Input;
