import { HTMLAttributes } from "react";
import { StyledP } from "./styles";

interface ILabelParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

const LabelParagraph = ({ children }: ILabelParagraphProps) => {
  return <StyledP>{children}</StyledP>;
};

export default LabelParagraph;
