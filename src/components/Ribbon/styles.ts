"use client";

import styled, { css, DefaultTheme } from "styled-components";
import { RibbonProps } from ".";

const wrapperModifier = {
  color: (theme: DefaultTheme, color: Required<RibbonProps>["color"]) => css`
    background-color: ${theme.colors[color]};
  `,
  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    font-size: ${theme.font.sizes.small};
  `,
  small: (theme: DefaultTheme) => css`
    height: 2.6rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
};

export const Wrapper = styled.div<Required<RibbonProps>>`
  ${({ theme, color, size }) => css`
    ${wrapperModifier.color(theme, color)}
    ${wrapperModifier[size](theme)}
  `}
`;
