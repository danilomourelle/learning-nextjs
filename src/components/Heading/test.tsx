import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import Heading from ".";

describe("<Heading />", () => {
  it("should render white heading by default", () => {
    // renderizar o componente com o `render`da testing-library
    // selecionar o elemento a ser testado com o `screen` da testing-library (queries)
    // expect
    renderWithTheme(<Heading>Won Games</Heading>);

    const logoComponent = screen.getByRole("heading", { name: /won games/i });

    expect(logoComponent).toHaveStyle({
      color: "#FAFAFA",
    });
  });
  it("should render black heading when color is passed", () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>);

    const logoComponent = screen.getByRole("heading", { name: /won games/i });

    expect(logoComponent).toHaveStyle({
      color: "#030517",
    });
  });
  it("should render a line to the left side of the heading", () => {
    renderWithTheme(<Heading $lineLeft>Won Games</Heading>);

    const logoComponent = screen.getByRole("heading", { name: /won games/i });

    expect(logoComponent).toHaveStyle({
      "border-left": "0.7rem solid #3CD3C1",
    });
  });
  it("should render a line at the bottom of the heading", () => {
    renderWithTheme(<Heading $lineBottom>Won Games</Heading>);

    const logoComponent = screen.getByRole("heading", { name: /won games/i });

    expect(logoComponent).toHaveStyleRule("width", "5rem", {
      modifier: "::after",
    });
  });
});
