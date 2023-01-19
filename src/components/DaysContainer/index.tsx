import { HTMLAttributes } from "react";
import { StyledDiv } from "./styles";

interface IDaysContainerProps extends HTMLAttributes<HTMLDivElement> {}

const DaysContainer = ({ children }: IDaysContainerProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default DaysContainer;
