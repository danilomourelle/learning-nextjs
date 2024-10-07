import { renderWithTheme } from "@/utils/tests/helpers";
import { screen } from "@testing-library/react";

import Highlight from ".";

const props = {
  title: "Heading 1",
  subtitle: "Heading 2",
  buttonLabel: "Buy now",
  buttonLink: "/link",
  $backgroundImage: "/img/red-dead-img.jpg",
};

describe("<Highlight />", () => {
  it("should render the headings and buttons", () => {
    renderWithTheme(<Highlight {...props} />);

    expect(
      screen.getByRole("heading", { name: /heading 1/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /heading 2/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /buy now/i })).toBeInTheDocument();

    // expect(container.firstChild).toMatchSnapshot();
  });
  it("should render ", () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.$backgroundImage})`,
    });
  });
});
