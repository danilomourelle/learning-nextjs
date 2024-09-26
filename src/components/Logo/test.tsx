import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import Logo from ".";

describe("<Logo />", () => {
  it("should render white label by default", () => {
    // renderizar o componente com o `render`da testing-library
    // selecionar o elemento a ser testado com o `screen` da testing-library (queries)
    // expect
    renderWithTheme(<Logo />);

    const logoComponent = screen.getByLabelText(/won games/i).parentElement;

    expect(logoComponent).toHaveStyle({
      color: "#FAFAFA",
    });
  });
  it("should render black label when color is passed", () => {
    renderWithTheme(<Logo color="black" />);

    const logoComponent = screen.getByLabelText(/won games/i).parentElement;

    expect(logoComponent).toHaveStyle({
      color: "#030517",
    });
  });
  it("should render regular size by default", () => {
    renderWithTheme(<Logo />);

    const logoComponent = screen.getByLabelText(/won games/i).parentElement;

    expect(logoComponent).toHaveStyle({
      width: "11rem",
    });
  });
  it("should render large logo when size is passed", () => {
    renderWithTheme(<Logo size="large" />);

    const logoComponent = screen.getByLabelText(/won games/i).parentElement;

    expect(logoComponent).toHaveStyle({
      width: "20rem",
    });
  });
  it("should render a bigger logo without text on mobile if hideOnMobile", () => {
    renderWithTheme(<Logo $hideOnMobile />);

    const logoComponent = screen.getByLabelText(/won games/i).parentElement;

    expect(logoComponent).toHaveStyleRule("width", "5.8rem", {
      media: "(max-width:  768px)",
    });
  });
});
