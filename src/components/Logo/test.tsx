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
});
