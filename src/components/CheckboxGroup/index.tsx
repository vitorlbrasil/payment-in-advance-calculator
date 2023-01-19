import { HTMLAttributes } from "react";
import { StyledDiv } from "./styles";

interface ICheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {}

const CheckboxGroup = ({ children }: ICheckboxGroupProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default CheckboxGroup;
