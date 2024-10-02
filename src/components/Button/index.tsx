import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  icon?: JSX.Element;
  size?: "small" | "medium" | "large";
  $fullWidth?: boolean;
  as?: React.ElementType;
} & ButtonTypes;

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
