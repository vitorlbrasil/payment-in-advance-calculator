import { LabelHTMLAttributes } from "react";
import { StyledLabel } from "./style";

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label = ({ htmlFor, children }: ILabelProps) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
