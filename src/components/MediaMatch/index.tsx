import styled, { css } from "styled-components";
import media, { DefaultBreakpoints } from "styled-media-query";

type DefaultBreakpointsKeys = keyof DefaultBreakpoints;

export type MediaMatchProps = {
  $lessThan?: DefaultBreakpointsKeys;
  $greaterThan?: DefaultBreakpointsKeys;
};

const mediaMatchModifiers = {
  lessThan: (size: DefaultBreakpointsKeys) => css`
    ${media.lessThan(size)` display: block; `}
  `,
  greaterThan: (size: DefaultBreakpointsKeys) => css`
    ${media.greaterThan(size)` display: block; `}
  `,
};

export default styled.div<MediaMatchProps>`
  ${({ $lessThan, $greaterThan }) => css`
    display: none;

    ${!!$lessThan && mediaMatchModifiers.lessThan($lessThan)}
    ${!!$greaterThan && mediaMatchModifiers.greaterThan($greaterThan)}
  `}
`;
