import { render, screen } from "@testing-library/react";

import Main from ".";

describe("<Main />", () => {
  it("should render the head", () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole("heading", { name: "React Avançado" }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the colors", () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ "background-color": "#06092b" });
  });
});
