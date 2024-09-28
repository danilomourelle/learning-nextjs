"use client";

import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} 0;
    position: relative;
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan("medium")`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    gap: ${theme.spacings.xsmall};
  `}
`;
