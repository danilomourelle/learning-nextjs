"use client";

import styled, { css } from "styled-components";
import { HighlightProps } from ".";
import media from "styled-media-query";

const wrapperModifier = {
  right: () => css`
    grid-template-areas: "content floatImage";

    ${Content} {
      text-align: left;
    }

    ${FloatImage} {
      justify-self: end;
    }
  `,
  left: () => css`
    grid-template-areas: "floatImage content";

    ${Content} {
      text-align: right;
    }
  `,
};

export const Wrapper = styled.section<
  Pick<Required<HighlightProps>, "$backgroundImage" | "alignment">
>`
  ${({ $backgroundImage, alignment }) => css`
    position: relative;
    background-image: url(${$backgroundImage});
    background-position: center center;
    background-size: cover;
    height: 23rem;
    display: grid;
    grid-template-areas: "floatImage content";

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${media.greaterThan("medium")`
      height: 32rem;
    `}

    ${wrapperModifier[alignment]()}
  `}
`;

export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatImage;
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;
    align-self: end;

    ${media.greaterThan("medium")`
      max-height: 32rem;
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan("medium")`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;
