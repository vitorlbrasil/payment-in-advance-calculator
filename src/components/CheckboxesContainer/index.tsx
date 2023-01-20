import { HTMLAttributes } from "react";
import { StyledDiv } from "./styles";

interface ICheckboxesContainerProps extends HTMLAttributes<HTMLDivElement> {}

const CheckboxesContainer = ({ children }: ICheckboxesContainerProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default CheckboxesContainer;
