import { screen } from "@testing-library/react";

import Banner from ".";
import { renderWithTheme } from "@/utils/tests/helpers";

const props = {
  img: "https://unsplash.com/pt-br/fotografias/menino-jogando-donkey-kong-arcade-box-PgToaHfQjq0",
  title: "Defy death",
  subtitle: "Play the new CrashLands season",
  buttonLabel: "Buy now",
  buttonLink: "/games/defy-death",
};

describe("<Banner />", () => {
  it("should render the head", () => {
    renderWithTheme(<Banner {...props} />);

    const title = screen.getByRole("heading", { name: props.title });
    const subtitle = screen.getByRole("heading", { name: props.subtitle });
    const image = screen.getByRole("img", { name: props.title });
    const buttonLink = screen.getByRole("link", { name: props.buttonLabel });

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(buttonLink).toBeInTheDocument();
  });
});
