import "../../../.jest/match-media-mock";

import { renderWithTheme } from "@/utils/tests/helpers";
import BannerSlider from ".";
import { screen } from "@testing-library/dom";

const items = [
  {
    img: "https://images.unsplash.com/photo-1521484358791-8c8504da415e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Defy death 1",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
    ribbon: "Bestselling",
  },
  {
    img: "https://images.unsplash.com/photo-1521484358791-8c8504da415e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Defy death 2",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
  },
];

describe("<BannerSlider />", () => {
  it("should render vertical slider", () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelector(".slick-vertical")).toBeInTheDocument();

    // expect(container.firstChild).toMatchSnapshot();
  });
  it("should render with only one vertical item", () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelectorAll(".slick-slide")).toHaveLength(
      items.length,
    );
    expect(container.querySelectorAll("li.slick-active")).toHaveLength(1);
    expect(
      screen.getByRole("heading", { name: /defy death 1/i, hidden: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /defy death 2/i, hidden: true }),
    ).toBeInTheDocument();
  });
  it("should render with the dots", () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelector(".slick-dots")).toBeInTheDocument();
  });
});
