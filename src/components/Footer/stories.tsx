import { Meta, StoryObj } from "@storybook/react";
import Footer from ".";

const meta: Meta<typeof Footer> = {
  title: "Footer",
  component: Footer,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
      <Footer />
    </div>
  ),
};
