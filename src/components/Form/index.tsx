import { FormHTMLAttributes } from "react";
import { StyledForm } from "./styles";

interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {}

const Form = ({ onSubmit, children }: IFormProps) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;
