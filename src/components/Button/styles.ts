"use client";

import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";

type WrapperProps = {
  $hasIcon: boolean;
} & Pick<ButtonProps, "size" | "$fullWidth">;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding-right: ${theme.spacings.medium};
    padding-left: ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding-right: ${theme.spacings.xlarge};
    padding-left: ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      margin-right: ${theme.spacings.xxsmall};
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, $fullWidth, $hasIcon }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${$fullWidth && wrapperModifiers.fullWidth()}
    ${$hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`;
