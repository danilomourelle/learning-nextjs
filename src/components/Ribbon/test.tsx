import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import Ribbon from ".";

describe("<Ribbon />", () => {
  it("should render the text", () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    const component = screen.getByText(/best seller/i);

    expect(component).toBeInTheDocument();

    // expect(container.firstChild).toMatchSnapshot();
  });
  it("should render primary color by default", () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    const component = screen.getByText(/best seller/i);

    expect(component).toHaveStyle({
      backgroundColor: "#F231A5",
    });
  });
  it("should render primary color by default", () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    const component = screen.getByText(/best seller/i);

    expect(component).toHaveStyle({
      backgroundColor: "#F231A5",
    });
  });
  it("should render any color when passed", () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>);

    const component = screen.getByText(/best seller/i);

    expect(component).toHaveStyle({
      backgroundColor: "#3CD3C1",
    });
  });
  it("should render normal size by default", () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    const component = screen.getByText(/best seller/i);

    expect(component).toHaveStyle({
      height: "3.6rem",
      fontSize: "1.4rem",
    });
  });
  it("should render small size when passed", () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>);

    const component = screen.getByText(/best seller/i);

    expect(component).toHaveStyle({
      height: "2.6rem",
      fontSize: "1.2rem",
    });
  });
});
