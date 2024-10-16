import { renderWithTheme } from "@/utils/tests/helpers";
import { screen } from "@testing-library/react";

import Highlight from ".";
import * as S from "./styles";

const props = {
  title: "Heading 1",
  subtitle: "Heading 2",
  buttonLabel: "Buy now",
  buttonLink: "/link",
  $backgroundImage: "/img/red-dead-img.jpg",
};

describe("<Highlight />", () => {
  it("should render the headings and buttons", () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(
      screen.getByRole("heading", { name: /heading 1/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /heading 2/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /buy now/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render background image", () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.$backgroundImage})`,
    });
  });
  it("should render float image", () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />);

    expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
      "src",
      "/float-image.png",
    );
  });
  it("should render float image on left and text on right side by default", () => {
    const { container } = renderWithTheme(
      <Highlight {...props} floatImage="/float-image.png" />,
    );

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      '"floatImage content"',
    );
    expect(container.firstChild).toHaveStyleRule("text-align", "right", {
      modifier: `${S.Content}`,
    });
  });
  it("should render float image on right and text on left if passed", () => {
    const { container } = renderWithTheme(
      <Highlight {...props} floatImage="/float-image.png" alignment="right" />,
    );

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      '"content floatImage"',
    );
    expect(container.firstChild).toHaveStyleRule("text-align", "left", {
      modifier: `${S.Content}`,
    });
  });
});
