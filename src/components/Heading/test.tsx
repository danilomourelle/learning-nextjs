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
    renderWithTheme(
      <Heading $lineLeft $lineColor="secondary">
        Won Games
      </Heading>,
    );

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
  it("should render heading with small font and small bottom line", () => {
    renderWithTheme(
      <Heading $size="small" $lineBottom>
        Won Games
      </Heading>,
    );

    const logoComponent = screen.getByRole("heading", { name: /won games/i });

    expect(logoComponent).toHaveStyle({
      "font-size": "1.6rem",
    });
    expect(logoComponent).toHaveStyleRule("width", "3rem", {
      modifier: "::after",
    });
  });
  it("should render heading with primary line color", () => {
    renderWithTheme(
      <Heading $lineColor="primary" $lineLeft $lineBottom>
        Won Games
      </Heading>,
    );

    const heading = screen.getByRole("heading", { name: /won games/i });

    expect(heading).toHaveStyle({ "border-left": "0.7rem solid #F231A5" });
    expect(heading).toHaveStyleRule("border-bottom", "0.5rem solid #F231A5", {
      modifier: "::after",
    });
  });
  it("should render heading with secondary line color", () => {
    renderWithTheme(
      <Heading $lineColor="secondary" $lineLeft $lineBottom>
        Won Games
      </Heading>,
    );

    const heading = screen.getByRole("heading", { name: /won games/i });

    expect(heading).toHaveStyle({ "border-left": "0.7rem solid #3CD3C1" });
    expect(heading).toHaveStyleRule("border-bottom", "0.5rem solid #3CD3C1", {
      modifier: "::after",
    });
  });
});
