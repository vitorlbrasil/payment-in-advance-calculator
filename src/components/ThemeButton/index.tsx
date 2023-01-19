import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

interface IThemeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ThemeButton = ({ type, children }: IThemeButtonProps) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default ThemeButton;
