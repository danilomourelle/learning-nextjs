import React from "react";
import * as S from "./styles";

export type RibbonProps = {
  children: React.ReactNode;
  color?: "primary" | "secondary";
  size?: "normal" | "small";
};

export default function Ribbon(props: RibbonProps) {
  const { children, ...others } = props;
  const defaultProps: Required<typeof others> = {
    color: "primary",
    size: "normal",
    ...others,
  };

  return <S.Wrapper {...defaultProps}>{children}</S.Wrapper>;
}
