import { screen } from "@testing-library/react";

import Button from ".";
import { renderWithTheme } from "@/utils/tests/helpers";

describe("<Button />", () => {
  it("should render the medium size by default", () => {
    renderWithTheme(<Button>Lorem ipsum</Button>);

    const component = screen.getByRole("button", { name: /lorem ipsum/i });

    expect(component).toHaveStyle({
      height: "4rem",
      "font-size": "1.4rem",
      padding: "0.8rem 3.2rem 0.8rem 3.2rem",
    });
  });
  it("should render the small size when props set", () => {
    renderWithTheme(<Button size="small">Lorem ipsum</Button>);

    const component = screen.getByRole("button", { name: /lorem ipsum/i });

    expect(component).toHaveStyle({
      height: "3rem",
      "font-size": "1.2rem",
    });
  });
  it("should render the large size when props set", () => {
    renderWithTheme(<Button size="large">Lorem ipsum</Button>);

    const component = screen.getByRole("button", { name: /lorem ipsum/i });

    expect(component).toHaveStyle({
      height: "5rem",
      "font-size": "1.6rem",
      padding: "0.8rem 4.8rem 0.8rem 4.8rem",
    });
  });
});
