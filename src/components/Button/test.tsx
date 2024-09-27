import { screen } from "@testing-library/react";

import Button from ".";
import { renderWithTheme } from "@/utils/tests/helpers";
import { AddShoppingCart } from "@styled-icons/material-outlined";

describe("<Button />", () => {
  it("should render the medium size by default", () => {
    const { container } = renderWithTheme(<Button>Lorem ipsum</Button>);

    const button = screen.getByRole("button", { name: /lorem ipsum/i });

    expect(container.firstChild).toMatchSnapshot();
    expect(button).toHaveStyle({
      height: "4rem",
      "font-size": "1.4rem",
      padding: "0.8rem 3.2rem 0.8rem 3.2rem",
    });
  });
  it("should render the small size when props set", () => {
    renderWithTheme(<Button size="small">Lorem ipsum</Button>);

    const button = screen.getByRole("button", { name: /lorem ipsum/i });

    expect(button).toHaveStyle({
      height: "3rem",
      "font-size": "1.2rem",
    });
  });
  it("should render the large size when props set", () => {
    renderWithTheme(<Button size="large">Lorem ipsum</Button>);

    const button = screen.getByRole("button", { name: /lorem ipsum/i });

    expect(button).toHaveStyle({
      height: "5rem",
      "font-size": "1.6rem",
      padding: "0.8rem 4.8rem 0.8rem 4.8rem",
    });
  });
  it("should render the full width when props set", () => {
    renderWithTheme(<Button $fullWidth>Lorem ipsum</Button>);

    const button = screen.getByRole("button", { name: /lorem ipsum/i });

    expect(button).toHaveStyle({
      width: "100%",
    });
  });
  it("should render an icon when props set", () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>,
    );

    const button = screen.getByText(/buy now/i);
    const icon = screen.getByTestId("icon");

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
