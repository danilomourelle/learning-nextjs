import React from "react";
import GlobalStyles from "../src/styles/global.ts";
import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme.ts";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
