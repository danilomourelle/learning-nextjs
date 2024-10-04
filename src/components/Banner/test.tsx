import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/helpers";
import Banner from ".";

const props = {
  img: "https://unsplash.com/pt-br/fotografias/menino-jogando-donkey-kong-arcade-box-PgToaHfQjq0",
  title: "Defy death",
  subtitle: "Play the new CrashLands season",
  buttonLabel: "Buy now",
  buttonLink: "/games/defy-death",
};

describe("<Banner />", () => {
  it("should render the banner", () => {
    const { container } = renderWithTheme(<Banner {...props} />);

    const title = screen.getByRole("heading", { name: props.title });
    const subtitle = screen.getByRole("heading", { name: props.subtitle });
    const image = screen.getByRole("img", { name: props.title });
    const buttonLink = screen.getByRole("link", { name: props.buttonLabel });

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(buttonLink).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render a Ribbon", () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />,
    );

    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({
      backgroundColor: "#3CD3C1",
      height: "2.6rem",
      fontSize: "1.2rem",
    });
  });
});
