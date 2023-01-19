import { HTMLAttributes } from "react";
import { StyledDiv } from "./styles";

interface IInputGroupProps extends HTMLAttributes<HTMLDivElement> {}

const InputGroup = ({ children }: IInputGroupProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default InputGroup;
