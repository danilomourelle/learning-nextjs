import { fireEvent, screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/helpers";
import GameCard from ".";
import theme from "@/styles/theme";

const props = {
  title: "Population Zero",
  developer: "Rockstar Games",
  img: "https://source.unsplash.com/user/willianjusten/300x140",
  price: "R$ 235,00",
};

describe("<GameCard />", () => {
  it("should render the head", () => {
    renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole("heading", { name: props.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: props.developer }),
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
      "src",
      props.img,
    );
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();

    // expect(container.firstChild).toMatchSnapshot();
  });
  it("should render price in label", () => {
    renderWithTheme(<GameCard {...props} />);

    const price = screen.getByText(props.price);

    expect(price).not.toHaveStyle({ textDecoration: "line-through" });
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary });
  });
  it("should render price with line through while promotional is is label", () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 20,00" />);

    const originalPrice = screen.getByText(props.price);
    const promotionalPrice = screen.getByText("R$ 20,00");

    expect(originalPrice).toHaveStyle({ textDecoration: "line-through" });
    expect(originalPrice).not.toHaveStyle({
      backgroundColor: theme.colors.secondary,
    });
    expect(promotionalPrice).toHaveStyle({
      backgroundColor: theme.colors.secondary,
    });
  });
  it("should render a filled Favorite icon when favorite is true", () => {
    renderWithTheme(<GameCard {...props} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });
  it("should call onFav method when favorite is clicked", () => {
    const onFavMock = jest.fn();
    renderWithTheme(<GameCard {...props} favorite onFav={onFavMock} />);

    fireEvent.click(screen.getAllByRole("button")[0]);

    expect(onFavMock).toHaveBeenCalled();
  });
  it("should render Ribbon", () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />,
    );

    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.secondary });
    expect(ribbon).toHaveStyle({ height: "2.6rem", fontSize: "1.2rem" });
  });
});
