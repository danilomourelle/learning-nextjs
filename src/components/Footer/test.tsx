import { screen } from "@testing-library/react";

import Footer from ".";
import { renderWithTheme } from "@/utils/tests/helpers";

describe("<Footer />", () => {
  it("should render 4 column topics", () => {
    renderWithTheme(<Footer />);

    const contact = screen.getByRole("heading", { name: /contact/i });
    const follow = screen.getByRole("heading", { name: /follow us/i });
    const links = screen.getByRole("heading", { name: /links/i });
    const location = screen.getByRole("heading", { name: /location/i });
    const content = screen.getByTestId("footer-grid");

    expect(contact).toBeInTheDocument();
    expect(follow).toBeInTheDocument();
    expect(links).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(content).toHaveStyleRule("grid-template-columns", "repeat(2,1fr)");
    expect(content).toHaveStyleRule("grid-template-columns", "repeat(4, 1fr)", {
      media: "(min-width:  768px)",
    });
  });
});
