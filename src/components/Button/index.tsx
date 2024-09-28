import React from "react";
import * as S from "./styles";

export type ButtonProps = {
  children?: React.ReactNode;
  icon?: JSX.Element;
  size?: "small" | "medium" | "large";
  $fullWidth?: boolean;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  children,
  icon,
  size = "medium",
  $fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper size={size} $fullWidth={$fullWidth} $hasIcon={!!icon} {...props}>
      {!!icon && icon}
      {!!children && children}
    </S.Wrapper>
  );
}
