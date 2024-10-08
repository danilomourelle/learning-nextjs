import { fireEvent, screen } from "@testing-library/react";

import Menu from ".";
import { renderWithTheme } from "@/utils/tests/helpers";

describe("<Menu />", () => {
  it("should render the menu", () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /won games/i })).toBeInTheDocument();
  });
  it("should hide menu by default", () => {
    renderWithTheme(<Menu />);

    const fullMenu = screen.getByRole("navigation", { hidden: true });

    expect(fullMenu.getAttribute("aria-hidden")).toBe("true");
    expect(fullMenu).toHaveStyle({ opacity: 0 });
  });
  it("should show menu when clicked", () => {
    renderWithTheme(<Menu />);

    const fullMenu = screen.getByRole("navigation", { hidden: true });
    const menuButton = screen.getByLabelText(/open menu/i);
    fireEvent.click(menuButton);
    const closeMenuIcon = screen.getByLabelText(/close menu/i);

    expect(fullMenu.getAttribute("aria-hidden")).toBe("false");
    expect(fullMenu).toHaveStyle({ opacity: 1 });
    expect(closeMenuIcon).toBeInTheDocument();
  });
  it("should hide menu when clicked on a opened menu", () => {
    renderWithTheme(<Menu />);

    const fullMenu = screen.getByRole("navigation", { hidden: true });
    const menuButton = screen.getByLabelText(/open menu/i);
    fireEvent.click(menuButton);
    const closeMenuIcon = screen.getByLabelText(/close menu/i);
    fireEvent.click(closeMenuIcon);

    expect(fullMenu.getAttribute("aria-hidden")).toBe("true");
    expect(fullMenu).toHaveStyle({ opacity: 0 });
  });
  it("should show register box when no user is logged in", () => {
    renderWithTheme(<Menu />);

    expect(screen.getByText(/log in now/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  });
  it("should show all links when there is an user logged in", () => {
    renderWithTheme(<Menu username="dan" />);

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
    expect(screen.getByText(/my account/i)).toBeInTheDocument();
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument();
  });
});
