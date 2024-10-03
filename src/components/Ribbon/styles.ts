"use client";

import styled, { css, DefaultTheme } from "styled-components";
import { RibbonProps } from ".";
import { darken } from "polished";

const wrapperModifier = {
  color: (theme: DefaultTheme, color: Required<RibbonProps>["color"]) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: ${darken(0.2, theme.colors[color])};
    }
  `,
  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.small};
    right: -2rem;

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,
  small: (theme: DefaultTheme) => css`
    height: 2.6rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 ${theme.spacings.xsmall};
    right: -1.6rem;

    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.6rem;
    }
  `,
};

export const Wrapper = styled.div<Required<RibbonProps>>`
  ${({ theme, color, size }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    &::before {
      content: "";
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-bottom-width: 1rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }

    ${wrapperModifier.color(theme, color)}
    ${wrapperModifier[size](theme)}
  `}
`;
